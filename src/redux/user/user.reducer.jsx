const INITIAL_STATE = {
    currentUser: null
}

// set state to the initial value. It must be something, even null.
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return({
                ...state,
                currentUser: action.payload
            })

        default:
            return state;
    }
}
export default userReducer
//Action objects
// {
//     type:
//     payload:
// }