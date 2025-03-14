import {formatZodError} from '../../shared/util/zod'
import {z} from 'zod'

const LogLevelEnum = z.enum([
  'fatal',
  'error',
  'warn',
  'info',
  'debug',
  'trace',
  'silent',
])

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production'], {
    message: 'NODE_ENV must be either "development" or "production"',
  }),
  PORT: z.coerce
    .number()
    .int()
    .positive({message: 'PORT must be a positive integer'}),
  HOST: z.string().min(1, {message: 'String cannot be empty'}),
  LOG_LEVEL: LogLevelEnum,
})

export const validateEnv = () => {
  const result = envSchema.safeParse(process.env)
  if (result.success) {
    console.log('✅ Required environment variables are set...')
    return
  }

  const formattedErrors = formatZodError(result.error)

  throw new Error(
    `❌ Environment variables:\n${formattedErrors
      .map((err) => `- ${err.path}: ${err.message}`)
      .join('\n')}`,
  )
}
