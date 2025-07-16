import z from 'zod';

const postValidation = z.object({
    body: z.object({
        title: z.string().min(10,{message:"Title should have atleast 10 characters"}).max(50,{message:"Title can't excced 50 characters"}),
        description: z.string().min(10,{message:"Description should have atleast 10 characters"}).max(100,{message:"Description can't be more than 1000 characters"}).or(z.literal("")).optional()
    })
})
export default postValidation;