import React, { useEffect } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  ProjectOutlined,
  FolderOpenOutlined,
  TeamOutlined,
  UserSwitchOutlined,
  DashboardOutlined,
  ProfileOutlined,
  BarsOutlined,
  BookOutlined
} from "@ant-design/icons";
import { LogoL } from "../assets";
import { Link } from "react-router-dom";

const Sidebar = () => {
  let path = window.location.pathname;

  useEffect(() => {}, []);

  const selectedKey = () => {
    if (path === "/dashboard") {
      return "1";
    } else if (path === "/admindashboardprojet") {
      return "2";
    } else if (path === "/dashprestataire") {
      return "3";
    } else if (path === "/dashsponsor") {
      return "4";
    } else {
      return "1";
    }
  };

  return (
    <>
      <div className="flex items-center justify-center py-4 bg-[#EBEBEB]">
        <img src={LogoL} alt="logo" className="w-16" />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[selectedKey()]}
        className="text-base font-normal text-black bg-[#EBEBEB] border-none"
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ProjectOutlined />}>
          <Link to="/admindashboardprojet">Projets</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<TeamOutlined />}>
          <Link to="/dashprestataire">Prestataires</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserSwitchOutlined />}>
          <Link to="/dashsponsor">Sponsors</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Sidebar;
