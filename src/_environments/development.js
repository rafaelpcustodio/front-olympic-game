import { environments } from '@constants/environments'

import { config as envConfig } from './env'

const config = { ...envConfig() }

config.app.environment = environments.development

Object.freeze(config)

export { config }