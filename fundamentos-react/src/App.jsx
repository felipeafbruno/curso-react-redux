import React from 'react'

import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro  from './components/basicos/Primeiro'

export default _ => {
        <div> 
            <h1>Fundamentos React</h1>
            <Fragmento />
            <ComParametro titulo="Situação do Aluno" aluno="Felipe" nota={8.5} /> 
            <Primeiro></Primeiro> 
        </div> 
}