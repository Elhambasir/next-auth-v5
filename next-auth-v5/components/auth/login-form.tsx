"use client"
import React, { useState } from 'react'
import { CardWrapper } from './card-wrapper'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { login } from '@/actions/login'
import { useTransition } from 'react'
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    FormLabel
}
    from "@/components/ui/form"
import ErrorMessage from '../formErrorMessage'
import SuccessMessage from '../formSuccessMessage'
export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            login(values).then((data: any) => {
                console.log(data)
                // setError(data.error);
                // setSuccess(data.success);
            })
        })
    }
    return (
        <CardWrapper
            headerLabel='Welcom back'
            backButtonHref='/auth/register'
            backButtonLabel='Don not have an account'
            showSocial
        >
            <Form {...form} >
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'>
                    <div className="space-7-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                            placeholder='youremail@gmail.com'
                                            type='email' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                            placeholder='*****'
                                            type='password' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button>Submit</Button>
                </form>
            </Form>
            <ErrorMessage message={error != "" ? error : null} />
            <SuccessMessage message={success != "" ? success : null} />
        </CardWrapper>
    )
}
