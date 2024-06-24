import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Typography, Divider, Input, Space, Button, Badge } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";
import 'animate.css';

const { Title } = Typography;

const ClassementSponsort = () => {
  const [sponsorData, setSponsorData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchSponsorData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/getSponsorRanking`);

        // Tri et ajout de l'index statique
        const sortedData = response.data
          .sort((a, b) => b.totalInvested - a.totalInvested)
          .map((item, index) => ({ ...item, staticRanking: index + 1 }));

        setSponsorData(sortedData);
        setFilteredData(sortedData);
      } catch (error) {
        console.error("Error fetching sponsor data:", error);
      }
    };

    fetchSponsorData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = sponsorData.filter((sponsor) =>
      sponsor.sponsorName.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  const resetSearch = () => {
    setSearchText("");
    setFilteredData(sponsorData);
  };

  const columns = [
    {
      title: "Position",
      dataIndex: "staticRanking",
      key: "staticRanking",
      render: (text, record) => (
        <Badge
          count={`#${record.staticRanking}`}
          style={{ backgroundColor: "#3bcf94" }}
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
            src={record.logo}
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
      title: "T.I (Social bonds)",
      dataIndex: "totalInvested",
      key: "totalInvested",
      sorter: (a, b) => b.totalInvested - a.totalInvested,
      render: (text) => `${text.toLocaleString()} Sb`,
      className: "text-center text-blue-600 font-semibold",
      width: 295,
    },
  ];

  return (
    <div className=" py-12 px-4">
      {/* <Divider orientation="left">
        <Title level={3} >
          Top sponsorts
        </Title>
      </Divider> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <Title level={4} className="text-gray-600 font-semibold mb-2">
            Classement de nos meilleurs partenaires
            </Title>
            <Title level={2} className="font-bold mb-4">
            DRC RSE Awards.
            </Title>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <p className="text-gray-700 mb-4">
              Grâce à la générosité de nos sponsors, nous créons des impacts positifs à travers des initiatives sociales innovantes.
            </p>
          </div>
        </div>
      <Space direction="vertical" size="middle" className="w-full">
        {/* <div className="flex justify-between items-center w-full mb-4">
          <Input
            placeholder="Rechercher un sponsor"
            value={searchText}
            onChange={handleSearch}
            prefix={<SearchOutlined className="text-gray-400" />}
            className="w-full md:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded-md focus:border-primary focus:ring focus:ring-primary-light transition duration-200"
          />
          <Button
            onClick={resetSearch}
            icon={<ReloadOutlined />}
            className="ml-4 p-2 bg-primary text-white rounded-md shadow hover:bg-primary-dark transition duration-200"
          >
            Réinitialiser
          </Button>
        </div> */}
        <Table
          className="mt-4 bg-white shadow-md rounded-lg overflow-hidden"
          columns={columns}
          dataSource={filteredData}
          rowKey="sponsorName"
          pagination={{ pageSize: 10 }}
          bordered
        />
      </Space>
    </div>
  );
};

export default ClassementSponsort;
