import z from  "zod";

 const userValidation = z.object({
body: z.object({
    username: z.string().min(3,{message:"Name at least 3 alphabet long"}).max(50,{message:"Max Long can have 50 alphabet"}),
    email: z.string().email({message:"Invalid Email"}),
    password: z.string().min(8,{message:"Pasword Should be minimum 8 digit long"})


    
}),
});
export default userValidation;