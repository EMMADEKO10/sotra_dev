import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Input, Table, Space, Dropdown, Menu } from "antd";
import { DownOutlined } from '@ant-design/icons';

export default function DashSponsor() {
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
        const response = await axios.get(`${apiUrl}/sponsors`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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

  const columns = [
    {
      title: 'Image',
      dataIndex: 'logo',
      key: 'logo',
      render: (logo) => <img src={`${import.meta.env.VITE_URL_IMAGE}${logo}`} alt="logo" className="h-16 w-16 object-cover rounded" />,
    },
    {
      title: 'Nom',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Téléphone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Budgets',
      dataIndex: 'budget',
      key: 'budget',
    },
    {
      title: 'Adresse',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Validé',
      dataIndex: 'sponsorValidated',
      key: 'sponsorValidated',
      render: (sponsorValidated) => sponsorValidated ? "Oui" : "Non",
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, sponsor) => (
        <Space size="middle">
          <Button
            type="primary"
            danger={sponsor.sponsorValidated}
            onClick={() => toggleSponsorStatus(sponsor)}
          >
            {sponsor.sponsorValidated ? "Désactiver" : "Valider"}
          </Button>
          <Button
            type="primary"
            onClick={() => showModal(sponsor)}
          >
            Update Budget
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <Table
        columns={columns}
        dataSource={sponsors}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
        className="shadow-lg rounded-lg"
      />
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
        />
      </Modal>
    </div>
  );
}
