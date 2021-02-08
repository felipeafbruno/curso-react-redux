import React from 'react'

import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'
import Card from './components/layout/Card'

import './App.css'

export default _ =>
        <div className="App"> 
            <h1>Fundamentos React</h1>
            <div className="Cards"> 

                <Card titulo="Desafio Aleatório" color="#fa6900">
                    <NumeroAleatorio max={500} min={300} />
                </Card>

                <Card titulo="Fragmento" color="#e94c6f">
                    <Fragmento />
                </Card>

                <Card titulo="Componente com parâmetros" color="#e8b71a">
                    <ComParametro titulo="Situação do Aluno" aluno="Felipe" nota={8.5} /> 
                </Card>

                <Card titulo="Primeiro Componente" color="#588c73">
                    <Primeiro></Primeiro>
                </Card> 

            </div> 
        </div>
