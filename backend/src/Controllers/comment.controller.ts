import { Request, Response } from "express";
import prisma from "../db/prismaclient.js";
import { TypedResponse } from '../types/typedResponse.js';
import { ApiResponse } from "../ResponseModel/api.ResponseModel.js";
import  {comment}  from "../ResponseModel/comment.ResponseModel.js";


export const postcomment = async (req: Request, res: TypedResponse<ApiResponse<comment>>): Promise<any> => {
    const { content, post_id, parent_id } = req.body;
    const user_id = (req as any).user_id;
    const check_post = await prisma.post.findUnique({ where: { id: post_id } })
    if (!check_post) {
        return res.status(404).json({success:false, message: "Post not found" })
    }
    try {
        const comment = await prisma.comment.create({
            data: {
                content,
                user_id,
                post_id,
                parent_comment_id: parent_id && parent_id !== "" ? parent_id : null
            }
        });
        return res.status(201).json({ success:true,message: "Comment created successfully",data: comment });
    } catch (error: any) {
        if (error.code == 'P2003') {
            return res.status(400).json({success:false, message: "Parent id is not correct" })
        }
        return res.status(500).json({ success:false,message: error.message })
    }
}


export const getcomments = async (req: Request, res:TypedResponse<ApiResponse<comment[]>>): Promise<any> => {
    const post_id = req.params.id;
    const comments = await prisma.comment.findMany({
        where: { post_id },
        include: {
            author: {
                select: { username: true }
            }
        }
    });
    try {
        if (!comments) {
            return res.status(404).json({ success: false, message: "There is no comment in this post" })
        }

        const commentObj = new Map<string, any>();
        comments.forEach(comment => {
            commentObj.set(comment.id, {
                id: comment.id,
                content: comment.content,
                created_at: comment.created_at,
                parent_comment_id: comment.parent_comment_id,
                user_id: comment.user_id,
                post_id: comment.post_id,
                username: comment.author.username,
                replies: []
            });
        })
        const root: any[] = [];
        comments.forEach(comment => {
            const currentcomment = commentObj.get(comment.id);
            if (comment.parent_comment_id) {
                const parentcomment = commentObj.get(comment.parent_comment_id);
                if (parentcomment) {
                    parentcomment.replies.push(currentcomment);
                }
            } else {
                root.push(currentcomment);
            }
        })

        return res.status(200).json({ success: true, message: "All post comment", data: root })
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

