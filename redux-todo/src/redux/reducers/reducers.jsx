const Initial_State ={
    User_data:[]
}
export const todoreducer=(state=Initial_State,action)=>{  
    switch(action.type){
        case "ADD_DATA" :
            return{
                ...state,
                User_data:[...state.User_data,action.payload]
            }
    }
}