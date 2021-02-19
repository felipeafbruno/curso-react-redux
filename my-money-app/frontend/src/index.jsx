import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'

import multi from 'redux-multi'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

import Routes from './main/Routes'
import reducers from './main/Reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById("app")
)