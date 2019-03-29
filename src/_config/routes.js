import React from 'react'
import { store } from './store'

import { ConnectedRouter } from 'connected-react-router/immutable'
import { Route, Switch } from 'react-router'
import { combineLinkedRoutes, combineRoutes } from '@utils/routes'

const systemRoutes = combineRoutes(

)

const Routes = () => (
    <Provider store={store}>
        <ConnectedRouter>
            <Switch>
                { systemRoutes.map(route => <Route {...route} exact key={ route.name }/>)}
            </Switch>
        </ConnectedRouter>
    </Provider>
)