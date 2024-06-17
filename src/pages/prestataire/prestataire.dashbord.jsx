import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';
import { Skeleton } from 'antd';

const PrestataireDashboard = () => {
    const [projects, setProjects] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await axios.get(`${apiUrl}/validProjectPrestataire/${id}`);
                if (response.status === 201 || response.status === 200) {
                    setProjects(response.data.projects);
                    setLoading(false);
                } else {
                    console.error('Failed to fetch projects');
                }
            } catch (error) {
                if (error.response) {
                    console.error('Erreur de réponse du serveur:', error.response);
                } else {
                    console.error('Erreur lors de la requête:', error.message);
                }
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                    <Skeleton active />
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
                    {projects.map((project, index) => {
                        const projectProgress = (project.socialBondsCollect / project.socialBonds) * 100;
                        return (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                                <NavLink to={`/oneprojet/${project._id}`}>
                                    <div
                                        className={`absolute top-2 right-2 h-4 w-4 rounded-full ${project.projectValidated ? 'bg-green-500' : 'bg-red-500'}`}
                                        title={project.projectValidated ? 'Validé' : 'Non Validé'}
                                    ></div>
                                    <img
                                        src={`${import.meta.env.VITE_URL_IMAGE}${project.projectImage}`}
                                        alt={project.projectName}
                                        className="w-full h-48 object-cover mb-4 rounded-lg"
                                    />
                                    <h2 className="text-xl font-semibold mb-2">{project.projectName}</h2>
                                    <p className="text-gray-600 mb-4">{project.projectDescription}</p>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-gray-500">Évolution du projet</p>
                                            {project.projectValidated ? (
                                                <p className="text-lg font-bold">{projectProgress.toFixed(2)}%</p>
                                            ) : (
                                                <p className="text-lg font-bold text-red-500">En Attente...</p>
                                            )}
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500">Montant collecté</p>
                                            <p className="text-lg font-bold">
                                                {project.socialBondsCollect} sur {project.socialBonds}
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrestataireDashboard;
