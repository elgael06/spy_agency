import React, {Suspense,lazy} from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";


const Home          = lazy(()=>import("./home/home"));
const HistAddPage   = lazy(()=>import("./hit-page/hist-add"));
const HistPage      = lazy(()=>import("./hit-page/hist-list"));
const Page404       = lazy(()=>import("./results/page-404"));

const PrvateRouter = () => (
    <Suspense fallback={<div>loading...</div>} >
        <Switch>
            {/* pages default */}
            <Route path='/login' component={()=><Redirect to='/home'  />} />
            <Route path='/' exact component={()=><Redirect to='/home'  />} />
            <Route path='/home' exact component={Home} />
            {/* pages hits */}
            <Route path='/hits/new' exact component={HistAddPage} />
            <Route path='/hits' exact component={HistPage} />
            {/* pages hitmen */}

            {/* pages settings */}

            {/* page error */}
            <Route path='/' component={Page404} />
        </Switch>
    </Suspense>
);

export  default  PrvateRouter;