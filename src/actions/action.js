import {requests} from "../agent";

export const USER_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USER_RECEIVED = 'USER_RECEIVED';
export const USER_ERROR = 'USER_ERROR';
export const USER_ADD = 'USER_ADD';

export const userListRequest = ()=>({
    type: USER_LIST_REQUEST,

});
export const userListError = (error)=>({
    type: USER_ERROR,
    error
});

export const userListReceived = (data)=>({
    type: USER_RECEIVED,
    data
});

export const userListFetch = ()=>{
  return(dispatch) => {
      dispatch(userListRequest());
      return requests.get('/users').then(response =>
      dispatch(userListReceived(response))
      ).catch(error => dispatch(userListError(error)));
  }
};

export const userAdd = () =>({
    type: USER_ADD,
    data: {
        id: Math.floor(Math.random() * 100+3),
        firstName: 'A new user',
        lastName: 'A new lastname'
    }
});

