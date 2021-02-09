import React, { Component } from 'react'

import './Contador.css'

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

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <label htmlFor="">Passo: </label>
                <input id="passoInt" type="number" 
                    value={this.state.passo} onChange={this.setPasso}/>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}