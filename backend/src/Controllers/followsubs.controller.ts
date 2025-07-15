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

export const getfollowsubs = async (req: Request, res: Response): Promise<any> => {
  const followed_by_id = (req as any).user_id;
  const subs = await prisma.userSubs.findMany({
    where: {
      followed_by_id
    },
  })
  if (!subs) {
    return res.status(400).json({ success: false, message: "You did not have follow any subs" });
  }
  return res.json({ success: true, message: 'get follow subs', data: subs });
}

export const unfollowsub = async (req: Request, res: Response): Promise<any> => {
  const followed_by_id = (req as any).user_id;
  const subs_id = req.body.sub_id;
  const check = await prisma.userSubs.findUnique({
    where: {
      followed_by_id_subs_id: {
        followed_by_id,
        subs_id
      }
    }
  })
  if (check) {
    const unfollow = await prisma.userSubs.delete({
      where: {
        followed_by_id_subs_id: {
          followed_by_id,
          subs_id
        }
      }
    })
    return res.status(200).json({ success: true, message: "Subs unfollowed", data: unfollow })
  }
  return res.status(400).json({ success: false, message: "You did not follow this sub"})
}