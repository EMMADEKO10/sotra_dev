import React, { useEffect } from "react";
import { Card, Row, Col, Typography, Statistic } from "antd";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  IdcardOutlined,
  TeamOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import ClassementSponsort from "./ClassementSponsort";

const { Title } = Typography;

const isTokenExpired = (token) => {
  if (!token) return true;
  const payload = JSON.parse(atob(token.split('.')[1]));
  const expiry = payload.exp * 1000;
  return new Date().getTime() > expiry;
};

const DashboardCard = ({ title, value, icon, color }) => (
  <Card
    hoverable
    className="h-full shadow-md transition-all duration-300 hover:shadow-xl"
    bodyStyle={{ padding: "24px" }}
  >
    <Statistic
      title={<Title level={4}>{title}</Title>}
      value={value}
      valueStyle={{ color: color, fontSize: '2rem' }}
      prefix={React.cloneElement(icon, { 
        style: { 
          fontSize: '2rem',
          backgroundColor: color,
          color: 'white',
          padding: '12px',
          borderRadius: '50%',
          marginRight: '16px'
        } 
      })}
    />
  </Card>
);

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (!token || isTokenExpired(token) || role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  const cardData = [
    { title: "Utilisateurs", value: 100, icon: <UserOutlined />, color: "#2944df" },
    { title: "Cartes", value: 100, icon: <IdcardOutlined />, color: "#1aaa6e" },
    { title: "Changements", value: 100, icon: <UserSwitchOutlined />, color: "#b36f16" },
    { title: "Équipes", value: 100, icon: <TeamOutlined />, color: "#7c1919" },
  ];

  return (
    <div className="p-6 space-y-8">
      <Title level={2}>Tableau de bord</Title>
      <Row gutter={[16, 16]}>
        {cardData.map((card, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <DashboardCard {...card} />
          </Col>
        ))}
      </Row>
      <ClassementSponsort />
    </div>
  );
};

export default Dashboard;