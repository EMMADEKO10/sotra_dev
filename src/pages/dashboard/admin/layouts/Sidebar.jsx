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
    } else if (path === "/map") {
      return "2";
    } else {
      return "1";
    }
  };
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center py-4 bg-[#EBEBEB]">
        <img src={LogoL} alt="logo" className="w-16" />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[selectedKey()]}
        className="text-base font-normal text-black bg-[#EBEBEB]"
        items={[
          {
            key: "1",
            icon: <AppstoreOutlined />,
            label: <Link to="/dashboard">Dashboard</Link>,
          },
          {
            key: "2",
            icon: <FolderOpenOutlined />,
            label: <Link to="/admindashboardprojet">Projets</Link>,
          },
          {
            key: "3",
            icon: <TeamOutlined />,
            label: <Link to="/dashprestataire">Prestataires</Link>,
          },
          {
            key: "4",
            icon: <UserSwitchOutlined />,
            label: <Link to="/dashsponsor">Sponsors</Link>,
          },
          // {
          //   key: "2",
          //   icon: <UserOutlined />,
          //   label: <Link to="/map">Map</Link>,
          // },
        ]}
      />
    </>
  );
};

export default Sidebar;
