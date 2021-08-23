import React from "react";
import { Menu } from 'antd';
import {
  FolderFilled,
  ArrowRightOutlined,
  SettingOutlined,
  UserOutlined 
} from '@ant-design/icons';
import '../layout-private.css';
import SubMenu from "antd/lib/menu/SubMenu";

const MenuPrivate = ({data}) => {

    const checked_icon = {
      'HIT': <FolderFilled />,
      'HITMEN':<UserOutlined />,
      'SETTING':<SettingOutlined />
    }  

    return (<Menu 
      theme="dark" 
      mode="inline" 
    >
      {data.map((item)=>{
        return (<SubMenu key={item.id} title={item.name}  icon={ checked_icon[item.name] || <FolderFilled />} >
        {
          item
          .links
          .filter((link)=>link.status)
          .map(
            link=> <Menu.Item 
              key={link.id}
              title={`${item.name} > ${link.name}`}
              icon={ <ArrowRightOutlined /> 
              }>
                {link.name}
              </Menu.Item> )
        } 
        </SubMenu>)})
      }         
    </Menu>);
}

export default  MenuPrivate;