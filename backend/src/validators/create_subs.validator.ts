import z from 'zod';

const subsValidation = z.object({
    body: z.object({
        name: z.string().min(5, { message: "Subs should have atleast 5 characters" }).max(20, { message: "Subs should have max 20 characters" }),
        description: z.string().min(10, { message: "description should have 10 characters" }).max(100, { message: "Description can not exceed from 100 chracters" }).or(z.literal("")).optional(),
    })
})
export default subsValidation;