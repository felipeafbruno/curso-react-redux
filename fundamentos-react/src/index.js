import ReactDOM from 'react-dom'
import React from 'react'

import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

const el = document.getElementById('root')
const tag = <strong>Olá React!!!</strong>

// ReactDom -> necessário para inserir os components para a apalicação
ReactDOM.render(
    // JSX
    <div> 
        <Primeiro></Primeiro> 
        <ComParametro titulo="Situação do Aluno" aluno="Felipe" nota={8.5} /> 
        <Fragmento />
    </div> 
, el)