import React from 'react';
import ReactDom from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";
import {Route} from "react-router";
import App from "./components/App";
import {createBrowserHistory} from "history";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const history = createBrowserHistory();


ReactDom.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
                <Route path="/" component={App}></Route>
        </ConnectedRouter>
    </Provider>
),document.getElementById('root'));

