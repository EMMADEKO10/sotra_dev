import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Input, Table, Space, Typography, Image, Card, Row, Col, Badge } from "antd";
import { SearchOutlined, EditOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import SbIcon from "../../../../components/Social Bonds/SbIcon";

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

export default function DashSponsor() {
  const navigate = useNavigate();
  const [sponsors, setSponsors] = useState([]);
  const [filteredSponsors, setFilteredSponsors] = useState([]);
  const [reload, setReload] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSponsor, setCurrentSponsor] = useState(null);
  const [budgetValue, setBudgetValue] = useState("");
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
        const response = await axios.get(`${apiUrl}/sponsors`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSponsors(response.data);
        setFilteredSponsors(response.data);
      } catch (error) {
        console.error("Erreur lors de la requête:", error.message);
      }
    };
    fetchData();
  }, [reload, token]);

  const toggleSponsorStatus = async (sponsor) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const endpoint = sponsor.sponsorValidated
        ? `${apiUrl}/desactiverSponsor/${sponsor._id}`
        : `${apiUrl}/activerSponsor/${sponsor._id}`;

      await axios.put(endpoint, {}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setReload(!reload);
    } catch (error) {
      console.error("Erreur lors de la modification du statut du sponsor:", error);
    }
  };

  const showModal = (sponsor) => {
    setCurrentSponsor(sponsor);
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    if (currentSponsor && budgetValue) {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        await axios.patch(`${apiUrl}/sponsors/${currentSponsor._id}`, { field: "budget", value: budgetValue }, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setReload(!reload);
        setIsModalVisible(false);
        setBudgetValue("");
      } catch (error) {
        console.error("Erreur lors de la mise à jour:", error.message);
      }
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setBudgetValue("");
  };

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = sponsors.filter(sponsor => 
      sponsor.companyName.toLowerCase().includes(value.toLowerCase()) ||
      sponsor.email.toLowerCase().includes(value.toLowerCase()) ||
      sponsor.representativeName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSponsors(filtered);
  };

  const columns = [
    {
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
      render: (logo) => (
        <Image
          src={`${import.meta.env.VITE_URL_IMAGE}${logo}`}
          alt="logo"
          width={64}
          height={64}
          style={{ objectFit: 'cover', borderRadius: '8px' }}
          fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
        />
      ),
    },
    {
      title: 'Nom',
      dataIndex: 'companyName',
      key: 'companyName',
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: 'Secteur',
      dataIndex: 'industry',
      key: 'industry',
      sorter: (a, b) => a.industry.localeCompare(b.industry),
      render: (text) => <span className="text-sm italic">{text}</span>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
      render: (text) => <a href={`mailto:${text}`} className="text-blue-600 hover:text-blue-800">{text}</a>,
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      key: 'budget',
      sorter: (a, b) => a.budget - b.budget,
      render: (text) => <span className="font-medium">{text}<SbIcon color="#52c41a" /></span>,
    },
    {
      title: 'Nom du représentant',
      dataIndex: 'representativeName',
      key: 'representativeName',
      sorter: (a, b) => a.representativeName.localeCompare(b.representativeName),
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: 'Validé',
      dataIndex: 'sponsorValidated',
      key: 'sponsorValidated',
      render: (sponsorValidated) => (
        <Badge
          status={sponsorValidated ? "success" : "error"}
          text={sponsorValidated ? "Oui" : "Non"}
          className={`px-2 py-1 rounded-full ${sponsorValidated ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        />
      ),
      filters: [
        { text: 'Oui', value: true },
        { text: 'Non', value: false },
      ],
      onFilter: (value, record) => record.sponsorValidated === value,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, sponsor) => (
        <Space size="middle">
          <Button
            type={sponsor.sponsorValidated ? "danger" : "primary"}
            danger={sponsor.sponsorValidated}
            onClick={() => toggleSponsorStatus(sponsor)}
            icon={sponsor.sponsorValidated ? <CloseCircleOutlined /> : <CheckCircleOutlined />}
            className={`${
              sponsor.sponsorValidated
                ? "bg-red-500 hover:bg-red-600 text-white" 
                : "bg-green-500 hover:bg-green-600 text-white"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
          >
            {sponsor.sponsorValidated ? "Désactiver" : "Valider"}
          </Button>
          <Button
            type="primary"
            onClick={() => showModal(sponsor)}
            icon={<EditOutlined />}
          >
            Update Budget
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <Card className="mb-8 shadow-md">
        <Title level={2} className="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          Tableau de bord des Sponsors
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
              Utilisez la recherche pour filtrer les sponsors
            </Text>
          </Col>
        </Row>
      </Card>
      
      <Card className="shadow-lg rounded-lg">
        <Table
          columns={columns}
          dataSource={searchText ? filteredSponsors : sponsors}
          rowKey={(record) => record._id}
          expandable={{
            expandedRowRender: (record) => (
              <Card className="bg-gray-50">
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <Title level={5} className="text-lg font-semibold text-gray-900 mb-4">Informations de l'entreprise</Title>
                    <Text strong className="text-gray-700">Nom de l'entreprise:</Text> <Text>{record.companyName}</Text><br />
                    <Text strong className="text-gray-700">Adresse:</Text> <Text>{record.address}</Text><br />
                    <Text strong className="text-gray-700">Site web:</Text> <a href={record.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-red-500">{record.website}</a><br />
                    <Text strong className="text-gray-700">Adresse e-mail:</Text> <a href={`mailto:${record.email}`} className="text-blue-600 hover:text-blue-800">{record.email}</a><br />
                    <Text strong className="text-gray-700">Type d'organisation:</Text> <Text>{record.industry}</Text><br />
                  </Col>
                  <Col xs={24} md={12}>
                    <Title level={5} className="text-lg font-semibold text-gray-900 mb-4">Informations de contact</Title>
                    <Text strong className="text-gray-700">Nom du représentant:</Text> <Text>{record.representativeName}</Text><br />
                    <Text strong className="text-gray-700">Numéro de téléphone:</Text> <a href={`tel:${record.phone}`} className="text-blue-600 hover:text-blue-800">{record.phone}</a><br />
                    <Text strong className="text-gray-700">Deuxième Numéro de téléphone:</Text> <Text>{record.AutherPhone}</Text><br />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col span={24}>
                    <Title level={5} className="text-lg font-semibold text-gray-900 mb-4">Détails spécifiques</Title>
                    <Text strong className="text-gray-700">Objectifs de sponsoring:</Text> <Text>{record.sponsorshipGoals}</Text><br />
                  </Col>
                </Row>
              </Card>
            ),
          }}
          pagination={{ 
            pageSize: 10, 
            showSizeChanger: true, 
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} sur ${total} sponsors`,
            className: "my-6"
          }}
          className="w-full"
          scroll={{ x: 'max-content' }}
        />
      </Card>

      <Modal
        title="Update Budget"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <p>
          Ajouter le budget pour le sponsor {currentSponsor && currentSponsor.companyName}.
        </p>
        <Input
          type="text"
          value={budgetValue}
          onChange={(e) => setBudgetValue(e.target.value)}
          placeholder="Enter budget value"
          className="mt-4"
        />
      </Modal>
    </div>
  );
}