import ReactDOM from 'react-dom'
import React from 'react'

import './index.css'
import Primeiro from './components/basicos/Primeiro'

const el = document.getElementById('root')
const tag = <strong>Olá React!!!</strong>

// ReactDom -> necessário para inserir os components para a apalicação
ReactDOM.render(
    // JSX
    <div> 
        <Primeiro></Primeiro> 
    </div> 
, el)