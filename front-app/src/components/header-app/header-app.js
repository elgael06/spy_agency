import React from "react";
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
const { Header } = Layout;


const HeaderApp = ({
    collapsed=false,
    toggle=()=>{},
}) => {

    return(<Header className="site-layout-background" style={{ padding: '3px 12px' }}>
            {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: toggle,
                })
            }
    </Header>);
}

export  default  HeaderApp;