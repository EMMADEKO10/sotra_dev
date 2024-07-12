import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Typography, Space, Button, Badge, Spin } from "antd";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'animate.css';

const { Title } = Typography;

const ClassementSponsort = () => {
  const [sponsorData, setSponsorData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSponsorData = async () => {
      setLoading(true);
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/getSponsorRanking`);
        const sortedData = response.data
          .sort((a, b) => b.totalInvested - a.totalInvested)
          .slice(0, 5)
          .map((item, index) => ({ ...item, staticRanking: index + 1 }));
        setSponsorData(sortedData);
        setFilteredData(sortedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données des sponsors :", error);
      } finally {
        setLoading(false);
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
        <Badge
          count={`#${record.staticRanking}`}
          style={{ 
            backgroundColor: record.staticRanking <= 3 ? '#ffd700' : '#3bcf94',
            color: record.staticRanking <= 3 ? '#000' : '#fff',
            fontWeight: 'bold'
          }}
        />
      ),
      className: "font-bold text-center",
      width: 100,
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
    <div className="causes-area bg-gray-50 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <h4 className="text-xl text-gray-600 font-semibold mb-2">
            Nos Partenaires d'Impact
          </h4>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Découvrez les principaux contributeurs de nos projets
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Grâce à la générosité de nos sponsors, nous créons des impacts positifs à travers des initiatives sociales innovantes.
          </p>
          <NavLink to="/nossponsorts">
            <Button type="primary" className="py-3 px-6 text-base animate__animated animate__fadeInUp bg-[#3bcf94] hover:bg-[#2eaf7a] border-none">
              Découvrez en plus <i className="fas fa-angle-right ml-2"></i>
            </Button>
          </NavLink>
        </div>

        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Spin size="large" />
            </div>
          ) : (
            <Table
              className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden"
              columns={columns}
              dataSource={filteredData}
              rowKey="sponsorName"
              pagination={false}
              bordered={false}
              rowClassName={(record, index) => 
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ClassementSponsort;