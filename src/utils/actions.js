import { createAction as reduxCreateAction } from 'redux-actions'

import { config } from '@config'

const createAction = name => {
    console.log(name)
    console.log(`${config.app.namespace.toUpperCase()}_${name.toUpperCase()}`)
    reduxCreateAction(`${config.app.namespace.toUpperCase()}_${name.toUpperCase()}`)
}
const getAction = name => `${config.app.namespace.toUpperCase()}_${name.toUpperCase()}`

export { createAction, getAction }
