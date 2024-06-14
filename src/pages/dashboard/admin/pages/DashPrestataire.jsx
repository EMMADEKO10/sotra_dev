import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Space, Button, message, Dropdown, Badge } from "antd";
import { DownOutlined } from "@ant-design/icons";
import AdminNavbar from "../layouts/notifications/DashNotification"; // Si nécessaire pour votre application

export default function DashPrestataire() {
  const [prestataires, setPrestataire] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/prestataire`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPrestataire(response.data);
      } catch (error) {
        message.error("Erreur lors du chargement des prestataires");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const togglePrestataireStatus = async (prestataire) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const endpoint = prestataire.prestaireValidated
        ? `${apiUrl}/desactiverPrestataire/${prestataire._id}`
        : `${apiUrl}/prestataireValidated/${prestataire._id}`;

      await axios.put(
        endpoint,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPrestataire((prevPrestataires) =>
        prevPrestataires.map((p) =>
          p._id === prestataire._id
            ? { ...p, prestaireValidated: !p.prestaireValidated }
            : p
        )
      );
      message.success("Statut du prestataire mis à jour");
    } catch (error) {
      message.error("Erreur lors de la mise à jour du statut du prestataire");
    }
  };

 
  const columns = [
    // {
    //   title: "Image",
    //   dataIndex: "image",
    //   key: "image",
    //   render: (image) => (
    //     <img
    //       src={${import.meta.env.VITE_URL_IMAGE}${image}}
    //       alt="Prestataire"
    //       className="h-16 w-16 object-cover rounded"
    //     />
    //   ),
    // },
    {
      title: "Nom de l'organisation",
      dataIndex: "organizationName",
      key: "organizationName",
    },
    {
      title: "Type d'organisation",
      dataIndex: "specificOrganizationType",
      key: "specificOrganizationType",
    },
    {
      title: "Zones d'intervention",
      dataIndex: "geographicAreas",
      key: "geographicAreas",
      },
    {
      title: "Adresse e-mail",
      dataIndex: "email",
      key: "email",
    },
        {
          title: "Nom du représentant",
          dataIndex: "representativeName",
          key: "representativeName",
        },
        {
          title: "Numéro de téléphone",
          dataIndex: "phone",
          key: "phone",
        },
    {
      title: "Services",
      dataIndex: "services",
      key: "services",
      render: (services) => (
        services.length > 50
          ? <span>{services.slice(0, 50)}... <a onClick={() => message.info(services)}>voir plus</a></span>
          : services
      ),
    },
    {
      title: "Validé",
      dataIndex: "prestaireValidated",
      key: "prestaireValidated",
      render: (valid) => (
        <Badge
          status={valid ? "success" : "error"}
          text={valid ? "Oui" : "Non"}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, prestataire) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => togglePrestataireStatus(prestataire)}
          >
            {prestataire.prestaireValidated ? "Désactiver" : "Valider"}
          </Button>
          {/* Vous pouvez ajouter plus d'actions ici si nécessaire */}
        </Space>
      ),
    },
  ];

  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Prestataires</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <Table
          columns={columns}
          dataSource={prestataires}
          rowKey={(record) => record._id}
          // loading={loading}
          // pagination={{ pageSize: 10 }}
          expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>
              <h5>Informations de l'organisation</h5>
              
              <strong>Nom de l'organisation:</strong> {record.organizationName}
              <br />
              <strong>Adresse:</strong> {record.email}
              <br />
              <strong>Site web:</strong>{" "}<a href={record.website} target="_blank" rel="noopener noreferrer " className="text-blue-600 underline hover:text-red-500"> {record.website}</a>
              <br />
              <strong>Adresse e-mail:</strong>{" "}<a href={`mailto:${record.email}`} className="text-blue-600 hover:text-blue-800">{record.email}</a>
              <br />
              <strong>Type d'organisation:</strong> {record.specificOrganizationType}
              <br />
              <br />
              <h5>Informations de contact</h5>
              <strong>Nom du représentant:</strong> {record.representativeName}
              <br/>
              <strong>Numéro de téléphone:</strong>{" "}<a href={`tel:${record.phone}`} className="text-blue-600 hover:text-blue-800">{record.phone}</a>
              <br/>
              <strong>Deuxième Numéro de téléphone:</strong> {record.phoneSecond}
              <br />
              <br />
              <h5>Détails spécifiques</h5>
              <strong>Description des services offerts:</strong> {record.services}
              <br/>
              <strong>Zones géographiques d'intervention:</strong> {record.geographicAreas}
              <br/>
              <strong>Projets en cours ou précédents:</strong> {record.projects}
            </p>
          ),
        }}
        pagination={false}
        />
      </div>
    </div>
  );
}