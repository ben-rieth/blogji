import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs/promises';
import { postCache, sortByPublishedDate } from "../../../utils/posts";
import { type PostWithId } from "../../../types/Posts";
import * as z from 'zod';

const schema = z.object({
    query: z.string(),
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        if (req.method === 'GET') {

            let data;
            try {
                data = schema.parse(req.query);
            } catch(err) {
                return res.status(400).json({
                    message: 'Must have search query',
                });
            }

            const searchQuery = data.query.toLowerCase();

            const posts : PostWithId[] = JSON.parse(await fs.readFile(postCache, 'utf-8'));

            const results = posts.filter((post) => {
                return (
                    post.title.toLowerCase().includes(searchQuery) ||
                    post.abstract.toLowerCase().includes(searchQuery));
            });

            const sortResults =sortByPublishedDate(results); 

            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(sortResults);

        } else {
            res.statusCode = 405;
            res.setHeader('Allow', ['GET']);
            res.json({
                message: 'Method not allowed'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server error",
        })
    }

    
}

export default handler;