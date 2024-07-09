import React, { useEffect } from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  IdcardOutlined,
  TeamOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import ClassementSponsort from "./ClassementSponsort";

const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  const payload = JSON.parse(atob(token.split('.')[1]));
  const expiry = payload.exp * 1000; // exp est en secondes, convertir en millisecondes
  const now = new Date().getTime();
  return now > expiry;
};

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (!token || isTokenExpired(token) || role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex max-lg:flex-col flex-row justify-evenly mt-8 xl:gap-8 md:gap-4 gap-2">
        <Card
          hoverable={true}
          loading={false}
          className="shadow-lg max-lg:w-full w-1/4"
        >
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row w-full justify-between">
              <div className="xl:text-5xl text-3xl text-black font-bold">
                100
              </div>
              <UserOutlined className="flex xl:text-3xl text-2xl text-white bg-[#2944df] p-4 rounded-full hover:shadow-xl" />
            </div>
            <div className="mt-4 xl:text-2xl text-xl  text-black font-bold">
              Test
            </div>
          </div>
        </Card>
        <Card
          hoverable={true}
          loading={false}
          className="shadow-lg max-lg:w-full w-1/4"
        >
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row w-full justify-between">
              <div className="xl:text-5xl text-3xl text-black font-bold">
                100
              </div>
              <IdcardOutlined className="flex xl:text-3xl text-2xl text-white bg-[#1aaa6e] p-4 rounded-full hover:shadow-xl" />
            </div>
            <div className="mt-4 xl:text-2xl text-xl text-black font-bold">
              Test
            </div>
          </div>
        </Card>
        <Card
          hoverable={true}
          loading={false}
          className="shadow-lg max-lg:w-full w-1/4"
        >
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row w-full justify-between">
              <div className="xl:text-5xl text-3xl text-black font-bold">
                100
              </div>
              <UserSwitchOutlined className="flex xl:text-3xl text-2xl text-white bg-[#b36f16] p-4 rounded-full hover:shadow-xl" />
            </div>
            <div className="mt-4 xl:text-2xl text-xl text-black font-bold text-center">
              Test
            </div>
          </div>
        </Card>
        <Card
          hoverable={true}
          loading={false}
          className="shadow-lg max-lg:w-full w-1/4"
        >
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row w-full justify-between">
              <div className="xl:text-5xl text-3xl text-black font-bold">
                100
              </div>
              <TeamOutlined className="flex xl:text-3xl text-2xl text-white bg-[#7c1919] p-4 rounded-full hover:shadow-xl" />
            </div>
            <div className="mt-4 xl:text-2xl text-xl text-black font-bold text-center">
              Test
            </div>
          </div>
        </Card>
      </div>
      <ClassementSponsort />
    </div>
  );
};

export default Dashboard;