import { z } from "zod"

/**
 * Environment variable schema for runtime validation
 * This ensures all required environment variables are present and valid
 */
const envSchema = z.object({
  // App Configuration
  NEXT_PUBLIC_APP_NAME: z.string().default("App"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_APP_DESCRIPTION: z.string().default(""),

  // Node Environment
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  // Analytics (Optional)
  NEXT_PUBLIC_GOOGLE_ANALYTICS: z.string().optional(),
  NEXT_PUBLIC_VERCEL_ANALYTICS_ID: z.string().optional(),

  // Database (Optional)
  DATABASE_URL: z.string().optional(),
  DATABASE_AUTH_TOKEN: z.string().optional(),

  // Authentication (Optional)
  NEXTAUTH_URL: z.string().url().optional(),
  NEXTAUTH_SECRET: z.string().optional(),

  // API Keys (Optional)
  OPENAI_API_KEY: z.string().optional(),
  HUGGINGFACE_API_KEY: z.string().optional(),

  // Feature Flags
  NEXT_PUBLIC_ENABLE_ANALYTICS: z
    .string()
    .transform((val: string) => val === "true")
    .default("false"),
  NEXT_PUBLIC_ENABLE_ADS: z
    .string()
    .transform((val: string) => val === "true")
    .default("false"),
})

/**
 * Validate and parse environment variables
 * This will throw an error if validation fails during build
 */
export const env = envSchema.parse({
  // Public variables
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  NEXT_PUBLIC_VERCEL_ANALYTICS_ID: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
  NEXT_PUBLIC_ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS,
  NEXT_PUBLIC_ENABLE_ADS: process.env.NEXT_PUBLIC_ENABLE_ADS,

  // Server-side variables
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_AUTH_TOKEN: process.env.DATABASE_AUTH_TOKEN,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY,
})

/**
 * Type-safe environment variables
 * Use this instead of process.env for type safety
 */
export type Env = z.infer<typeof envSchema>
