const REDUCER_NAME = 'olympicReducer'

const getListSelector = state => state.get(REDUCER_NAME).get('list').toJS()
const getObjSelector = state => state.get(REDUCER_NAME).get('obj')

export { getObjSelector, getListSelector }
