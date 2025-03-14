import type {ZodError, ZodIssueCode} from 'zod'

export type ZodFormattedError = {
  message: string
  path: string
  validation_code: ZodIssueCode
}

export const formatZodError = (error: ZodError): ZodFormattedError[] => {
  return error.errors.map((err) => {
    const code = err.code === 'custom' ? err.params?.code : err.code
    return {
      path: err.path.join('.'),
      message: err.message,
      validation_code: code,
    }
  })
}
