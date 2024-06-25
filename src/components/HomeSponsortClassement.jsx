import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Typography, Space, Button, Badge } from "antd";
import { NavLink } from 'react-router-dom';
import 'animate.css';

const { Title } = Typography;

const ClassementSponsort = () => {
  const [sponsorData, setSponsorData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchSponsorData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/getSponsorRanking`);

        // Trier les données et prendre les 5 premiers sponsors
        const sortedData = response.data
          .sort((a, b) => b.totalInvested - a.totalInvested)
          .slice(0, 5)
          .map((item, index) => ({ ...item, staticRanking: index + 1 }));

        setSponsorData(sortedData);
        setFilteredData(sortedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données des sponsors :", error);
      }
    };

    fetchSponsorData();
  }, []);

  const columns = [
    {
      title: "Position",
      dataIndex: "staticRanking",
      key: "staticRanking",
      render: (text, record) => (
        <Badge count={`#${record.staticRanking}`} style={{ backgroundColor: "#3bcf94" }} />
      ),
      className: "font-bold text-center",
      width: 5,
    },
    {
      title: "Sponsors",
      dataIndex: "sponsorName",
      key: "sponsor",
      render: (text, record) => (
        <div className="flex items-center">
          <img
            src={`${import.meta.env.VITE_URL_IMAGE}${record.logo}`}
            alt="logo"
            className="hidden sm:block w-12 h-12 rounded-full border-2 border-gray-300 mr-3"
          />
          <span className="font-medium text-gray-800">{record.sponsorName}</span>
        </div>
      ),
      className: "text-left",
      width: 300,
    },
    {
      title: "T.I (Social Bonds)",
      dataIndex: "totalInvested",
      key: "totalInvested",
      sorter: (a, b) => b.totalInvested - a.totalInvested,
      render: (text) => `${text.toLocaleString()} Sb`,
      className: "text-center text-blue-600 font-semibold",
      width: 300,
    },
  ];

  return (
    <div className="causes-area bg-gray py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <Title level={4} className="text-gray-600 font-semibold mb-2">
              Nos Partenaires d'Impact
            </Title>
            <Title level={2} className="font-bold mb-4">
            Découvrez les principaux contributeurs de nos projets.
            </Title>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <p className="text-gray-700 mb-4">
              Grâce à la générosité de nos sponsors, nous créons des impacts positifs à travers des initiatives sociales innovantes.
            </p>
            <NavLink to="/nossponsorts">
              <Button type="primary" className="py-3 px-6 text-base animate__animated animate__fadeInUp">
              Découvrez en plus <i className="fas fa-angle-right ml-2"></i>
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Space direction="vertical" size="middle" className="w-full">
          <Table
            className="mt-4 bg-white shadow-md rounded-lg overflow-hidden"
            columns={columns}
            dataSource={filteredData}
            rowKey="sponsorName"
            pagination={false}  // Pagination désactivée
          />
        </Space>
      </div>
    </div>
  );
};

export default ClassementSponsort;
