import {requests} from "../agent";

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

 
