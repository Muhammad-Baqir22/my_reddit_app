import z from 'zod';

export const commentvote = z.object({
    body:z.object({
        
        vote_type:z.number().refine(val=>[-1,0,1].includes(val),{message:"Vote Tyoe should be -1,0,1"}),
        comment_id:z.string().uuid({message:"Comment ID should be valid"})
    })
})