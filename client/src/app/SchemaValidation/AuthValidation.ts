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
        // token: z.string(),
        account: z.object({
            id: z.number(),
            fullname: z.string(),
            email: z.string()
        })
    })
})