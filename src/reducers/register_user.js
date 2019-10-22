import {USER_LIST_REQUEST} from "../actions/defaults";

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
   
        default:
            return state;

    }
}