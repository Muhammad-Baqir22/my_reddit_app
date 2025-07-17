import { Request, Response } from "express";
import prisma from '../db/prismaclient.js'
// import { success } from "zod";
export const votePost = async (req: Request, res: Response) => {
    const { vote_type, post_id } = req.body;
    const user_id = (req as any).user_id;
    if (![1, -1, 0].includes(vote_type)) {
        return res.status(400).json({ message: "Invalid vote type" });
    }
    try {
        const existingVote = await prisma.postVote.findUnique({
            where: {
                user_id_post_id: {
                    user_id,
                    post_id
                }
            }
        })

        if (existingVote) {
            if (vote_type === 0) {
                await prisma.postVote.delete({
                    where: {
                        user_id_post_id: {
                            user_id,
                            post_id
                        }
                    }
                })
                
            }
            else {
                await prisma.postVote.update({
                    where: {
                        user_id_post_id: {
                            user_id,
                            post_id
                        }
                    },
                    data: {
                        vote_type,
                    }

                })
                

            }
        } else {
            await prisma.postVote.create({
                data: {
                    user_id,
                    post_id,
                    vote_type
                }
            })
        }
        const sumvote = await prisma.postVote.aggregate({
                where: {
                    post_id
                },
                _sum: {
                    vote_type: true
                }

            })
            return res.status(200).json({ success: true, message: "Vote added successfully",sumvote:sumvote._sum.vote_type })
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message })
    }
}