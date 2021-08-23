import React from "react";
import {useSelector} from "react-redux";
import {selectSesion} from "../login/loginSlice";

const Home = () => {
    const  sesion = useSelector(selectSesion);

    return (<>
        <h3>Home page</h3>
    </>)
}

export default  Home;