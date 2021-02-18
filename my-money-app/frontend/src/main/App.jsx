import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/Header'
import SideBar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Routes from './Routes'
import Messages from '../common/msg/Messages'

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
)