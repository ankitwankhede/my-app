import { ADD, SHOW } from "../action_constant";

const inititalState = {
    Names: []
}

const myreducer =
    (state = inititalState, action) => {
        switch (action.type) {
            case ADD:
                let newNames = [...state.Names, action.payload]
                return {
                    ...state, Names: newNames
                }
            case SHOW:
                console.log(`SHOW Names ---------------- \n ${JSON.stringify(state.Names, null, 2)}`);
                return state;
            default:
                return state;
        }
    }

export default myreducer;