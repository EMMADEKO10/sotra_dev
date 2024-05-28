import { Button, Table } from "antd";
import "../../../assets/Projects.css";
import ProjectsForm from "./ProjectsForm";
import React, { useEffect } from "react";
import axios from "axios"; // Importer axios
import { useState } from "react";
// import ProjectsDeux from "./essaie";

function Projects() {
  const [projects, setProjects] = React.useState([]);
  const [showProjectForm, setShowProjectForm] = React.useState(false);
  const [dataProject, setDataProjet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(`${DATA_URL}/projects`);
        const response = await axios.get("http://localhost:3700/api/projects");
        console.log("voici la reponse", response.data)
        setDataProjet(response.data)
        setProjects(response.data); 
        console.log(response.data)
        // Ajoutez ici la logique pour gérer la réponse de votre backend
        if (response.status === 201) { // Check for successful registration response
          console.log('Connexion réussie ! :')

        } else {
          // Handle unsuccessful registration (e.g., display error message)
        }
      } catch (error) {
        if (error.response) {
          // Erreur avec réponse du serveur
          console.error('Erreur de réponse du serveur:', error.response);

        } else {
          // Erreur de configuration ou autre
          console.error('Erreur lors de la requête:', error.message);
        }
      }

    };
    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures the effect runs only once

  // -----------------------------------------------------------------------------------

  if (!dataProject) {
    return <div>Loading...</div>;
  }


  const columns = [
    {
      title: "Name",
      dataIndex: "nom",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Montant Recherché",
      dataIndex: "montant",
      key: "amountSought",
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
      dataIndex: "duration", // Assurez-vous que le dataIndex correspond aux données
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
        <Button onClick={() => handleEdit(record)}>Edit</Button>
      ), // Exemple de bouton d'action
    },
  ];

  const handleEdit = (record) => {
    // Logique d'édition à implémenter
    console.log(record);
  };

 
  return (
    <div>
      <div className="flex justify-end">
        <Button
          type="default"
          className="custom-button"
          onClick={() => setShowProjectForm(true)}
        >
          Ajouter un Projet
        </Button>
      </div>
      <Table columns={columns} dataSource={projects} rowKey="id" />
      {showProjectForm && (
        <ProjectsForm
          showProjectForm={showProjectForm}
          setShowProjectForm={setShowProjectForm}
        />
      )}
    </div>
  );
}

export default Projects;