import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../../notifications/headerNotificationAdmin'


export default function AdminDashboard() {

    const [prestataires, setPrestataire] = useState([]);
    const [reload, setReload] = useState(false);
    const token = localStorage.getItem('token'); // Supposez que vous stockez le token sous le nom 'token'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ApiUrlImage = import.meta.env.VITE_URL_IMAGE;
                const apiUrl = import.meta.env.VITE_API_URL;
                console.log("Voci l'api des images : ", ApiUrlImage)
                console.log("Voci l'api des EndPoints : ", apiUrl)

                const response = await axios.get(`${apiUrl}/prestataire`);
                console.log("voici la reponse", response.data)
                setPrestataire(response.data)
                // Ajoutez ici la logique pour gérer la réponse de votre backend
                if (response.status === 201 || response.status === 200) { // Check for successful registration response
                    console.log('Connexion réussie ! :')
                    // setReload(!reload);

                }

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
    }, [reload]); // Empty dependency array ensures the effect runs only once



    // ----------------------------------------------------------------------------------------------------------


    const togglePrestataireStatus = async (prestataire) => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const endpoint = prestataire.prestaireValidated ? `${apiUrl}/desactiverPrestataire/${prestataire._id}` : `${apiUrl}/prestataireValidated/${prestataire._id}`;

            const response = await axios.put(endpoint, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'X-CSRF-Token': 'your-csrf-token', // Ajouter un token CSRF pour la sécurité si nécessaire
                },
            });
            console.log('Requête réussie:', response.data); // Log la réponse de la requête
            setReload(!reload);
        } catch (error) {
            console.error('Erreur lors de la modification du statut du prestataire:', error);
        }
    };

    return (
        <div className=" mx-auto p-4">
            <AdminNavbar />
            <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                            <th className="py-3 px-4 font-bold uppercase text-left">Image</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Nom</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Email</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Téléphone</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Adresse</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Services</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Validé</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {prestataires.map(prestataire => (
                            <tr key={prestataire._id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
                                <td className="py-3 px-4">
                                    <img src={`${import.meta.env.VITE_URL_IMAGE}${prestataire.image}`} alt={prestataire.name} className="h-16 w-16 object-cover rounded" />
                                </td>
                                <td className="py-3 px-4 whitespace-nowrap">{prestataire.name}</td>
                                <td className="py-3 px-4 whitespace-nowrap">{prestataire.email}</td>
                                <td className="py-3 px-4 whitespace-nowrap">{prestataire.phone}</td>
                                <td className="py-3 px-4 whitespace-nowrap">{prestataire.address}</td>
                                <td className="py-3 px-4 whitespace-nowrap">
                                    {/* {prestataire.services.length > 50 ? (
                                        <span>
                                            {prestataire.services.slice(0, 50)}...
                                            <span className="text-blue-500 cursor-pointer" onClick={() => alert(prestataire.services)}> voir plus</span>
                                        </span>
                                    ) : (
                                            prestataire.services
                                    )} */}
                                </td>
                                <td className="py-3 px-4 whitespace-nowrap">{prestataire.prestaireValidated ? 'Oui' : 'Non'}</td>
                                <td className="py-3 px-4 flex space-x-2">
                                    {/* <button onClick={() => } className="bg-green-500 text-white px-2 py-1 rounded">Valider</button> */}
                                    <button onClick={() => togglePrestataireStatus(prestataire)} className="bg-green-500 text-white px-2 py-1 rounded">Validate</button>

                                    {/* <button onClick={() => deleteProvider(prestataire._id)} className="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}













