export function numberReducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'numberTimes7':
            return { ...state, number: state.number * 7 }
        case 'numberDivideBy25':
            return { ...state, number: state.number / 25 }
        case 'numberRound':
            return { ...state, number: Math.round(state.number) }
        case 'addNToNumber':
            return { ...state, number: state.number + action.payload }
        default: 
            return state
    }
}