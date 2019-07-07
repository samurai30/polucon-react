import {USER_ADD, USER_LIST} from "../actions/action";

export default(state ={
    users: null
},action) => {
    switch (action.type) {
        case USER_LIST:
            return{
                ...state,
                users: action.data
            };
        case USER_ADD:
            return{
                ...state,
                users: state.users? state.users.concat(action.data): state.users
            };
        default:
            return state;

    }
}