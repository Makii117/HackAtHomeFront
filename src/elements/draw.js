import React from 'react';

import logo from '../assets/icons/hackathon.png';

import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Draw = () => {
  
    return (
      <Menu
        style={{ width: 50, height: 1000 }}
        mode="inline"
      >
        <Menu.Item><img src={logo} alt="iSolutions"></img></Menu.Item>
        <Menu.Item></Menu.Item>
       <Menu.Item></Menu.Item>
      </Menu>
    );
  }

export default Draw;