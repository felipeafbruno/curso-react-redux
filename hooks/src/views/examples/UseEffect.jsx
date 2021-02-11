import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n===0) return 1
    return calcFactorial(n-1) * n
}

function isEvenOdd(num){
    const number = parseInt(num)
    return number % 2 === 0 ? 1 : 0 
}

const UseEffect = (props) => {
    //#01
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)

    // Sempre que for gerar um Side Effect utilizar o Hook useEffect
    // parametros useEffect 
    // Função callback onde será executada a lógica que afeta o estado do componente
    // Dependencia(as) que vão aplicada(as) para afetar o estado do componente
    useEffect(function () {
        setFactorial(calcFactorial(number))
    }, [number]) 

    // #02
    const [status, setStatus] = useState('Ímpar')

    useEffect(function () {
        setStatus(isEvenOdd(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/> 
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial === -1 ? "Não existe" : factorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status === 1 ? "Par" : "Ímpar"}</span>
                </div>
                <input className="input" type="number" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseEffect
