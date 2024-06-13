import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashboardProjet() {
  const [projects, setProjects] = useState([]);
  const [reload, setReload] = useState(false);
  const token = localStorage.getItem("token");

  // -------------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ApiUrlImage = import.meta.env.VITE_URL_IMAGE;
        const apiUrl = import.meta.env.VITE_API_URL;

        console.log("API des images:", ApiUrlImage);
        console.log("API des EndPoints:", apiUrl);

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

  // ---------------------------------------------------------------------------------------

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

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-4 font-bold uppercase text-left">Image</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Titre</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Description</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Objectif</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Calendrier</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Montant</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Social Bonds</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Bonds collecté</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Partenaires</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Indicateurs</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Proposition complète</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Budget détaillé</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Document justificatif</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Validé</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Terminé</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {projects.map((project) => (
              <tr key={project._id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
                <td className="py-3 px-4">
                  <img
                    src={`${import.meta.env.VITE_URL_IMAGE}${project.projectImage}`}
                    alt={project.projectTitle}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{project.projectTitle}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectDescription.length > 50 ? (
                    <span>
                      {project.projectDescription.slice(0, 50)}...
                      <span className="text-blue-500 cursor-pointer" onClick={() => alert(project.projectDescription)}>
                        {" "}voir plus
                      </span>
                    </span>
                  ) : (
                    project.projectDescription
                  )}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectGoals.length > 50 ? (
                    <span>
                      {project.projectGoals.slice(0, 50)}...
                      <span className="text-blue-500 cursor-pointer" onClick={() => alert(project.projectGoals)}>
                        {" "}voir plus
                      </span>
                    </span>
                  ) : (
                    project.projectGoals
                  )}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    {project.projectTimeline.map((date, index) => (
                      <span key={index}>{new Date(date).toLocaleDateString()}</span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{project.projectAmount}</td>
                <td className="py-3 px-4 whitespace-nowrap">{project.socialBonds}</td>
                <td className="py-3 px-4 whitespace-nowrap">{project.socialBondsCollect}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectPartners.length > 50 ? (
                    <span>
                      {project.projectPartners.slice(0, 50)}...
                      <span className="text-blue-500 cursor-pointer" onClick={() => alert(project.projectPartners)}>
                        {" "}voir plus
                      </span>
                    </span>
                  ) : (
                    project.projectPartners
                  )}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectIndicators.length > 50 ? (
                    <span>
                      {project.projectIndicators.slice(0, 50)}...
                      <span className="text-blue-500 cursor-pointer" onClick={() => alert(project.projectIndicators)}>
                        {" "}voir plus
                      </span>
                    </span>
                  ) : (
                    project.projectIndicators
                  )}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{project.projectProposal}</td>
                <td className="py-3 px-4 whitespace-nowrap">{project.projectBudgetDetails}</td>
                <td className="py-3 px-4 whitespace-nowrap">{project.supportingDocuments}</td>
                <td className="py-3 px-4 whitespace-nowrap">{project.projectValidated ? "Yes" : "No"}</td>
                <td className="py-3 px-4 whitespace-nowrap">{project.projectFinished ? "Yes" : "No"}</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button
                    onClick={() => validateProject(project._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition duration-200"
                  >
                    Validate
                  </button>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition duration-200">
                    Finish
                  </button>
                  <button
                    onClick={() => deleteProject(project._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
