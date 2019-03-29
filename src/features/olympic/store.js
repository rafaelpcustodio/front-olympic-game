import { List, Record } from 'immutable'

const store = Record({
    _listFilter: List(),
    list: List(),
    obj: null
})()

export { store }
