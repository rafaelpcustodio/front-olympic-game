import { all } from 'redux-saga/effects'

import { sagas as olympicSagas } from '@features/olympic/sagas'

function* sagas() {
    yield all([
        olympicSagas()
    ])
}

export { sagas }
