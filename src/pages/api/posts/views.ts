import { Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";
import { prisma } from "../../../utils/db";

const schema = z.object({
    title: z.string(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {

        let title;
        try {

            const query = schema.parse(req.query);
            title = query.title;

        } catch (err) {
            res.status(400).json({
                msg: 'Post title must be included in request.'
            })
        }

        try {
            const updatedCount = await prisma.post.update({
                where: { title },
                data: {
                    views: { increment: 1, }
                }
            });

            res.status(200).json({
                views: updatedCount,
            })
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                return res.status(404).json({
                    msg: 'Post does not exist'
                })
            }
            
            res.status(500).json({
                msg: "Error getting data from database"
            });
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({
            msg: 'Method not allowed'
        });
    }
}

export default handler;