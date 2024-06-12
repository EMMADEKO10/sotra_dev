import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

const PrestataireDashboard = () => {
    const [projects, setProjects] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await axios.get(`${apiUrl}/validProjectPrestataire/${id}`);
                if (response.status === 201 || response.status === 200) {
                    setProjects(response.data.projects);
                } else {
                    console.error('Failed to fetch projects');
                }
            } catch (error) {
                if (error.response) {
                    console.error('Erreur de réponse du serveur:', error.response);
                } else {
                    console.error('Erreur lors de la requête:', error.message);
                }
            }
        };
        fetchData();
    }, [id]);

    if (!projects.length) {
        return (
            <div>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                    <p className="text-center text-gray-600">Loading projects...</p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <img
                                src={`${import.meta.env.VITE_URL_IMAGE}${project.projectImage}`}
                                alt={project.projectName}
                                className="w-full h-48 object-cover mb-4 rounded-lg"
                            />
                            <h2 className="text-xl font-semibold mb-2">{project.projectName}</h2>
                            <p className="text-gray-600 mb-4">{project.projectDescription}</p>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">Montant total investi</p>
                                    <p className="text-lg font-bold">{project.totalMontantReduit}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Montant collecté</p>
                                    <p className="text-lg font-bold">{project.socialBondsCollect} / {project.socialBonds}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrestataireDashboard;
