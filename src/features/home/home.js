import React from "react";
import { Divider } from "antd";
import {
    FolderFilled,
    ArrowRightOutlined,
    SettingOutlined,
    UserOutlined 
  } from '@ant-design/icons';
import {useSelector} from "react-redux";
import {selectSesion} from "../login/loginSlice";
import { Link } from "react-router-dom";

const Home = () => {
    const  {user,role=''} = useSelector(selectSesion);

    return (<>
    <Divider orientation='center'>
        <h1>Hello {user?.nikename}</h1>. 
    </Divider>

        <section>
            <h2>Details:</h2>
            <Divider/>
            <label>Name:</label>
            <b> {user?.name}</b>
            <Divider/>
            <label>Last Name:</label>
            <b> {user?.last_name}</b>
            <Divider/>
            <label>Role:</label>
            <b> {role}</b>
            <Divider/>
            <label>Email:</label>
            <b> {user?.email}</b>
            <Divider/>
        </section>

        <h2>Tasks:</h2>

        <Divider orientation='left' >
            <Link to='/hits?status=pending'>  
                Pending hits <ArrowRightOutlined />
            </Link>
        </Divider>
        <br/>
        <Divider orientation='left' >            
            <Link to='/hits?status=end'>  
                End hits <ArrowRightOutlined />
            </Link>
        </Divider>
        <br/>
        <Divider orientation='left' >            
            <Link to='/hits?status=abort'>  
                Aborts hits <ArrowRightOutlined />
            </Link>
        </Divider>
        <br/>

    </>)
}

export default  Home;