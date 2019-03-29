import { actions } from './constants'

import { all, call, put, takeLatest } from 'redux-saga/effects'

import { getListAction, saveDataAction } from './actions'

import { getAction } from '@utils/actions'

import {
    getAllApiMock as getAll,
} from './api'

function* getListRequested() {
    const list = yield call(getAll)
    yield put(getListAction(list))
}

function* saveDataRequested({ payload }) {
    const newTravel = yield call(payload)
    yield put(saveDataAction(newTravel))
}

function* watchGetListRequest() {
    yield takeLatest(getAction(actions.OLYMPIC_REQUEST_GET_LIST), getListRequested)
}

function* watchSaveDataRequest() {
    yield takeLatest(getAction(actions.OLYMPIC_REQUEST_SAVE_DATA), saveDataRequested)
}

function* sagas() {
    yield all([
        watchGetListRequest(),
        watchSaveDataRequest()
    ])
}

export { sagas }
