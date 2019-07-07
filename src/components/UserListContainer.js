import React from 'react';
import UserList from "./UserList";
import {userAdd, userListError, userListFetch, userListReceived} from "../actions/action";
import {connect} from "react-redux";
import {requests} from "../agent";
const mapStateToProps = state =>({
   ...state.userList
});

const mapDispatchToProps = {
    userListFetch,
    userAdd
};
class UserListContainer extends React.Component{
    componentDidMount() {

        setTimeout(this.props.userAdd,1000);
        this.props.userListFetch();

    }

    render() {

        return(<UserList users={this.props.users}/>)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserListContainer);