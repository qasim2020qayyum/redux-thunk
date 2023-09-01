// user Reducers 

const userRed = (state = {users: []}, action) =>{
    switch (action.type) {
        case "GET_USER_REQUEST":
            return{loading: true, users: []}            
        case "GET_USER_SUCCESS":
            return{loading: false, users: action.payload}            
        case "GET_USER_FAIL":
            return{error: true, users: action.payload}            
        default:
            return state;
    }    
}
export default userRed;


























// // users reducers detail 

// const userRed = (state = {users: []}, action) =>{

//     switch (action.type) {
//         case "GET_USER_REQUEST":            
//             return{loading: true, users:[]}

//         case "GET_USER_SUCCESS":
//             return{loading: false, users: action.payload}

//         case "GET_USER_ERROR":
//             return{loading: false, error: action.payload}            
    
//         default:
//             return state            
//     }
// }

// export default userRed