import React, { Component } from 'react'

import './MegaSena.css'

class MegaSena extends Component {

    state = {
        numero_mega: 'Gerando números...',
        qtde_numeros: this.props.qtde_numeros || 7,
    }

    gerarNumeros = () => {
        const qtde = this.state.qtde_numeros
        const numeroMegaSena = []
        const max = 60
        const min = 1

        for (let i = 0; i < qtde; i++) {
            let valorAleatorio = parseInt(Math.random() * (max - min)) + min;
            console.log(numeroMegaSena)
            numeroMegaSena[i] = numeroMegaSena.includes(valorAleatorio) ? parseInt(Math.random() * (max - min)) + min : valorAleatorio
        }

        numeroMegaSena.sort((n1, n2) => n1 - n2)

        // setState() - esta atualizando o estado da propriedade numero_mega do componente MegaSena
        this.setState({
            numero_mega: numeroMegaSena.join(' ')
        })
    }

    setQtdeNumeros(qtde) {
        this.setState({
            qtde_numeros: qtde
        })

        this.gerarNumeros()
    }

    render() {
        return (
            <div className="MegaSena"> 
                <h2>Mega</h2>    
                <div>{this.state.numero_mega}</div>
                <label>Qtde de Números: </label>
                <input value={this.state.qtde_numeros} onChange={e => this.setQtdeNumeros(e.target.value)} type="number"/>
                <div>
                   <button onClick={this.gerarNumeros}>Gerar números da Mega</button>
                </div> 
            </div>
        )
    }
}

export default MegaSena