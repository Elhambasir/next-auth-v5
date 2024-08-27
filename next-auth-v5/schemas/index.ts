import * as z from "zod"
export const LoginSchema = z.object({
    email:z.string().email(),
    password: z.string()
})
export const RegisterSchema = z.object({
    email:z.string().email(),
    password: z.string().min(6, "At least 6 char"),
    name: z.string()
})