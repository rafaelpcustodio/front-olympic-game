import { connect } from 'react-redux'

import OlympicList from '../pages/OlympicList'
import { getListSelector, getObjSelector } from '../selectors'

import {
    requestGetListAction,
    requestSaveDataAction
} from '../actions'

const mapStateToProps = state => ({
    obj: getObjSelector(state),
    list: getListSelector(state)
})

const mapDispatchToProps = {
    requestGetListAction,
    requestSaveDataAction
}

export default connect(mapStateToProps, mapDispatchToProps)(OlympicList)
