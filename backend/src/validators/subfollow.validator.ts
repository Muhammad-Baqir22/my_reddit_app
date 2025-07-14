import z from 'zod';

const subfollowValidation = z.object({
    body: z.object({
        sub_id: z.string().uuid({message:"Invalid Sub ID"})
    })
    
})

export default subfollowValidation;