import { z } from "zod";

const configScheme = z.object({
    NEXT_PUBLIC_API_ENDPOINT: z.string()
});

const configProject = configScheme.safeParse({
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT
});

if (!configProject.success) {
    console.error(configProject.error.issues);
    throw new Error('Values in .env file unlegal')
}

const envConfig = configProject.data;
export default envConfig;