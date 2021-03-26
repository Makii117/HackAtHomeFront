import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export const Topbar = () =>{

    return(
        <div className="Topbar" style={{margin:"0rem 8rem 5rem 0rem"}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['0']} style={{background:"#a6d4fa",}}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
      </Header>
        </div>
    )
}

export default Topbar;