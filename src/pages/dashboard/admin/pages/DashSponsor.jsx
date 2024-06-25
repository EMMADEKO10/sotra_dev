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
      title: 'Secteur',
      dataIndex: 'industry',
      key: 'industry',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Budgets',
      dataIndex: 'budget',
      key: 'budget',
    },
    {
      title: 'Nom du représentant',
      dataIndex: 'representativeName',
      key: 'representativeName',
    },
    // {
    //   title: 'Téléphone',
    //   dataIndex: 'phone',
    //   key: 'phone',
    // },
    // {
    //   title: 'Adresse',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
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
      <h1 className="text-3xl font-bold mb-6 text-center">Sponsors</h1>
      <Table
        columns={columns}
        dataSource={sponsors}
        rowKey={(record) => record._id}
        // pagination={{ pageSize: 5 }}
        className="shadow-lg rounded-lg"
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>
              <h5>Informations de l'entreprise</h5>
              
              <strong>Nom de l'entreprise:</strong> {record.companyName}
              <br />
              <strong>Adresse:</strong> {record.address}
              <br />
              <strong>Site web:</strong>{" "}<a href={record.website} target="_blank" rel="noopener noreferrer " className="text-blue-600 underline hover:text-red-500"> {record.website}</a>
              <br />
              <strong>Adresse e-mail:</strong>{" "}<a href={`mailto:${record.email}`} className="text-blue-600 hover:text-blue-800">{record.email}</a>
              <br />
              <strong>Type d'organisation:</strong> {record.industry}
              <br />
              <br />
              <h5>Informations de contact</h5>
              <strong>Nom du représentant : </strong> {record.representativeName}
              <br/>
              <strong>Numéro de téléphone:</strong>{" "}<a href={`tel:${record.phone}`} className="text-blue-600 hover:text-blue-800">{record.phone}</a>

              <br/>
              <strong>Deuxième Numéro de téléphone:</strong> {record.AutherPhone}
              <br />
              <br />
              <h5>Détails spécifiques</h5>
              <strong>Objectifs de sponsoring:</strong> {record.sponsorshipGoals}
              {/* <br/>
              <strong>Budget annuel prévu pour le sponsoring:</strong> {record.geographicAreas} */}
            </p>
          ),
        }}
        pagination={false}
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
