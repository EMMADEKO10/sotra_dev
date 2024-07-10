import { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DownOutlined,
  PoweroffOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Button, Dropdown, message } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Dashboard } from "../pages";
import AdminDashboardProjet from "../pages/AdminDashboardProjet";
import DashPrestataire from "../pages/DashPrestataire";
import DashSponsor from "../pages/DashSponsor";
import DashNotification from "./notifications/DashNotification";

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 426) {
      setCollapsed(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    message.info('Déconnexion réussie');
    window.location.replace("/login");
  };

  return (
    <Layout className="h-screen w-full flex">
      <Sider
        className={`transition-all duration-300 ${collapsed ? "max-md:hidden" : "visible"} bg-[#EBEBEB]`}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#EBEBEB" }}
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="p-0 bg-[#EBEBEB] flex justify-between items-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-lg w-16 h-16 z-10"
          />
          <div className="flex items-center mr-8">
            <DashNotification />
            <Button
              type="primary"
              icon={<LogoutOutlined />}
              onClick={handleLogout}
              className="flex items-center px-4 py-2 m-2 text-white bg-red-500 hover:bg-red-600 rounded-full shadow-md transition-all duration-200"
            >
            </Button>
          </div>
        </Header>

        <Content className="m-6 p-6 bg-white rounded-md shadow-md overflow-auto">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/admindashboardprojet" element={<AdminDashboardProjet />} />
            <Route exact path="/dashprestataire" element={<DashPrestataire />} />
            <Route exact path="/dashsponsor" element={<DashSponsor />} />
          </Routes>
        </Content>
        <Footer className="text-center pt-4">
          Copyright 2024 © ALL RIGHTS RESERVED. Design by{" Sotradon "}
          <a
            href="https://aventureit.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Aventure It Solution
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
