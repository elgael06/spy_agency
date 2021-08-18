import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from "./home";

const HomeRouter = () => (
    <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/*' component={()=><Redirect to='/home'  />} />
    </Switch>
);

export  default  HomeRouter;