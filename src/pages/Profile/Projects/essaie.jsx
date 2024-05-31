import { Button } from "antd"
import "../../../assets/Projects.css"
import ProjectsForm from "./ProjectsForm";
import  { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function ProjectsDeux() {
  const [showProjectForm, setShowProjectForm] = useState(false);

  return (
    <div>
      <div className="flex justify-end">

        <Button type='default' className="custom-button"
          onClick={() => setShowProjectForm(true)}
        >Ajouter un Projet</Button>
      </div>

      {showProjectForm && <ProjectsForm showProjectForm={showProjectForm} setShowProjectForm={setShowProjectForm} />}

      <DashboardDeux />
    </div>
  )
}

export default ProjectsDeux


// -------------------------------------------------------------------------------------

const DashboardDeux = () => {
const [dataProject, setDataProjet] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {

      try {
        const apiUrl = import.meta.env.VITE_API_URL;

        const response = await axios.get(`${apiUrl}/projects`);
        console.log("voici la reponse", response.data)
        setDataProjet(response.data)
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
  },[]); // Empty dependency array ensures the effect runs only once

  // -----------------------------------------------------------------------------------

  if (!dataProject) {
    return <div>Loading...</div>;
  }

  // -------------------------------------------------------------------------------------------------


  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-y-6">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Nom</th>
            <th className="py-2">Description</th>
            <th className="py-2">Montant (€)</th>
            <th className="py-2">Type</th>
            <th className="py-2">Durée</th>
            <th className="py-2">Détail du Projet</th>
            <th className="py-2">Images</th>
            <th className="py-2">Prestataire</th>
          </tr>
        </thead>
        <tbody>
          {dataProject.map((project, index) => (
            <tr key={index} className="bg-gray-100 border-b">
              <td className="py-2 px-4">{project.nom}</td>
              <td className="py-2 px-4">{project.description}</td>
              <td className="py-2 px-4">{project.montant}</td>
              <td className="py-2 px-4">{project.type_projet}</td>
              <td className="py-2 px-4">{project.duree}</td>
              <td className="py-2 px-4">
                <a href={project.detail_projet} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Voir le PDF</a>
              </td>
              <td className="py-2 px-4">
                <div className="flex space-x-2">
                  {project.images.map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt={`Project Image ${imgIndex + 1}`} className="w-16 h-16 rounded-md shadow-md" />
                  ))}
                </div>
              </td>
              <td className="py-2 px-4">{project.Prestataire}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};