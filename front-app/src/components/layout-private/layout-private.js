import React, {useState} from "react";
import { Layout } from 'antd';
import './layout-private.css';
import MenuPrivate from "./Components/menu-private";
import HeaderApp from "../header-app/header-app";

const { Sider, Content, Footer } = Layout;


const LayoutPrivate = ({
    children=null
}) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    }

    return (
      <>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" >
                <h2 style={{color:'#FFF',margin:15}}>
                    {!collapsed ? 'Company Spy' : 'CS'}
                </h2>
            </div>
          <MenuPrivate />
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