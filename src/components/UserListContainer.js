import React from 'react';
import UserList from "./UserList";
import {userAdd, userList} from "../actions/action";
import {connect} from "react-redux";
const mapStateToProps = state =>({
   ...state.userList
});

const mapDispatchToProps = {
    userList,
    userAdd
};
class UserListContainer extends React.Component{
    componentDidMount() {
        setTimeout(this.props.userAdd,1000);
        this.props.userList();
    }

    render() {

        return(<UserList users={this.props.users}/>)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserListContainer);