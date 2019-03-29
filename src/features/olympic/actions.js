import { actions } from './constants'

import { createAction } from '@utils/actions'

const getListAction = createAction(actions.OLYMPIC_GET_LIST)
const saveDataAction = createAction(actions.OLYMPIC_SAVE_DATA)
const requestSaveDataAction = createAction(actions.OLYMPIC_REQUEST_SAVE_DATA)
const requestGetListAction = createAction(actions.OLYMPIC_REQUEST_GET_LIST)

export { getListAction, saveDataAction, requestSaveDataAction, requestGetListAction }
