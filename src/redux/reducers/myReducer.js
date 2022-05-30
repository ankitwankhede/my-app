const initialState={
    Names:[]
}

let myreducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD':
            let existingName=state.Names.slice();
            existingName.push(action.payload)
            return {...state,Names:existingName}
        case 'SHOW':
            console.log(`SHOW Names ---------------- \n ${JSON.stringify(state.Names,null,2)}`);
            break;
        default:
            return state;
    }
}

export default myreducer;