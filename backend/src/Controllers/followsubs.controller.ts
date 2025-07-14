import { Request,Response } from "express";
import  prisma  from '../db/prismaclient.js'
// import { TypedResponse } from '../types/typedResponse.js';
// import { ApiResponse } from "../ResponseModel/api.ResponseModel.js";



export const followcontroller = async (req:Request,res:Response) => {

    const followed_by_id = (req as any).user_id;
    const followed_to_id = req.body.followed_to_id;
    const subreddit = await prisma.userSubs.create({
        data:{
            followed_by_id:followed_by_id,
            followed_to_id
        }

    })

    res.json({success:true,message:'followed',data:subreddit})
    //res.json({subreddit});


}
