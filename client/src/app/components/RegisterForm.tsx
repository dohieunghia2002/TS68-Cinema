"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { RegisterBody, RegisterBodyType } from "../SchemaValidation/AuthValidation"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import envConfig from "@/config"


export function RegisterForm() {
    // 1. Define your form.
    const form = useForm<RegisterBodyType>({
        resolver: zodResolver(RegisterBody),
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: RegisterBodyType) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/signup`, {
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then((res) => res.json())
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Register</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[50%]">
                <DialogHeader>
                    <DialogTitle className="text-red-600">Register</DialogTitle>
                    <DialogDescription>
                        Sign up to join the TS68 cinema comminity
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit, (errors) => {
                            console.log("Validation faild", errors);

                        })} className="space-y-8 text-3xl p-6">
                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[1.3rem] text-red-600">Fullname</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Peter Wilson" {...field} />
                                        </FormControl>
                                        <FormDescription className="italic">
                                            Your full legal name
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[1.3rem] text-red-600">Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="wilson123@gmail.com" type="email" {...field} />
                                        </FormControl>
                                        <FormDescription className="italic">Must be a valid email address</FormDescription>
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
                                        <FormDescription className="italic">At least 6 characters</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[1.3rem] text-red-600">Confirm password</FormLabel>
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <Button type="button" className="text-black" onClick={() => form.reset()}>Cancel</Button>
                                <Button type="submit" className="bg-red-600 text-amber-50">Submit</Button>
                            </DialogFooter>
                        </form>

                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
