import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import { Layout } from 'antd';
import Draw from "../../elements/draw";
import GuideList from "../../elements/guide/guideList";
import "./portal.css";


const { Header, Footer, Sider, Content } = Layout;


export const Portal = () => {
  return <div> 
    <Layout style={{minHeight:"100vh"}}>
      <Draw></Draw>
      <Sider>
        <Sidebar></Sidebar>
        </Sider>
      <Layout>
        <Header>
          
        </Header>
        <Content>content</Content>
        <Footer>All rights reserved.@whoamiTeam</Footer>
      </Layout>
    </Layout>
  </div>;
};
