import { Request, Response } from "express";
import prisma from "../db/prismaclient.js";
import { Post } from "../ResponseModel/userpost.ResponseModel.js";
import { TypedResponse } from '../types/typedResponse.js';
import { ApiResponse } from "../ResponseModel/api.ResponseModel.js";


export const postController = async (req: Request, res: TypedResponse<ApiResponse<Post>>): Promise<any> => {
    const { title, content, id } = req.body;
    const userid = (req as any).user_id;
    try {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                user_id: userid,
                subreddit_id: id && id.trim() !== "" ? id : null
            }
        });
        return res.status(200).json({ success: true, message: 'Post Ctreated', data: { title: post.title, content: post.content, user_id: post.user_id, subreddit_id: post.subreddit_id } });
    } catch (error: any) {
        if (error.code === 'P2003') {
            return res.status(400).json({ success: false, message: 'Invalid subreddit_id: The subreddit does not exist.' });
        }
        return res.status(400).json({ success: false, message: 'Post not Ctreated', error: error.message })
    }
}

export const getPostController = async (req: Request, res: TypedResponse<ApiResponse<Post[]>>): Promise<any> => {
    try {
        const subreddit = await prisma.post.findMany({})
        if (!subreddit) {
            return res.status(404).json({ success: false, message: 'Post not found' })
        }
        return res.status(200).json({ success: true, message: 'Post found', data: subreddit })

    } catch (error: any) {
        return res.status(200).json({ success: false, message: 'Post not found', error: error.message });
    }
}

export const getuserpost = async (req: Request, res: TypedResponse<ApiResponse<Post[]>>): Promise<any> => {
    const userid = (req as any).user_id;
    try {
        const userpost = await prisma.post.findMany({
            where: { user_id: userid }
        })
        if (!userpost) {
            return res.status(404).json({ success: false, message: "User post not found" })
        }
        return res.status(200).json({ success: true, message: "User post found", data: userpost })
    } catch (error: any) {
        return res.status(400).json({ success: false, message: "User post not found", error: error })
    }
}






