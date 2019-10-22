import React from 'react';
import {Route, Switch} from "react-router";
import LoginForm from "./login/index";

class App extends React.Component{
   
    render() {
        return (
            <div>
                <div>
                    <h1>Navbar</h1>
                </div>
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                </Switch>
            </div>

        )
    }
}
export default App;