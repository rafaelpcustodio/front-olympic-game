import { connect } from 'react-redux'

import OlympicList from '../pages/OlympicList'
import { getListSelector, getObjSelector } from '../selectors'

const mapStateToProps = state => ({
    travel: getObjSelector(state),
    travels: getListSelector(state)
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(OlympicList)
