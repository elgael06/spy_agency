import React from "react";
import {useSelector} from "react-redux";
import {selectSesion} from "../login/loginSlice";
import axios from "axios";
import {Button} from "antd";

const Home = () => {
    const  sesion = useSelector(selectSesion);

    const consultar = async () =>{
        const resp = await axios.get('/api/user/'+sesion.id_account);
        console.log('resp->',resp);
    }
    console.log('sesion->',sesion)
    return (<>
        <h3>Home page</h3>
        <Button onClick={consultar} >Consultar</Button>
    </>)
}

export default  Home;