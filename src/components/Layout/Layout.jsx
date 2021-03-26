import React from 'react';
import Sidebar from "../../components/SideBar/SideBar";
import { Layout } from 'antd';
import Draw from "../../elements/draw";
import './layout.css';

import Topbar from "../Header/Topbar";
const { Footer, Sider, Content } = Layout;


export const Lout = (props) =>{
  
    return <div> 
    <Layout style={{minHeight:"10vh",margin:0}}>
      <Draw></Draw>
      <Sider>
        <Sidebar></Sidebar>
        </Sider>
      <Layout>
        <Topbar></Topbar>
        <Content >
          {props.children}
        </Content>
        <Footer style={{margin:0, padding:0}}>All rights reserved.@whoamiTeam</Footer>
      </Layout>
    </Layout>
  </div>;
}

export default Lout;