const initialState={
    Names:[]
}

export default myreducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD':
            console.log(`ADD reducer`)
            break;
        default:
            return state;
    }
}
