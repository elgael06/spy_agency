import React from "react";
import {useSelector} from "react-redux";
import {selectSesion} from "../login/loginSlice";
import axios from "axios";
import {Button} from "antd";

const Home = () => {
    const  sesion = useSelector(selectSesion);

    console.log('sesion->',sesion)
    return (<>
        <h3>Home page</h3>
    </>)
}

export default  Home;