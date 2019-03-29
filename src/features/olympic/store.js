import { List, Record } from 'immutable'

const store = Record({
    list: List(),
    obj: null,
    loading: false
})()

export { store }
