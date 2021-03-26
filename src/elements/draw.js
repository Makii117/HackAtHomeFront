import React from 'react';

import logo from '../assets/icons/hackathon.png';

import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {BlockOutlined,} from '@ant-design/icons';



const { SubMenu } = Menu;

const Draw = () => {
  
    return (
      <Menu
        style={{ width: 50, height: 1000, background:"#a6d4fa" }}
        mode="inline"
      >
        <Menu.Item></Menu.Item>
        <Menu.Item></Menu.Item>
       <Menu.Item></Menu.Item>
      </Menu>
    );
  }

export default Draw;