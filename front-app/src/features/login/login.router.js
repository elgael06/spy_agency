import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "./Login";

const LoginRouter = () => (
    <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/*'  component={()=><Redirect to='/login'  />} />
    </Switch>
);

export  default  LoginRouter;