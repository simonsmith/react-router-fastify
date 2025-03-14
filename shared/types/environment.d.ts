import type {LoggerOptions} from 'pino'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT: string
      HOST: string
      LOG_LEVEL: LoggerOptions['level']
    }
  }
}
