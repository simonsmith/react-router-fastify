import pino from 'pino-http'
import type {Options} from 'pino-http'

const logLevel = process.env.LOG_LEVEL

const loggerOptions: Record<'development' | 'production', Options> = {
  development: {
    level: logLevel,
    autoLogging: false,
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  },
  production: {
    level: logLevel,
  },
}

const opts = loggerOptions[process.env.NODE_ENV]
const log = pino(opts).logger

export {log}
