import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Badge, Space, Button, Image, Input } from "antd";
import { DownOutlined } from '@ant-design/icons';

export default function AdminDashboardProjet() {
  const [projects, setProjects] = useState([]);
  const [reload, setReload] = useState(false);
  const [editField, setEditField] = useState({ id: null, field: null, value: "" });
  const token = localStorage.getItem("token");

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

  const handleEditClick = (id, field, value) => {
    setEditField({ id, field, value });
  };

  const handleInputChange = (e) => {
    setEditField({ ...editField, value: e.target.value });
  };

  const handleSaveClick = async () => {
    const { id, field, value } = editField;
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.put(`${apiUrl}/projects/${id}`, { [field]: value }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setReload(!reload);
      setEditField({ id: null, field: null, value: "" });
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error.message);
    }
  };

  const validateProject = async (projectId) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.put(`${apiUrl}/pjts/validate/${projectId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
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
      title: 'Image',
      dataIndex: 'projectImage',
      key: 'projectImage',
      render: (text) => (
        <Image
          src={`${import.meta.env.VITE_URL_IMAGE}${text}`}
          alt="project image"
          width={64}
          height={64}
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      ),
    },
    {
      title: 'Titre',
      dataIndex: 'projectTitle',
      key: 'projectTitle',
      onCell: (record) => ({
        onClick: () => handleEditClick(record._id, "projectTitle", record.projectTitle),
      }),
      render: (_, record) => (
        <span>
          {editField.id === record._id && editField.field === "projectTitle" ? (
            <Input value={editField.value} onChange={handleInputChange} onBlur={handleSaveClick} />
          ) : (
            record.projectTitle
          )}
        </span>
      ),
    },
    {
      title: 'Calendrier',
      dataIndex: 'projectTimeline',
      key: 'projectTimeline',
      render: (dates) => (
        <span>
          {dates.map(date => new Date(date).toLocaleDateString()).join(', ')}
        </span>
      ),
    },
    {
      title: 'Bonds Objectif',
      dataIndex: 'socialBonds',
      key: 'socialBonds',
      onCell: (record) => ({
        onClick: () => handleEditClick(record._id, "socialBonds", record.socialBonds),
      }),
      render: (_, record) => (
        <span>
          {editField.id === record._id && editField.field === "socialBonds" ? (
            <Input value={editField.value} onChange={handleInputChange} onBlur={handleSaveClick} />
          ) : (
            record.socialBonds
          )}
        </span>
      ),
    },
    {
      title: 'Bonds collecté',
      dataIndex: 'socialBondsCollect',
      key: 'socialBondsCollect',
      onCell: (record) => ({
        onClick: () => handleEditClick(record._id, "socialBondsCollect", record.socialBondsCollect),
      }),
      render: (_, record) => (
        <span>
          {editField.id === record._id && editField.field === "socialBondsCollect" ? (
            <Input value={editField.value} onChange={handleInputChange} onBlur={handleSaveClick} />
          ) : (
            record.socialBondsCollect
          )}
        </span>
      ),
    },
    {
      title: 'Validé',
      dataIndex: 'projectValidated',
      key: 'projectValidated',
      render: (validated) => (
        <Badge status={validated ? 'success' : 'error'} text={validated ? 'Oui' : 'Non'} />
      ),
    },
    {
      title: 'Terminé',
      dataIndex: 'projectFinished',
      key: 'projectFinished',
      render: (finished) => (
        <Badge status={finished ? 'success' : 'error'} text={finished ? 'Oui' : 'Non'} />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => validateProject(record._id)}>
            Valider
          </Button>
          <Button type="default">
            Terminer
          </Button>
          <Button type="danger" onClick={() => deleteProject(record._id)}>
            Supprimer
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <Table
        columns={columns}
        dataSource={projects}
        rowKey={(record) => record._id}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>
              <strong>Description complète:</strong> {record.projectDescription}
              <br />
              <strong>Objectifs détaillés:</strong> {record.projectGoals}
              <br />
              <strong>Partenaires:</strong> {record.projectPartners}
              <br />
              <strong>Indicateurs:</strong> {record.projectIndicators}
              <br />
              <br />
              <h5>Documents PDF</h5>
              <strong>Proposition de projet complète:</strong> {record.projectProposal}
              <br />
              <strong>Budget détaillé:</strong> {record.projectBudgetDetails}
              <br />
              <strong>Document justificatif:</strong> {record.supportingDocuments}
            </p>
          ),
        }}
        pagination={false}
      />
    </div>
  );
}
