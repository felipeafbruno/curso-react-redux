import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import App from './App'
import Dashboard from '../dashboardV2/Dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="billingCycles" component={BillingCycle} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
)