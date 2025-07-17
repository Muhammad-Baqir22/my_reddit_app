import z from 'zod';

const commentValidator = z.object({
    body:z.object({
        content: z.string().min(1,{message:"Comment should have atleast 1 characters"}).max(1000,{message:"Comment can't exceed from 1000 characters"}).optional(),
        post_id: z.string().uuid({message:"Invalid Sub ID"})
    })
})

export default commentValidator;