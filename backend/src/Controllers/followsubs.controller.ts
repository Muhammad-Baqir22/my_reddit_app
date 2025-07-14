import { Request, Response } from "express";
import prisma from '../db/prismaclient.js'
// import { TypedResponse } from '../types/typedResponse.js';
// import { ApiResponse } from "../ResponseModel/api.ResponseModel.js";



export const followcontroller = async (req: Request, res: Response) => {

  const followed_by_id = (req as any).user_id;
  const subs_id = req.body.sub_id;
  const check = await prisma.userSubs.findUnique({
    where: {
      followed_by_id_subs_id: {
        followed_by_id,
        subs_id
      }
    }
  });
  if (check) {
    res.json({ success: false, message: "User already follow the subs" })
  }

  const subreddit = await prisma.userSubs.create({
    data: {
      followed_by_id: followed_by_id,
      subs_id
    }

  })



  res.json({ success: true, message: 'followed', data: subreddit })


}
