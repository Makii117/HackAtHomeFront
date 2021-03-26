import React from 'react';
import Sidebar from "../../components/SideBar/SideBar";
import { Layout } from 'antd';
import Draw from "../../elements/draw";
import GuideList from "../../elements/guide/guideList";
import './layout.css';

import Topbar from "../Header/Topbar";
const { Footer, Sider, Content } = Layout;


export const Lout = () =>{
    return <div> 
    <Layout style={{minHeight:"100vh"}}>
      <Draw></Draw>
      <Sider>
        <Sidebar></Sidebar>
        </Sider>
      <Layout>
        <Topbar></Topbar>
        <Content>content</Content>
        <Footer>All rights reserved.@whoamiTeam</Footer>
      </Layout>
    </Layout>
  </div>;
}

export default Lout;