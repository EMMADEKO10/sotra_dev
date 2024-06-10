// import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';
import axios from "axios"



const SponsorDashboard = () => {

    const [projects, setProjects] = useState([]);
    const { id } = useParams();
    const [sponsorName, setSponsorName] = useState('');
    const [sponsorSocialBond, setSponsorSocialBond] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const ApiUrlImage = import.meta.env.VITE_URL_IMAGE;
                console.log("Voci l'api des images : ", ApiUrlImage)
                console.log("Voci l'api des EndPoints : ", apiUrl)
                //   http://localhost:3700/api/sponsors/pjtmontants/6661ec3d6149744df1e68f30
                const response = await axios.get(`${apiUrl}/sponsors/pjtmontants/${id}`);
                console.log("voici la reponse", response.data)
                setProjects(response.data)
                // Ajoutez ici la logique pour gérer la réponse de votre backend
                if (response.status === 201 || response.status === 200) { // Check for successful registration response
                    console.log('Connexion réussie ! :')
                    // ---------------------------------------------------------------------------------------

                    // -----------------------------------------------------------------------------------

                } else {
                    // Handle unsuccessful registration (e.g., display error message)
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
    }, [id]); // Empty dependency array ensures the effect runs only once

    useEffect(() => {
        if (projects && projects.length > 0) {
            setSponsorName(projects[0].sponsorName);
            setSponsorSocialBond(projects[0].sponsorSocialBond);
        }
    }, [projects]);


    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                {/* <h1 className="text-3xl font-bold mb-6">Dashboard</h1> */}

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">{sponsorName}</h2>
                    <p className="text-lg">Sponsor Social Bond: {sponsorSocialBond}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <img src={`${import.meta.env.VITE_URL_IMAGE}${project.projectImage}`} alt={project.projectName} className="w-full h-48 object-cover mb-4 rounded-lg" />
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
        </div >
    );
};

export default SponsorDashboard;


