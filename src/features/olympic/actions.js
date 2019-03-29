import { actions } from './constants'

import { createAction } from '@utils/actions'


const getListAction = createAction(actions.TRAIN_GET_LIST)
const saveDataAction = createAction(actions.TRAIN_SAVE_DATA)
const requestSaveDataAction = createAction(actions.TRAIN_REQUEST_SAVE_DATA)
const requestGetListAction = createAction(actions.TRAIN_REQUEST_GET_LIST)

export { getListAction, saveDataAction, requestSaveDataAction, requestGetListAction }