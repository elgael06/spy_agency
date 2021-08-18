import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginRouter from "../../features/login/login.router";
import HomeRouter from "../../features/home/home.router";
import {useSelector} from "react-redux";
import {selectSesion} from "../../features/login/loginSlice";
import LayoutPrivate from "../../components/layout-private/layout-private";


const PrivateRoute = () => (
    <Router>
            <Switch>
                <LayoutPrivate>
                    <Route path='/' component={HomeRouter} />
                </LayoutPrivate>
            </Switch>
    </Router>
);

const PubicRoute = () => (
    <Router>
            <Switch>
                <Route path='/' component={LoginRouter} />
            </Switch>
    </Router>
);


const IndexRouter = () => {
    const  sesion = useSelector(selectSesion);

    return  sesion!==null ? <PrivateRoute /> : <PubicRoute />;
}

export  default  IndexRouter;