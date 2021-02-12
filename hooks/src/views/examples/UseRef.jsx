import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge (s1, s2) {
    return [...s1].map((e, i) => 
        `${e}${s2[i] || ""}` 
    ).join("")
}

const UseRef = (props) => {
    // Exercício #01
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    // useRef retorna um objeto com a propriedade current
    // é utilizado para armazenar o estado de um componente sem que ocorra a renderização dele
    // é possível também armazenar a estados anterios de componente 
    // usar somente quando desejado armazenar o estado anterior de algum componente
    // RECOMENDAÇÃO -> usar props ou estados  
    const count = useRef(0) 
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function () {
        count.current++
        myInput2.current.focus()
    }, [value1])

    useEffect(function () {
        count.current++
        myInput1.current.focus()
    }, [value2])
    
    // Exercício #02
    const [name, setName] = useState("...")
    const inputRef = React.useRef(null)
    const prevNameRef = React.useRef("")

    React.useEffect(function () {
        prevNameRef.current = name
    }, [name])

    const handleChange = (e) => {
        setName(e.target.value)
    }

    
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
        
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" ref={myInput1} value={value1} onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #03"/>
            <div className="center">
                <input type="text" className="input" ref={myInput2} value={value2} onChange={e => setValue2(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #03"/>
            <div className="center">
                <h1> Meu nome é {name} e era {prevNameRef.current}</h1>
                {/* input possui a propriedade ref que mantem uma referência do objeto(elemento HTML) */}
                <input className="input" ref={inputRef} value={name} onChange={handleChange} /> 
                {/* inputRef sem utilizado para dar focus no elemento HTML input */}
                <button className='btn' onClick={() => inputRef.current.focus()}>Focus</button>
            </div>
        </div>
    )
}

export default UseRef
