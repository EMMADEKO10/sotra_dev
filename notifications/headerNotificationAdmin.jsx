import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AdminNavbar = ({ reload }) => {
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
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


    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">Admin Navbar</div>
                <div className="relative">
                    <button
                        className="relative"
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute top-0 right-0">
                            {notifications.filter(notification => !notification.read).length}
                        </span>
                        Notifications
                    </button>
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-[40%] bg-white rounded-lg shadow-lg overflow-hidden z-20">
                            {notifications.map(notification => (
                                <div key={notification._id} className={`p-4 border-b ${notification.read ? 'bg-gray-100' : 'bg-white'}`}>
                                    <p>{notification.message}</p>
                                    <button onClick={() => handleMarkAsRead(notification._id)} className="text-blue-500">Marquer comme lu</button>
                                    <button onClick={() => handleDelete(notification._id)} className="text-red-500 ml-4">Supprimer</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

AdminNavbar.propTypes = {
    reload: PropTypes.bool.isRequired,
}

export default AdminNavbar;
