import React from 'react'

// Componente com parametros
export default function ComParametro(props) {
    // parametros ou propriedades são somente de leitura
    const status = props.nota > 7 ? 'Aprovado' : 'Recuperação'
    return ( 
        <div>
            <h2>{ props.titulo }</h2>
            <strong>{ props.aluno } </strong>
            tem nota
            <strong> { props.nota } </strong>
            e está 
            <strong> { status } </strong>
        </div>
    )
}