import { Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../utils/db";

const schema = z.object({
    title: z.string(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {

        let title;
        try {
            console.log(req.body);
            const body = schema.parse(req.body);
            title = body.title;

        } catch (err) {
            return res.status(400).json({
                msg: 'Post title must be included in request.'
            })
        }

        if (env.NODE_ENV === 'development') {
            try {

                const post = await prisma.post.findUnique({
                    where: { title }
                });

                return res.status(200).json({
                    views: post?.views,
                });

            } catch (err) {
                return res.status(500).json({
                    msg: "Error getting data from database"
                });
            }
        }

        try {
            const post = await prisma.post.update({
                where: { title },
                data: {
                    views: { increment: 1, },
                }
            });

            return res.status(200).json({
                views: post.views,
            })
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                return res.status(404).json({
                    msg: 'Post does not exist'
                })
            }
            
            return res.status(500).json({
                msg: "Error getting data from database"
            });
        }
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({
            msg: 'Method not allowed'
        });
    }
}

export default handler;