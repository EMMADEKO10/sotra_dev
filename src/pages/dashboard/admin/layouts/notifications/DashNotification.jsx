import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
// import 'antd/dist/antd.css';
import { BellOutlined, CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';

const DashNotification = ({ reload }) => {
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            // Récupérer les notifications depuis le backend
            const apiUrl = import.meta.env.VITE_API_URL;
            try {
                const response = await axios.get(`${apiUrl}/notif`)

                setNotifications(response.data);
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
    },[reload]);

    const handleMarkAsRead = async (id) => {
        const apiUrl = import.meta.env.VITE_API_URL;

        try {
            const response = await axios.patch(`${apiUrl}/notif/${id}`)

            setNotifications(notifications.map(notification =>
                notification._id === id ? { ...notification, read: true } : notification
            ));
            // setReload(!reload);

        } catch (error) {
            console.error('Erreur lors de la modification du statut du prestataire:', error);
        }
    };

    const handleDelete = async (id) => {
        const apiUrl = import.meta.env.VITE_API_URL;

        try {
            const response = await axios.delete(`${apiUrl}/notif/${id}`)
            setNotifications(notifications.filter(notification => notification._id !== id));
        } catch (error) {
            console.error('Erreur lors de la modification du statut du prestataire:', error);
        }
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };



    return (
      <div className="relative">
        <Button
          type=""
          onClick={showModal}
          className=" bg-[#EBEBEB]"
        >
          <span className="mr-2">
            <BellOutlined style={{ fontSize: "1.2rem", color: "black" }} />
          </span>
          <span
            className={`absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs ml-2 ${
              notifications.some((notification) => !notification.read)
                ? "animate-pulse"
                : ""
            }`}
          >
            {notifications.filter((notification) => !notification.read).length}
          </span>
        </Button>

        <Modal
    title="Notifications"
    visible={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
    footer={[
        <Button
            key="close"
            type="primary"
            onClick={handleOk}
        >
            Fermer
        </Button>,
    ]}
>
    <div className="max-h-[500px] overflow-y-auto">
        {notifications.length > 0 ? (
            notifications.map((notification) => (
                <div
                    key={notification._id}
                    className={`p-4 mb-2 rounded-lg border ${
                        notification.read ? "bg-white" : "bg-[#EBEBEB]"
                    }`}
                >
                    <p className="text-sm mb-2">{notification.message}</p>
                    <div className="flex justify-end">
                        <Button
                            size="small"
                            type="link"
                            onClick={() => handleMarkAsRead(notification._id)}
                            className="text-blue-500 mr-2"
                        >
                            <span className="flex items-center">
                                <CheckCircleOutlined className="mr-1" />
                                Marquer comme lu
                            </span>
                        </Button>
                        <Button
                            size="small"
                            type="link"
                            onClick={() => handleDelete(notification._id)}
                            className="text-red-500"
                        >
                            <span className="flex items-center">
                                <DeleteOutlined className="mr-1" />
                                Supprimer
                            </span>
                        </Button>
                    </div>
                </div>
            ))
        ) : (
            <div className="p-4 text-center text-gray-500">
                Aucune notification pour le moment.
            </div>
        )}
    </div>
</Modal>

      </div>
    )
};

DashNotification.propTypes = {
    reload: PropTypes.bool.isRequired,
}

export default DashNotification;
