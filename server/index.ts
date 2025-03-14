import {validateEnv} from './util/validate-env'

try {
  validateEnv()
} catch (error) {
  console.error(error)
  process.exit(1)
}

import('./start')
