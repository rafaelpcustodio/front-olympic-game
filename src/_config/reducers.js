import { combineReducers } from 'redux-immutable'

import { connectRouter } from 'connected-react-router'

import { reducers as olympicReducer } from '@features/olympic/reducers'

import { history } from './history'

const reducers = combineReducers({
    olympicReducer,
    router: connectRouter(history),
})

export { reducers }