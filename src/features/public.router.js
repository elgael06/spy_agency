import React, {Suspense,lazy} from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const Login = lazy(()=>import('./login/Login'));
const CreateAccount = lazy(()=>import('./login/create-account'));
const Page404       = lazy(()=>import("./results/page-404"));

const PublicRouter = () => (<Suspense fallback={<div>loading...</div>} >
    <Switch>
        <Route path='/' exact  component={()=><Redirect to='/login'  />} />
        {/* pages login */}
        <Route path='/home' exact  component={()=><Redirect to='/login'  />} />
        <Route path='/login' exact component={Login} />
        <Route path='/account' exact component={CreateAccount} />
        {/* page error */}
        <Route path='/' component={Page404} />
    </Switch>
</Suspense>
);

export  default  PublicRouter;