import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import { BellOutlined, CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';

const DashNotification = ({ reload }) => {
    const [notifications, setNotifications] = useState([]);
    const [currentNotifications, setCurrentNotifications] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentType, setCurrentType] = useState(null);  // Add state to keep track of current notification type

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = import.meta.env.VITE_API_URL;
            try {
                const response = await axios.get(`${apiUrl}/notif`);
                setNotifications(response.data);
            } catch (error) {
                console.error('Erreur lors de la requête:', error.message);
            }
        };
        fetchData();
    }, [reload]);

    const creditNotifications = notifications.filter(notification => notification.isCredit);
    const nonCreditNotifications = notifications.filter(notification => !notification.isCredit);

    const unreadCreditCount = creditNotifications.filter(notification => !notification.read).length;
    const unreadNonCreditCount = nonCreditNotifications.filter(notification => !notification.read).length;

    const handleMarkAsRead = async (id) => {
        const apiUrl = import.meta.env.VITE_API_URL;
        try {
            await axios.patch(`${apiUrl}/notif/${id}`);
            const updatedNotifications = notifications.map(notification =>
                notification._id === id ? { ...notification, read: true } : notification
            );
            setNotifications(updatedNotifications);
            updateCurrentNotifications(currentType, updatedNotifications);
        } catch (error) {
            console.error('Erreur lors de la modification du statut du prestataire:', error);
        }
    };

    const handleDelete = async (id) => {
        const apiUrl = import.meta.env.VITE_API_URL;
        try {
            await axios.delete(`${apiUrl}/notif/${id}`);
            const updatedNotifications = notifications.filter(notification => notification._id !== id);
            setNotifications(updatedNotifications);
            updateCurrentNotifications(currentType, updatedNotifications);
        } catch (error) {
            console.error('Erreur lors de la modification du statut du prestataire:', error);
        }
    };

    const updateCurrentNotifications = (type, notifications) => {
        if (type === 'credit') {
            setCurrentNotifications(notifications.filter(notification => notification.isCredit));
        } else {
            setCurrentNotifications(notifications.filter(notification => !notification.isCredit));
        }
    };

    const showModal = (type) => {
        setCurrentType(type);
        if (type === 'credit') {
            setCurrentNotifications(creditNotifications);
        } else {
            setCurrentNotifications(nonCreditNotifications);
        }
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="relative">
            {/* Bouton pour les notifications non liées aux crédits */}
            <Button type="" onClick={() => showModal('non-credit')} className="bg-[#EBEBEB] relative">
                <span className="mr-2">
                    <BellOutlined style={{ fontSize: "1.2rem", color: "black" }} />
                </span>
                {unreadNonCreditCount > 0 && (
                    <span className={`absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs ml-2 ${unreadNonCreditCount > 0 ? "animate-pulse" : ""}`}>
                        {unreadNonCreditCount}
                    </span>
                )}
            </Button>

            {/* Bouton pour les notifications de crédits */}
            <Button type="" onClick={() => showModal('credit')} className="bg-[#EBEBEB] relative">
                <span className="mr-2">
                    <BellOutlined style={{ fontSize: "1.2rem", color: "black" }} />
                </span>
                {unreadCreditCount > 0 && (
                    <span className={`absolute top-0 right-0 bg-green-500 text-white rounded-full px-2 py-1 text-xs ml-2 ${unreadCreditCount > 0 ? "animate-pulse" : ""}`}>
                        {unreadCreditCount}
                    </span>
                )}
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
                    {currentNotifications.length > 0 ? (
                        currentNotifications.map((notification) => (
                            <div key={notification._id} className={`p-4 mb-2 rounded-lg border ${notification.read ? "bg-white" : "bg-[#EBEBEB]"}`}>
                                <p className="text-sm mb-2">{notification.message}</p>
                                <div className="flex justify-end">
                                    <Button size="small" type="link" onClick={() => handleMarkAsRead(notification._id)} className="text-blue-500 mr-2">
                                        <span className="flex items-center">
                                            <CheckCircleOutlined className="mr-1" />
                                            Marquer comme lu
                                        </span>
                                    </Button>
                                    <Button size="small" type="link" onClick={() => handleDelete(notification._id)} className="text-red-500">
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
    );
};

DashNotification.propTypes = {
    reload: PropTypes.bool.isRequired,
};

export default DashNotification;
