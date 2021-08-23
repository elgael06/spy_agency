import React from "react";
import { Menu, Skeleton, Divider } from 'antd';
import {
  FolderFilled,
  ArrowRightOutlined,
  SettingOutlined,
  UserOutlined 
} from '@ant-design/icons';
import '../layout-private.css';
import SubMenu from "antd/lib/menu/SubMenu";
import { useSelector } from 'react-redux';
import { selectLoaddin } from '../layout-privateSlice';

const MenuPrivate = ({data}) => {
  const loaddin = useSelector(selectLoaddin);

    const checked_icon = {
      'HIT': <FolderFilled />,
      'HITMEN':<UserOutlined />,
      'SETTING':<SettingOutlined />
    }  

    return (<Menu 
      theme="dark" 
      mode="inline" 
    >
      <Divider style={{color: '#FFF'}} >MENU</Divider>
      <Skeleton loading={loaddin} active  >
      </Skeleton> 
      {!loaddin && (data.length>0 ? data.map((item)=>{
        return (<SubMenu key={`sub_${item.id}`} title={item.name}  icon={ checked_icon[item.name] || <FolderFilled />} >
        {
          item
          .links
          .filter((link)=>link.status)
          .map(
            link=> <Menu.Item 
              key={`route_${link.id}`}
              title={`${item.name} > ${link.name}`}
              icon={ <ArrowRightOutlined /> 
              }>
                {link.name}
              </Menu.Item> )
        } 
        </SubMenu>)}) : <Menu.Item disabled >Not Access</Menu.Item>)
      }
    </Menu>);
}

export default  MenuPrivate;