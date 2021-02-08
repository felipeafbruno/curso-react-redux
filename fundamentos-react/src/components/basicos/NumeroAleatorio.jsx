import React from 'react'

export default props => {
    const max = props.max
    const min = props.min
    return ( 
        <div>
            <h1>Número Aleatório</h1>
            <p>Numero aleatorio entre {max} e {min}: { Math.floor(Math.random() * (max - min + 1) + min) }</p>
        </div>
    )
}