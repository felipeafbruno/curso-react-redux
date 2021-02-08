/*
    Criar um componente que verifica uma condicionale 
    Dependendo se for true ou false 
    retorna o elemento a ser renderizado ou false 
*/ 
export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if(props.test) {
        return ifChildren
    } else if(elseChild) {
        return elseChild
    } else { 
        return false
    }
} 

export const Else = props => props.children