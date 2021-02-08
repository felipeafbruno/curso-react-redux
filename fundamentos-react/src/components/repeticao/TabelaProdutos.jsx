import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {
    const itens = produtos.map((produto, i) => {
        return <tr key={produto.id}> 
                    <td>{produto.id}</td> 
                    <td>{produto.nome}</td> 
                    <td>R${produto.preco.toFixed(2)}</td> 
                </tr>
    })

    return (
        <div className="TabelaProdutos">
            <table>
             <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>        
            </thead>
            <tbody>
                {itens}
            </tbody>    
            </table>
        </div>
    )
}