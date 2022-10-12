const inititalState = {
    Names: []
}

let myreducer = (state = inititalState, action) => {
    switch (action.type) {
        case 'ADD':
            let newNames = [...state.Names, action.payload]
            return {
                ...state, Names: newNames
            }
        case 'SHOW':
            console.log(`SHOW Names ---------------- \n ${JSON.stringify(state.Names, null, 2)}`);
            break;
        default:
            return state;
    }
}

export default myreducer;