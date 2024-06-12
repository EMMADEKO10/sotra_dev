import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
// import 'antd/dist/antd.css';

const AdminNavbar = ({ reload }) => {
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
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">Admin Navbar</div>
                <div className="relative">
                    <Button type="primary" onClick={showModal}>
                        Notifications
                        <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs ml-2">
                            {notifications.filter(notification => !notification.read).length}
                        </span>
                    </Button>
                    <Modal
                        title="Notifications"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="close" type="primary" onClick={handleOk}>
                                Fermer
                            </Button>,
                        ]}
                    >
                        <div className="max-h-[500px] overflow-y-auto">
                            {notifications.map(notification => (
                                <div key={notification._id} className={`p-4 border-b ${notification.read ? 'bg-gray-100' : 'bg-white'}`}>
                                    <p className="text-sm mb-2">{notification.message}</p>
                                    <div>
                                        <button onClick={() => handleMarkAsRead(notification._id)} className="text-blue-500 mr-4">Marquer comme lu</button>
                                        <button onClick={() => handleDelete(notification._id)} className="text-red-500">Supprimer</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Modal>
                </div>
            </div>
        </nav>
    );
};

AdminNavbar.propTypes = {
    reload: PropTypes.bool.isRequired,
}

export default AdminNavbar;
