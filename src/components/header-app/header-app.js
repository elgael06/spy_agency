import React from "react";
import { Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { handleCollapsed, selectCollapsed } from '../layout-private/layout-privateSlice';
import { Button } from "antd/lib/radio";
import { selectSesion, singOutUser } from "../../features/login/loginSlice";
const { Header } = Layout;


const HeaderApp = () => {
  const  sesion = useSelector(selectSesion);
  const collapsed =useSelector(selectCollapsed);
const dispatch = useDispatch();

    return(<Header className="site-layout-background" style={{ padding: '3px 12px' }}>
            <div>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: ()=> dispatch(handleCollapsed(!collapsed)),
                })
              }
              <Button 
                onClick= {()=> dispatch(singOutUser(sesion?.user.id))}
                style={{
                  float: 'right', 
                  background:'red',
                  color:'#FFF',
                  margin:'15px 0'
                  }} >Loguot</Button>
            </div>
    </Header>);
}

export  default  HeaderApp;