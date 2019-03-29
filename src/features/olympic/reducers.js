import { handleActions } from 'redux-actions'

import { saveDataAction } from './actions'

import { store } from './store'

const reducers = handleActions({
    [getListAction]: (state, { payload }) => state.merge({ _listFilter: payload, list: payload }),
    [saveDataAction]: state => state.set({ obj: null })
}, store)

export { reducers }