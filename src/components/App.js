import React from 'react';
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import UserListContainer from "./UserListContainer";

class App extends React.Component{
    render() {
        return (
            <div>
                hello
                <Switch>
                    <Route path="/login" component={LoginForm}></Route>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/users" component={UserListContainer}/>
                </Switch>
            </div>

        )
    }
}
export default App;