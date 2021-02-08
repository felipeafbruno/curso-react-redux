import React from 'react'

// Utilizando Fragment do React
export default function Fragmento(props) {
    return (
        // Fragment pode ser usado quando o próposito é ter elementos junto de elementos adjacentes
        // que não estão envolvidos em enclosed tag como <div> por exemplo
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>cuidade com este erro!</p>
        </React.Fragment>
        // Outra opção é utilizar <> </> para envolve-los que seram exibidos assim como o exemplo acima  
    )
}