import React,{ReactDOM} from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./Guide.scss";
import GuideList from "../../elements/guide/guideList"
import Sidebar from "../../components/SideBar/SideBar"
import Draw from "../../elements/draw";
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;

export const Guide = () =>{
  
return (
    <>
 <Layout style={{minHeight:"100vh"}}>
      <Draw></Draw>
      <Sider>
        <Sidebar></Sidebar>
        </Sider>
      <Layout>
        <Header></Header>
        <Content><GuideList/></Content>
        <Footer>All rights reserved.@whoamiTeam</Footer>
      </Layout>
    </Layout>
    </>
);


    }
export default Guide;