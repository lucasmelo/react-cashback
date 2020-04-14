import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Shopping from './pages/Shopping';
import NewPurchase from './pages/NewPurchase';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/shopping" component={Shopping}></Route>
                <Route path="/purchase" component={NewPurchase}></Route>
            </Switch>
        </BrowserRouter>
    )
}