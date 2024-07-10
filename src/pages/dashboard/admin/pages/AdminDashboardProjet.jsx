import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Badge, Space, Button, Image, Input, Typography, Card, Row, Col } from "antd";
import {
  SearchOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SbIcon from "../../../../components/Social Bonds/SbIcon";

const { Title, Text } = Typography;

const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  const payload = JSON.parse(atob(token.split(".")[1]));
  const expiry = payload.exp * 1000; // exp est en secondes, convertir en millisecondes
  const now = new Date().getTime();
  return now > expiry;
};

export default function AdminDashboardProjet() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [reload, setReload] = useState(false);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || isTokenExpired(token) || role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/projects`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProjects(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        if (error.response) {
          console.error("Erreur de réponse du serveur:", error.response);
        } else {
          console.error("Erreur lors de la requête:", error.message);
        }
      }
    };
    fetchData();
  }, [reload, token]);

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = projects.filter(
      (project) =>
        project.projectTitle.toLowerCase().includes(value.toLowerCase()) ||
        project.prestataire.organizationName
          .toLowerCase()
          .includes(value.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  const validateProject = async (projectId) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.put(
        `${apiUrl}/pjts/validate/${projectId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setReload(!reload);
    } catch (error) {
      console.error("Erreur lors de la validation du projet:", error);
    }
  };

  const deleteProject = async (projectId) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.delete(`${apiUrl}/projects/${projectId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReload(!reload);
    } catch (error) {
      console.error("Erreur lors de la suppression du projet:", error);
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "projectImage",
      key: "projectImage",
      render: (text) => (
        <Image
          src={`${import.meta.env.VITE_URL_IMAGE}${text}`}
          alt="project image"
          width={64}
          height={64}
          className="object-cover rounded-lg shadow-md"
        />
      ),
    },
    {
      title: "Titre",
      dataIndex: "projectTitle",
      key: "projectTitle",
      sorter: (a, b) => a.projectTitle.localeCompare(b.projectTitle),
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Calendrier",
      dataIndex: "projectTimeline",
      key: "projectTimeline",
      render: (dates) => (
        <span className="text-sm text-gray-600">
          {dates.map((date) => new Date(date).toLocaleDateString()).join(", ")}
        </span>
      ),
      sorter: (a, b) =>
        new Date(a.projectTimeline[0]) - new Date(b.projectTimeline[0]),
    },
    {
      title: "Bonds Objectif",
      dataIndex: "socialBonds",
      key: "socialBonds",
      sorter: (a, b) => a.socialBonds - b.socialBonds,
      render: (value) => <span className="font-medium">{value}<SbIcon color="#52c41a" /></span>,
    },
    {
      title: "Bonds collecté",
      dataIndex: "socialBondsCollect",
      key: "socialBondsCollect",
      sorter: (a, b) => a.socialBondsCollect - b.socialBondsCollect,
      render: (value) => <span className="font-medium">{value}<SbIcon color="#ff9800"/></span>,
    },
    {
      title: "Nom de l'Organisation",
      dataIndex: ["prestataire", "organizationName"],
      key: "organizationName",
      sorter: (a, b) =>
        a.prestataire.organizationName.localeCompare(
          b.prestataire.organizationName
        ),
      render: (text) => <span className="text-sm italic">{text}</span>,
    },
    {
      title: "Validé",
      dataIndex: "projectValidated",
      key: "projectValidated",
      render: (validated) => (
        <Badge
          status={validated ? "success" : "error"}
          text={validated ? "Oui" : "Non"}
          className={`px-2 py-1 rounded-full ${
            validated ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        />
      ),
      filters: [
        { text: "Oui", value: true },
        { text: "Non", value: false },
      ],
      onFilter: (value, record) => record.projectValidated === value,
    },
    {
      title: "Terminé",
      dataIndex: "projectFinished",
      key: "projectFinished",
      render: (finished) => (
        <Badge
          status={finished ? "success" : "error"}
          text={finished ? "Oui" : "Non"}
          className={`px-2 py-1 rounded-full ${
            finished
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        />
      ),
      filters: [
        { text: "Oui", value: true },
        { text: "Non", value: false },
      ],
      onFilter: (value, record) => record.projectFinished === value,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => validateProject(record._id)}
            icon={<CheckCircleOutlined />}
            className="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
          >
            Valider
          </Button>
          <Button
            type="danger"
            onClick={() => deleteProject(record._id)}
            icon={<DeleteOutlined />}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            Supprimer
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
    <Card className="mb-8 shadow-md">
      <Title
        level={2}
        className="mb-6 text-3xl font-bold text-gray-800 lg:text-4xl md:text-3xl sm:text-2xl"
      >
        Projet
      </Title>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12} lg={8}>
          <Input
            placeholder="Rechercher par titre ou organisation"
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

      {/* <div className="bg-white rounded-lg shadow-md overflow-hidden"> */}
      <Card className="shadow-lg rounded-lg">
        <Table
          columns={columns}
          dataSource={searchText ? filteredProjects : projects}
          rowKey={(record) => record._id}
          expandable={{
            expandedRowRender: (record) => (
              <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Text strong className="text-lg">
                      Description complète:
                    </Text>
                    <Text className="block mt-2">
                      {record.projectDescription}
                    </Text>
                  </div>
                  <div>
                    <Text strong className="text-lg">
                      Objectifs détaillés:
                    </Text>
                    <Text className="block mt-2">{record.projectGoals}</Text>
                  </div>
                  <div>
                    <Text strong className="text-lg">
                      Partenaires:
                    </Text>
                    <Text className="block mt-2">{record.projectPartners}</Text>
                  </div>
                  <div>
                    <Text strong className="text-lg">
                      Indicateurs:
                    </Text>
                    <Text className="block mt-2">
                      {record.projectIndicators}
                    </Text>
                  </div>
                </div>
                <Title level={5} className="mt-6 mb-4">
                  Documents PDF
                </Title>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <Text strong>Proposition de projet complète:</Text>
                    <Text className="ml-2">{record.projectProposal}</Text>
                  </li>
                  <li>
                    <Text strong>Budget détaillé:</Text>
                    <Text className="ml-2">{record.projectBudgetDetails}</Text>
                  </li>
                  <li>
                    <Text strong>Document justificatif:</Text>
                    <Text className="ml-2">{record.supportingDocuments}</Text>
                  </li>
                </ul>
              </div>
            ),
          }}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} sur ${total} projets`,
            className: "my-6",
          }}
          className="w-full"
        />
        </Card>
      </div>
    // </div>
  );
}
