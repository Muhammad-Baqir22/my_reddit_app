import z from 'zod';

export const votepost = z.object({
    body:z.object({
        
        vote_type:z.number().refine(val=>[-1,0,1].includes(val),{message:"Vote Tyoe should be -1,0,1"}),
        post_id:z.string().uuid({message:"Post ID should be valid"})
    })
})