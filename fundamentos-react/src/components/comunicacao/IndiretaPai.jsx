import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    // useState -> retorna um array com duas posições a primeira posição é o valor em si 
    // e a segunda posição é a função para alterar o valor 
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    // nome idade nerd
    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome) 
        setIdade(idade) 
        setNerd(nerd)
    }

    return (
        <div>
            <span> {nome} </span>
            <span><strong> {idade} </strong></span>
            <span> {nerd ? 'Verdadeiro' : 'Falso'} </span>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes} ></IndiretaFilho>
        </div>
    )
}