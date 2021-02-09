import React, { useState } from 'react'

import "./Input.css"

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }
    /*
        Componente controlado
            - Input se comporta como um componente controlado
            - Interface não altera diretamente o estado de um componente
            - onChange permite que o estado de um componente seja alterado
            - Um componente esta amarrado ao seu estado para sendo assim ele só vai refletir a alteração se o estado for modificado
            - readOnly(Componente não controlado) defini que um componente é apenas de leitura, ou seja, 
              o componente não vai gerar nenhuma alteração no estado
            -  
    */ 
    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly />
            </div>
        </div>
    )
}