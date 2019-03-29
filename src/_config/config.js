import { environments } from '@constants/Environments'

import { config as developmentConfig } from '@env/development'
import { config as productionConfig } from '@env/production'

let config = developmentConfig

if (process.env.REACT_APP_ENVIRONMENT === environments.production) {
    config = productionConfig
}

export { config }
