import React, { lazy } from 'react'

const OlympicList = lazy(() => import('./containers/OlympicList'))

const routes = [
    { component: <OlympicList/>, name: 'olympicList', path: '/' }
]

export { routes }
