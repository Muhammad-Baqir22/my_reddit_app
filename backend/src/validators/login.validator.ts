import z from "zod";

const loginValidator = z.object({
    body: z.object({
        email: z.string().email({ message: "Invalid Email" }),
        password: z.string().min(8, { message: "password Should be 8 digit long" }),
    })
})
export default loginValidator;