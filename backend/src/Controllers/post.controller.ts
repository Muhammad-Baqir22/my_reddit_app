import { Request, Response } from "express";
import prisma from "../db/prismaclient.js";
import { Post } from "../ResponseModel/userpost.ResponseModel.js";
import { TypedResponse } from '../types/typedResponse.js';
import { ApiResponse } from "../ResponseModel/api.ResponseModel.js";

export const postController = async (req: Request, res: TypedResponse<ApiResponse<Post>>): Promise<any> => {
    const { title, content, name } = req.body;
    let subreddit_id = await prisma.subreddit.findUnique({
        where: { name }
    })
    if (!subreddit_id) {
        return res.status(400).json({ success: false, message: "Subreddit not found" });
    }
    const userid = (req as any).user_id;

    try {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                user_id: userid,
                subreddit_id: subreddit_id.id
            }
        });



        return res.status(200).json({ success: true, message: 'Post Ctreated', data: { title: post.title, content: post.content, user_id: post.user_id, subreddit_id: post.subreddit_id } });
    } catch (error: any) {
        return res.status(200).json({ success: false, message: 'Post not Ctreated', error: error.message })


    }
}

export const getPostController = async (req: Request, res: TypedResponse<ApiResponse<Post[]>>): Promise<any> => {

    const userid = (req as any).user_id;

    try {
        const subreddit = await prisma.post.findMany({
            // where:{created_by:userid},

            // select: {
            // id: true,
            // title: true, 
            // content: true



        })
        if (!subreddit) {
            return res.status(404).json({ success: false, message: 'Post not found' })
        }
        return res.status(200).json({ success: true, message: 'Post found', data: subreddit })

    } catch (error: any) {
        return res.status(200).json({ success: false, message: 'Post not found', error: error.message });
    }
}






