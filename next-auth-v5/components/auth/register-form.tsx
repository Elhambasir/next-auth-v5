"use client"
import React, { useState } from 'react'
import { CardWrapper } from './card-wrapper'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema } from '@/schemas'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { register } from '@/actions/register'
import { useTransition } from 'react'
import ErrorMessage from '../formErrorMessage'
import SuccessMessage from '../formSuccessMessage'
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    FormLabel
}
    from "@/components/ui/form"
export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            register(values).then((data: any) => {
                setError(data.error);
                setSuccess(data.success);
            })
        })
    }
    return (
        <CardWrapper
            headerLabel='Welcom back'
            backButtonHref='/auth/login'
            backButtonLabel='Back to the login page'
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
                                            type='email'
                                            disabled={isPending}
                                        />
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
                                            type='password'
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>FullName</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                            placeholder='Your name'
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                    disabled={isPending}
                    >Submit</Button>
                </form>
            </Form>
            <ErrorMessage message={error!=""?error:null} />
            <SuccessMessage message={success!=""?success:null} />
        </CardWrapper>
    )
}
