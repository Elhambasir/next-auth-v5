'use server'
import * as z from "zod"
import { RegisterSchema } from "@/schemas"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"

export const register = async (values: z.infer<typeof RegisterSchema>)=> {
    const validatedFields:any = RegisterSchema.safeParse(values);

    if(!validatedFields) return {error: "Invalid fields!"}

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password,10);

    const ifEmailExist = await db.user.findUnique({
        where: {
            email
        }
    })

    if(ifEmailExist) return {error: "Email already taken"};

    await db.user.create({
        data:{
            email,
            password:hashedPassword,
            name
        }
    })

    return {success: "User created successfully!"}


}