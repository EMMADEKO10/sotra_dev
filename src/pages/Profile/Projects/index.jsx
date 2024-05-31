import { Button, Table } from "antd";
import "../../../assets/Projects.css";
import ProjectsForm from "./ProjectsForm";
import  { useEffect } from "react";
import axios from "axios"; 
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [dataProject, setDataProjet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/projects`);
        console.log("voici la reponse", response.data);
        setDataProjet(response.data);
        setProjects(response.data);
      } catch (error) {
        if (error.response) {
          console.error('Erreur de réponse du serveur:', error.response);
        } else {
          console.error('Erreur lors de la requête:', error.message);
        }
      }
    };
    fetchData();
  }, []);

  if (!dataProject) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  const columns = [
    {
      title: "Nom",
      dataIndex: "nom",
      key: "name",
      responsive: ['md'], // Column will only show on md and larger screens
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ['lg'],
    },
    {
      title: "Montant Recherché",
      dataIndex: "montant",
      key: "amountSought",
      responsive: ['md'],
    },
    {
      title: "Montant Reçu",
      dataIndex: "amountReceived",
      key: "amountReceived",
    },
    {
      title: "Type",
      dataIndex: "type_projet",
      key: "type",
    },
    {
      title: "Durée",
      dataIndex: "duree",
      key: "duration",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Button onClick={() => handleEdit(record)} type="primary">
          Edit
        </Button>
      ),
    },
  ];

  const handleEdit = (record) => {
    // Logique d'édition à implémenter
    console.log(record);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button type="default" className="custom-button" onClick={() => setShowProjectForm(true)}>
          Ajouter un Projet
        </Button>
      </div>
      <Table 
        columns={columns} 
        dataSource={projects} 
        rowKey="id" 
        key={uuidv4()} 
        className="bg-white rounded-lg shadow-sm"
        pagination={{ pageSize: 5 }} 
        responsive
      />
      {showProjectForm && (
        <ProjectsForm showProjectForm={showProjectForm} setShowProjectForm={setShowProjectForm} />
      )}
    </div>
  );
}

export default Projects;
