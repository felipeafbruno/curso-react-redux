import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/Header'
import SideBar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Routes from './Routes'

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
    </div>
)