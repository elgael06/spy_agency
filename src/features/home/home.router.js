import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from "./home";
import Page404 from './page-404';

const HomeRouter = () => (
    <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/login' component={()=><Redirect to='/home'  />} />
        <Route path='/' exact component={()=><Redirect to='/home'  />} />
        <Route path='/*' component={Page404} />
    </Switch>
);

export  default  HomeRouter;