import React from 'react';

class UserList extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

    }
    render() {
        const {users} = this.props;
        return(<div>
            <ul>
                {users && users.map(user => (<li key={user.id}>{user.firstName} {user.lastName}</li>))}
            </ul>
        </div>)
    }
}

export default UserList;