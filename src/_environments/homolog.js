import { environments } from '@constants/environments'

import { config as envConfig } from './env'

const config = { ...envConfig() }

config.app.environment = environments.homolog
config.api.url = 'http://localhost:8080/v1/api'

Object.freeze(config)

export { config }