import React from 'react'

export default props => {
    return (
        <div>
             <div>
                    <label htmlFor="">Passo: </label>
                    <input 
                        id="passoInt" 
                        type="number" 
                        value={props.passo} 
                        onChange={e => props.setPasso(+e.target.value)}
                    />
                </div>
        </div>
    )
}