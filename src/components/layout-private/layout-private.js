import React, {useEffect, useState} from "react";
import { Layout } from 'antd';
import './layout-private.css';
import MenuPrivate from "./Components/menu-private";
import HeaderApp from "../header-app/header-app";
import { selectSesion } from "../../features/login/loginSlice";
import { getAllRoutesAccessAPI, handleCollapsed, selectCollapsed, selectMenus } from "./layout-privateSlice";
import { useSelector, useDispatch } from 'react-redux';

const { Sider, Content, Footer } = Layout;


const LayoutPrivate = ({
    children=null
}) => {
    const  sesion = useSelector(selectSesion);
    const  menu = useSelector(selectMenus);
    const collapsed =useSelector(selectCollapsed);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('sesion->',sesion);
		console.log('menu->',menu);
		console.log('collapsed->',collapsed);
		dispatch(getAllRoutesAccessAPI(sesion.id_account));
		
	},[sesion]);

    const toggle = () => {
        dispatch(handleCollapsed(!collapsed));
    }

    return (
      <>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" >
                <h2 style={{color:'#FFF',margin:15}}>
                    {!collapsed ? 'Company Spy' : 'CS'}
                </h2>
            </div>
          <MenuPrivate data={menu} />
        </Sider>
        <Layout className="site-layout">
            <HeaderApp
                collapsed={collapsed}
                toggle={toggle}
            />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
            }}
          >
              {children}
          </Content>
            <Footer style={{ textAlign: 'center' }}> Company SPY ©2021 </Footer>
        </Layout>
      </>
    );
}

export default  LayoutPrivate;