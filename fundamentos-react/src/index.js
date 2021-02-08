import ReactDOM from 'react-dom'
import React from 'react'

import './index.css'
import App from './App'

const el = document.getElementById('root')
const tag = <strong>Olá React!!!</strong>

// ReactDom -> necessário para inserir os components para a apalicação
ReactDOM.render(
    // JSX
    <div> 
        <App />
    </div> 
, el)