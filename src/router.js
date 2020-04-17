import React from 'react';
import {Route, Switch, BrowserRouter, Link, useParams} from "react-router-dom";

function App() {
    return (
        <div>123
            <Link to={"/test/match"}>123</Link></div>
    );
}

function App2() {

    let {match} = useParams();
    return (
        <div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
            <div>test{match}</div>
        </div>
    );
}

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <App/>
                </Route>
                <Route path="/test/:match">
                    <App2/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
