import React, {Suspense,lazy} from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";


const Home = lazy(()=>import("./home"));
const Page404 = lazy(()=>import("./page-404"));

const HomeRouter = () => (
    <Suspense fallback={<div>loading...</div>} >
        <Switch>
            <Route path='/login' component={()=><Redirect to='/home'  />} />
            <Route path='/' exact component={()=><Redirect to='/home'  />} />
            <Route path='/home' exact component={Home} />
            <Route path='/' component={Page404} />
        </Switch>
    </Suspense>
);

export  default  HomeRouter;