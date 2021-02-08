import React from 'react'
import './App.css'

import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

export default _ =>
        <div className="App"> 
            <h1>Fundamentos React</h1>
            <div className="Cards"> 

                <Card titulo="#07 - Repetição - Desafio" color="#ff432e">
                    <TabelaProdutos></TabelaProdutos> 
                </Card>

                <Card titulo="#06 - Repetição" color="#00c8f8">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filho" color="#00c8f8">
                    <Familia  sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" /> 
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#fa6900">
                    <NumeroAleatorio max={500} min={300} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#e94c6f">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Componente com parâmetros" color="#e8b71a">
                    <ComParametro titulo="Situação do Aluno" aluno="Felipe" nota={8.5} /> 
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#588c73">
                    <Primeiro></Primeiro>
                </Card> 

            </div> 
        </div>
