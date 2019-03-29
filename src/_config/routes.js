import React from 'react'
import { store } from './store'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'connected-react-router/immutable'
import { Route, Switch } from 'react-router'
import { combineLinkedRoutes, combineRoutes } from '@utils/routes'

import { routes as olympicRoutes } from '@features/olympic/routes'

const systemRoutes = combineRoutes(
    olympicRoutes
)

const routes = combineLinkedRoutes(systemRoutes)

const Routes = () => (
    <Provider store={ store }>
        <ConnectedRouter>
            <Switch>
                { systemRoutes.map(route => <Route { ...route } exact key={ route.name }/>) }
            </Switch>
        </ConnectedRouter>
    </Provider>
)

export { routes, olympicRoutes }
export default Routes
