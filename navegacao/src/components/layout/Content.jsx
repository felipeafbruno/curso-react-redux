import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Content.css'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NoteFound from '../../views/examples/NotFound'

const Content = props => (
    <div className='Content'>
        <Switch> {/* Switch permite fazer a escolha da rota */}
            <Route path="/about"> {/* Route defini o caminho (nome da rota) e envolve o componente que serpa renderizado */}
                <About />
            </Route>

            <Route path="/param/:id"> 
                <Param /> 
            </Route>
            
            <Route exact path="/"> {/* a properodade exact defini que a página será acessada somente no path="/" */}
                <Home />
            </Route>

            <Route path="*"> {/* path="*" - defini que qualquer url que não seja tratada no sistema vai cair nesse ponto */}
                <NoteFound />
            </Route>
        </Switch>
    </div>
)

export default Content