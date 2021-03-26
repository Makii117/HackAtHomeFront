import React from 'react';

import { Layout, Menu} from 'antd';

const { Header} = Layout;

export const Topbar = () =>{

    return(
        <div className="Topbar" style={{margin:"0rem 8rem 5rem 0rem"}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%'  }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
      </Header>
        </div>
    )
}

export default Topbar;