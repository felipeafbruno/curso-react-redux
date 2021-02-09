import React from 'react'

export default props => {
    return (
        <div>
           <div>{props.text}</div>
           <div>{props.number}</div>
           <div>{props.bool ? "Verdadeiro" : "Falso"}</div> 
        </div>
    )
}