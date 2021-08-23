import React from "react";
import { Menu } from 'antd';
import {
  FolderFilled,
  ArrowRightOutlined
} from '@ant-design/icons';
import '../layout-private.css';
import SubMenu from "antd/lib/menu/SubMenu";

const MenuPrivate = ({data}) => {

  

    return (<Menu 
      theme="dark" 
      mode="inline" 
    >
      {data.map((item)=>{
        return (<SubMenu key={item.id} title={item.name}  icon={<FolderFilled />} >
        {
          item
          .links
          .filter((link)=>link.status)
          .map(link=> <Menu.Item key={link.id} icon={ <ArrowRightOutlined /> }>{link.name}</Menu.Item> )
        } 
        </SubMenu>)})
      }         
    </Menu>);
}

export default  MenuPrivate;