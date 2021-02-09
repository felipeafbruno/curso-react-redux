import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const max = 70
    const min = 50
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min)
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                _ => cb('Pedro', gerarIdade(), true)
            }>
                Fornecer Informações
            </button>
        </div>
    )
}