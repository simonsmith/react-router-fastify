import {reactRouterFastify} from '@mcansh/remix-fastify/react-router'
import {fastify} from 'fastify'
import getPort, {portNumbers} from 'get-port'
import {usersRouter} from './api/users'
import {log} from './util/log'

const {
  LOG_LEVEL: logLevel,
  HOST: host,
  PORT: port,
  NODE_ENV: nodeEnv,
} = process.env

const app = fastify({
  loggerInstance: log,
  disableRequestLogging: nodeEnv === 'development',
})

app.register(reactRouterFastify)
app.register(usersRouter, {prefix: '/api'})

const startServer = async () => {
  const desiredPort = Number(port)
  const portToUse = await getPort({
    port: portNumbers(desiredPort, desiredPort + 100),
  })

  try {
    const address = await app.listen({port: portToUse, host})
    log.info(`🚀 Server started in ${nodeEnv} mode at ${address}`)
    log.info(`🤖 Log level: "${logLevel}"`)

    if (portToUse !== desiredPort) {
      log.warn(
        `! Port ${desiredPort} is not available, using ${portToUse} instead.`,
      )
    }
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message)
    }
    process.exit(1)
  }
}

await startServer()
