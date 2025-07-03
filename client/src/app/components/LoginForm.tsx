"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginBody, LoginBodyType } from "../SchemaValidation/AuthValidation"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useAuthDialog } from "@/app/components/AuthDialogContext"
import envConfig from "@/config"


export function LoginForm() {
    const { openDialog, setOpenDialog } = useAuthDialog()
    // 1. Define your form.
    const form = useForm<LoginBodyType>({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            email: '',
            password: ''
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: LoginBodyType) {
        try {
            const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/signin`, {
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(async (res) => {
                const payload = await res.json()
                const data = {
                    status: res.status,
                    payload
                }
                if (!res.ok) {
                    throw data
                }
                return data
            })
        } catch (error: any) {
            form.setError("root", {
                type: "server",
                message: error?.payload?.error || "Đã xảy ra lỗi bất ngờ"
            })
        }

    }

    return (
        <Dialog open={openDialog === "login"} onOpenChange={(v) => setOpenDialog(v ? "login" : null)}>
            <DialogTrigger asChild>
                <Button variant="destructive">Login</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[50%]">
                <DialogHeader>
                    <DialogTitle className="text-red-600">Login</DialogTitle>
                    <DialogDescription>
                        TS68 cinema
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-3xl p-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[1.3rem] text-red-600">Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" {...field} />
                                        </FormControl>
                                        <FormDescription className="italic">Enter your email address</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[1.3rem] text-red-600">Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
                                        <FormDescription className="italic">Enter your password</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {form.formState.errors.root && (
                                <p className="text-red-500 text-lg text-center">
                                    {form.formState.errors.root.message}
                                </p>
                            )}
                            <DialogFooter>
                                <Button variant='outline' className="text-amber-50" onClick={() => form.reset()}>Cancel</Button>
                                <Button type="submit" className="bg-red-600 text-amber-50">Submit</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </div>

            </DialogContent>
        </Dialog>
    )
}
