import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'

import Routes from '../main/Routes'
import Menu from '../template/Menu'

export default props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)