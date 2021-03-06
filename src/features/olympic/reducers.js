import { handleActions } from 'redux-actions'

import { saveDataAction, getListAction } from './actions'

import { store } from './store'

const reducers = handleActions({
    [getListAction]: (state, { payload }) => state.merge({ list: payload }),
    [saveDataAction]: state => state.set({ obj: null })
}, store)

export { reducers }
