// import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"

export default function AdminDashboardProjet() {
  const [projects, setProjects] = useState([])
  const [reload, setReload] = useState(false)
  const token = localStorage.getItem("token") // Supposez que vous stockez le token sous le nom 'token'

  // -------------------------------------------------------------------------------------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ApiUrlImage = import.meta.env.VITE_URL_IMAGE
        const apiUrl = import.meta.env.VITE_API_URL

        console.log("Voci l'api des images : ", ApiUrlImage)
        console.log("Voci l'api des EndPoints : ", apiUrl)

        const response = await axios.get(`${apiUrl}/projects`)
        console.log("voici la reponse", response.data)
        setProjects(response.data)
        // Ajoutez ici la logique pour gérer la réponse de votre backend
        if (response.status === 201 || response.status === 200) {
          // Check for successful registration response
          console.log("Connexion réussie ! :")
          // setReload(!reload);
        }
      } catch (error) {
        if (error.response) {
          // Erreur avec réponse du serveur
          console.error("Erreur de réponse du serveur:", error.response)
        } else {
          // Erreur de configuration ou autre
          console.error("Erreur lors de la requête:", error.message)
        }
      }
    }
    fetchData() // Call the function to fetch data
  }, [reload]) // Empty dependency array ensures the effect runs only once

  // ---------------------------------------------------------------------------------------

  const validateProject = async (projectId) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL

      await axios.put(
        `${apiUrl}/pjts/validate/${projectId}`,
        {},
        {
          // Le corps de la requête doit être un objet vide si non nécessaire
          headers: {
            // 'Content-Type': 'application/json', // Utilisez application/json
            "X-CSRF-Token": "your-csrf-token", // Ajouter un token CSRF pour la sécurité si nécessaire
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      setReload(!reload)
    } catch (error) {
      console.error("Error validating project:", error)
    }
  }

  const deleteProject = async (projectId) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL
      await axios.delete(`${apiUrl}/projects/${projectId}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
          "X-CSRF-Token": "your-csrf-token", // Ajouter un token CSRF pour la sécurité si nécessaire
        },
      })
      setReload(!reload)
    } catch (error) {
      console.error("Error deleting project:", error)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-4 font-bold uppercase text-left">Image</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Title</th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Description
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">Goals</th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Timeline
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Amount
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Social Bonds
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Collected Bonds
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Partners
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Indicators
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Proposal
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Budget Details
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Documents
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Validated
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Finished
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {projects.map((project) => (
              <tr
                key={project._id}
                className="border-b border-gray-200 hover:bg-gray-100 transition duration-200"
              >
                <td className="py-3 px-4">
                  <img
                    src={`${import.meta.env.VITE_URL_IMAGE}${
                      project.projectImage
                    }`}
                    alt={project.projectTitle}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectTitle}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectDescription.length > 50 ? (
                    <span>
                      {project.projectDescription.slice(0, 50)}...
                      <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => alert(project.projectDescription)}
                      >
                        {" "}
                        voir plus
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
                      <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => alert(project.projectGoals)}
                      >
                        {" "}
                        voir plus
                      </span>
                    </span>
                  ) : (
                    project.projectGoals
                  )}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    {project.projectTimeline.map((date, index) => (
                      <span key={index}>
                        {new Date(date).toLocaleDateString()}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectAmount}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.socialBonds}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.socialBondsCollect}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectPartners.length > 50 ? (
                    <span>
                      {project.projectPartners.slice(0, 50)}...
                      <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => alert(project.projectPartners)}
                      >
                        {" "}
                        voir plus
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
                      <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => alert(project.projectIndicators)}
                      >
                        {" "}
                        voir plus
                      </span>
                    </span>
                  ) : (
                    project.projectIndicators
                  )}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectProposal}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectBudgetDetails}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.supportingDocuments}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectValidated ? "Yes" : "No"}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {project.projectFinished ? "Yes" : "No"}
                </td>
                <td className="py-3 px-4 flex space-x-2">
                  <button
                    onClick={() => validateProject(project._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Validate
                  </button>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded">
                    Finish
                  </button>
                  <button
                    onClick={() => deleteProject(project._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
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
  )
}

// -------------------------------------------------------------------------------------------------------------------
