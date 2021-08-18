import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginRouter from "../../features/login/login.router";
import HomeRouter from "../../features/home/home.router";
import {useSelector} from "react-redux";
import {selectSesion} from "../../features/login/loginSlice";


const PrivateRoute = () => (
    <Router>
            <Switch>
                <Route path='/' component={HomeRouter} />
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

const initState = ({
    isLogin:false
});

const IndexRouter = () => {
    const  sesion = useSelector(selectSesion);
    const [state, setState] = useState(initState);

    return  sesion!==null ? <PrivateRoute /> : <PubicRoute />;
}

export  default  IndexRouter;