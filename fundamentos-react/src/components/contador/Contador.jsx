import React, { Component } from 'react'

import './Contador.css'

import Display from  './Display'
import Botoes from  './Botoes'
import PassoForm from './PassoForm' 

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    // constructor(props) {
    //     super(props)

    //      // 'bind(this)' defini que o 'this' dentro da function inc() representa o objeto do 'contexto' do tipo Contador(instância atual)
    //     this.inc = this.inc.bind(this)
    // }

    // Outra solução é função arrow para garantir que 'this' representa o objeto do contexto
    /* 
        'this' em uma arrow funtion sempre representa o objeto do contexto pelo fato de que o uma arrow 
        function respeita seu contexto léxico, contexto onde ela foi definida 
    */
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    // passo={this.state.passo} - Comunicação Direta
    /* 
        setPasso={this.setPasso} - 
        Comunicação Indireta passando uma function para ser executada no componente filho que vai retornar ao componente pai o novo estado
        da propriedade
    */ 
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec} />
            </div>
        )
    }
}