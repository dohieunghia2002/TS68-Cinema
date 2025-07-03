import z, { date } from 'zod'

export const RegisterBody = z.object({
    fullname: z.string().trim().min(2).max(256),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100),
}).strict().superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: 'custom',
            message: "Passwords don't match",
            path: ['confirmPassword']
        })
    }
})

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>

export const RegisterRes = z.object({
    data: z.object({
        // accesstoken: z.string(),
        userData: z.object({
            id: z.string(),
            fullname: z.string(),
            email: z.string(),
            isAdmin: z.boolean()
        })
    }),
    message: z.string()
})

export type RegisterResType = z.TypeOf<typeof RegisterRes>

export const LoginBody = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(100)
}).strict()

export type LoginBodyType = z.TypeOf<typeof LoginBody>

export const LoginRes = z.object({
    data: z.object({
        accesstoken: z.string(),
        userData: z.object({
            id: z.string(),
            fullname: z.string(),
            email: z.string(),
            avatar: z.string(),
            isAdmin: z.boolean()
        })
    })
})

export type LoginResType = z.TypeOf<typeof LoginRes>
