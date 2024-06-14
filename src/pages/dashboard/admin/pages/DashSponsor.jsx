// import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import { Modal, Button, Input } from "antd";

function DashSponsor() {
  const [sponsors, setSponsors] = useState([]);
  const [reload, setReload] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSponsor, setCurrentSponsor] = useState(null);
  const [budgetValue, setBudgetValue] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/sponsors`);
        setSponsors(response.data);
      } catch (error) {
        if (error.response) {
          console.error("Erreur de réponse du serveur:", error.response);
        } else {
          console.error("Erreur lors de la requête:", error.message);
        }
      }
    };
    fetchData();
  }, [reload]);

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

  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-4 font-bold uppercase text-left">Image</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Nom</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Email</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Téléphone</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Budgets</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Adresse</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Validé</th>
              <th className="py-3 px-4 font-bold uppercase text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {sponsors.map((sponsor) => (
              <tr key={sponsor._id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
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
                <td className="py-3 px-4 whitespace-nowrap">{sponsor.address}</td>
                <td className="py-3 px-4 whitespace-nowrap">{sponsor.sponsorValidated ? "Oui" : "Non"}</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button
                    onClick={() => toggleSponsorStatus(sponsor)}
                    className={`px-2 py-1 rounded ${sponsor.sponsorValidated ? "bg-red-500" : "bg-green-500"} text-white`}
                  >
                    {sponsor.sponsorValidated ? "Désactiver" : "Valider"}
                  </button>
                  <button
                    onClick={() => showModal(sponsor)}
                    className="px-2 py-1 rounded bg-blue-500 text-white"
                  >
                    Update Budget
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        title="Update Budget"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Ajouter le budget pour le sponsor {currentSponsor && currentSponsor.companyName}.
        </p>
        <Input
          type="text"
          value={budgetValue}
          onChange={(e) => setBudgetValue(e.target.value)}
          placeholder="Enter budget value"
        />
      </Modal>
    </div>
  );
}

export default DashSponsor;

