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
import { Dashboard } from "../pages";
import Sidebar from "./Sidebar";
import AdminDashboardProjet from "../pages/AdminDashboardProjet";
import DashPrestataire from "../pages/DashPrestataire";
import DashSponsor from "../pages/DashSponsor";
import DashNotification from "./notifications/DashNotification";
// import { useContentContext } from "../providers/ContentContext";

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);

  // let { openSuccessNotification } = useContentContext();

  useEffect(() => {
    if (window.innerWidth < 426) {
      setCollapsed(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear tokens or session storage
    localStorage.clear();
    sessionStorage.clear();

    // Optionally, clear cookies
    // document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Provide feedback to the user
    message.info('Déconnexion réussie');

    // Redirect to the login page
    window.location.replace("/login");
  };

  return (
    <Layout className="h-screen w-full flex flex-row">
      <Sider
        className={
          collapsed
            ? "max-md:hidden bg-[#EBEBEB]"
            : "visible sider bg-[#EBEBEB]"
        }
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#EBEBEB" }}
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#EBEBEB" }}>
          <div className="flex flex-row justify-between">
            <div>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                  zIndex: 999,
                }}
              />
            </div>
            <div className="flex flex-row items-center">
              <DashNotification />
              <Button
                type="primary"
                icon={<LogoutOutlined />}
                onClick={handleLogout}
                className="flex items-center px-4 py-2 m-2 text-white bg-red-500 hover:bg-red-600 rounded-full shadow-md"
              >
                Déconnexion
              </Button>
            </div>
          </div>
        </Header>

        <Content className="m-[24px] p-[24px] bg-white rounded-md h-full overflow-scroll">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/admindashboardprojet" element={<AdminDashboardProjet />} />
            <Route exact path="/dashprestataire" element={<DashPrestataire />} />
            <Route exact path="/dashsponsor" element={<DashSponsor />} />
            {/* <Route exact path="/map" element={<Map />} /> */}
          </Routes>
        </Content>
        <Footer className="text-center pt-0">
          Copyright 2023 © ALL RIGHTS RESERVED. Design by{" "}
          <a
            href="https://aventureit.com"
            target="_blank"
            rel="noreferrer"
          >
            Aventure It Solution
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
