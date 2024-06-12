// import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import AdminNavbar from "../layouts/notifications/DashNotification"

function DashSponsor() {
  const [sponsors, setSponsor] = useState([])
  const [reload, setReload] = useState(false)
  const token = localStorage.getItem("token") // Supposez que vous stockez le token sous le nom 'token'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ApiUrlImage = import.meta.env.VITE_URL_IMAGE
        const apiUrl = import.meta.env.VITE_API_URL
        console.log("Voci l'api des images : ", ApiUrlImage)
        console.log("Voci l'api des EndPoints : ", apiUrl)

        const response = await axios.get(`${apiUrl}/sponsors`)
        console.log("voici la reponse", response.data)
        setSponsor(response.data)
        // Ajoutez ici la logique pour gérer la réponse de votre backend
        if (response.status === 201 || response.status === 200) {
          // Check for successful registration response
          console.log("Connexion réussie ! :")
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

  // ----------------------------------------------------------------------------------------------------------

  const toggleSponsorStatus = async (sponsor) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const endpoint = sponsor.sponsorValidated
        ? `${apiUrl}/desactiverSponsor/${sponsor._id}`
        : `${apiUrl}/activerSponsor/${sponsor._id}`

      const response = await axios.put(
        endpoint,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-CSRF-Token": "your-csrf-token", // Ajouter un token CSRF pour la sécurité si nécessaire
          },
        }
      )
      console.log("Requête réussie:", response.data) // Log la réponse de la requête
      setReload(!reload)
    } catch (error) {
      console.error(
        "Erreur lors de la modification du statut du sponsor:",
        error
      )
    }
  }

  return (
    <div className=" mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-4 font-bold uppercase text-left">Image</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Nom</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Email</th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Téléphone
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                budgets
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Adresse
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Validé
              </th>
              <th className="py-3 px-4 font-bold uppercase text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {sponsors.map((sponsor) => (
              <tr
                key={sponsor._id}
                className="border-b border-gray-200 hover:bg-gray-100 transition duration-200"
              >
                <td className="py-3 px-4">
                  <img
                    src={`${import.meta.env.VITE_URL_IMAGE}${sponsor.logo}`}
                    alt={sponsor.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{sponsor.companyName}</td>
                <td className="py-3 px-4 whitespace-nowrap">{sponsor.email}</td>
                <td className="py-3 px-4 whitespace-nowrap">{sponsor.phone}</td>
                <td className="py-3 px-4 whitespace-nowrap">{sponsor.budget}</td>
                
                <td className="py-3 px-4 whitespace-nowrap">
                  {sponsor.address}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {sponsor.sponsorValidated ? "Oui" : "Non"}
                </td>
                <td className="py-3 px-4 flex space-x-2">
                  <button
                    onClick={() => toggleSponsorStatus(sponsor)}
                    className={`px-2 py-1 rounded ${
                      sponsor.sponsorValidated ? "bg-red-500" : "bg-green-500"
                    } text-white`}
                  >
                    {sponsor.sponsorValidated ? "Désactiver" : "Valider"}
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

export default DashSponsor
