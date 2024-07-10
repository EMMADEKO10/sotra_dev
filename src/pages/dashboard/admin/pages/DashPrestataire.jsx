import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Table, Space, Button, message, Badge, Input, Typography, Card, Row, Col } from "antd";
import { SearchOutlined, CheckCircleOutlined, CloseCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  const payload = JSON.parse(atob(token.split('.')[1]));
  const expiry = payload.exp * 1000;
  const now = new Date().getTime();
  return now > expiry;
};

export default function DashPrestataire() {
  const navigate = useNavigate();
  const [prestataires, setPrestataire] = useState([]);
  const [filteredPrestataires, setFilteredPrestataires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const token = localStorage.getItem("token");

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (!token || isTokenExpired(token) || role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/prestataire`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPrestataire(response.data);
        setFilteredPrestataires(response.data);
      } catch (error) {
        message.error("Erreur lors du chargement des prestataires");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const togglePrestataireStatus = async (prestataire) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const endpoint = prestataire.prestaireValidated
        ? `${apiUrl}/desactiverPrestataire/${prestataire._id}`
        : `${apiUrl}/prestataireValidated/${prestataire._id}`;

      await axios.put(
        endpoint,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPrestataire((prevPrestataires) =>
        prevPrestataires.map((p) =>
          p._id === prestataire._id
            ? { ...p, prestaireValidated: !p.prestaireValidated }
            : p
        )
      );
      setFilteredPrestataires((prevPrestataires) =>
        prevPrestataires.map((p) =>
          p._id === prestataire._id
            ? { ...p, prestaireValidated: !p.prestaireValidated }
            : p
        )
      );
      message.success("Statut du prestataire mis à jour");
    } catch (error) {
      message.error("Erreur lors de la mise à jour du statut du prestataire");
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = prestataires.filter(prestataire => 
      prestataire.organizationName.toLowerCase().includes(value.toLowerCase()) ||
      prestataire.email.toLowerCase().includes(value.toLowerCase()) ||
      prestataire.representativeName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPrestataires(filtered);
  };

  const columns = [
    {
      title: "Nom de l'organisation",
      dataIndex: "organizationName",
      key: "organizationName",
      sorter: (a, b) => a.organizationName.localeCompare(b.organizationName),
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Type d'organisation",
      dataIndex: "specificOrganizationType",
      key: "specificOrganizationType",
      sorter: (a, b) => a.specificOrganizationType.localeCompare(b.specificOrganizationType),
      render: (text) => <span className="text-sm italic">{text}</span>,
    },
    {
      title: "Zones d'intervention",
      dataIndex: "geographicAreas",
      key: "geographicAreas",
      sorter: (a, b) => a.geographicAreas.localeCompare(b.geographicAreas),
      render: (text) => <span className="text-sm">{text}</span>,
    },
    {
      title: "Adresse e-mail",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      render: (text) => <a href={`mailto:${text}`} className="text-blue-600 hover:text-blue-800">{text}</a>,
    },
    {
      title: "Nom du représentant",
      dataIndex: "representativeName",
      key: "representativeName",
      sorter: (a, b) => a.representativeName.localeCompare(b.representativeName),
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Numéro de téléphone",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      render: (text) => <a href={`tel:${text}`} className="text-blue-600 hover:text-blue-800">{text}</a>,
    },
    {
      title: "Services",
      dataIndex: "services",
      key: "services",
      render: (services) => (
        <Text ellipsis={{ tooltip: services }}>
          {services.length > 50 ? `${services.slice(0, 50)}...` : services}
        </Text>
      ),
    },
    {
      title: "Validé",
      dataIndex: "prestaireValidated",
      key: "prestaireValidated",
      render: (valid) => (
        <Badge
          status={valid ? "success" : "error"}
          text={valid ? "Oui" : "Non"}
          className={`px-2 py-1 rounded-full ${valid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        />
      ),
      filters: [
        { text: 'Oui', value: true },
        { text: 'Non', value: false },
      ],
      onFilter: (value, record) => record.prestaireValidated === value,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, prestataire) => (
        <Space size="middle">
          <Button
            type={prestataire.prestaireValidated ? "danger" : "primary"}
            onClick={() => togglePrestataireStatus(prestataire)}
            icon={prestataire.prestaireValidated ? <CloseCircleOutlined /> : <CheckCircleOutlined />}
            className={`${
              prestataire.prestaireValidated 
                ? "bg-red-500 hover:bg-red-600 text-white" 
                : "bg-green-500 hover:bg-green-600 text-white"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
          >
            {prestataire.prestaireValidated ? "Désactiver" : "Valider"}
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <Card className="mb-8 shadow-md">
        <Title level={2} className="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          Tableau de bord des prestataires
        </Title>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={12} lg={8}>
            <Input
              placeholder="Rechercher par nom, email ou représentant"
              prefix={<SearchOutlined className="text-gray-400" />}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full"
              size="large"
            />
          </Col>
          <Col xs={24} md={12} lg={16}>
            <Text type="secondary">
              <InfoCircleOutlined /> Utilisez la recherche pour filtrer les prestataires
            </Text>
          </Col>
        </Row>
      </Card>
      
      <Card className="shadow-lg rounded-lg">
        <Table
          columns={columns}
          dataSource={searchText ? filteredPrestataires : prestataires}
          rowKey={(record) => record._id}
          loading={loading}
          expandable={{
            expandedRowRender: (record) => (
              <Card className="bg-gray-50">
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <Title level={5} className="text-lg font-semibold text-gray-900 mb-4">Informations de l'organisation</Title>
                    <Text strong className="text-gray-700">Nom de l'organisation:</Text> <Text>{record.organizationName}</Text><br />
                    <Text strong className="text-gray-700">Adresse:</Text> <Text>{record.email}</Text><br />
                    <Text strong className="text-gray-700">Site web:</Text> <a href={record.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">{record.website}</a><br />
                    <Text strong className="text-gray-700">Adresse e-mail:</Text> <a href={`mailto:${record.email}`} className="text-blue-600 hover:text-blue-800">{record.email}</a><br />
                    <Text strong className="text-gray-700">Type d'organisation:</Text> <Text>{record.specificOrganizationType}</Text><br />
                  </Col>
                  <Col xs={24} md={12}>
                    <Title level={5} className="text-lg font-semibold text-gray-900 mb-4">Informations de contact</Title>
                    <Text strong className="text-gray-700">Nom du représentant:</Text> <Text>{record.representativeName}</Text><br />
                    <Text strong className="text-gray-700">Numéro de téléphone:</Text> <a href={`tel:${record.phone}`} className="text-blue-600 hover:text-blue-800">{record.phone}</a><br />
                    <Text strong className="text-gray-700">Deuxième Numéro de téléphone:</Text> <Text>{record.phoneSecond}</Text><br />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col span={24}>
                    <Title level={5} className="text-lg font-semibold text-gray-900 mb-4">Détails spécifiques</Title>
                    <Text strong className="text-gray-700">Description des services offerts:</Text> <Text>{record.services}</Text><br />
                    <Text strong className="text-gray-700">Zones géographiques d'intervention:</Text> <Text>{record.geographicAreas}</Text><br />
                    <Text strong className="text-gray-700">Projets en cours ou précédents:</Text> <Text>{record.projects}</Text>
                  </Col>
                </Row>
              </Card>
            ),
          }}
          pagination={{ 
            pageSize: 10, 
            showSizeChanger: true, 
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} sur ${total} prestataires`,
            className: "my-6"
          }}
          className="w-full"
          scroll={{ x: 'max-content' }}
        />
      </Card>
    </div>
  );
}