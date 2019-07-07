import {USER_ADD, USER_ERROR, USER_LIST_REQUEST, USER_RECEIVED} from "../actions/action";

export default(state ={
    users: null,
    isFetching: false
},action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return{
                ...state,
                isFetching: true
            };
        case USER_RECEIVED:
            return{
                ...state,
                users: action.data['hydra:member'],
                isFetching: false
            };
        case USER_ERROR:
            return{
                ...state,
                isFetching:false,
                users:null
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