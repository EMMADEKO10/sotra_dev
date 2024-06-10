// import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboardProjet() {
    const [projects, setProjects] = useState([]);
    const [reload, setReload] = useState(false);
    const token = localStorage.getItem('token'); // Supposez que vous stockez le token sous le nom 'token'

    // const [newProject, setNewProject] = useState({
    //     projectTitle: '',
    //     projectDescription: '',
    //     projectImage: '',
    //     projectGoals: '',
    //     projectTimeline: [],
    //     projectAmount: 0,
    //     socialBonds: '',
    //     socialBondsCollect: 0,
    //     projectPartners: '',
    //     projectIndicators: '',
    //     projectProposal: '',
    //     projectBudgetDetails: '',
    //     supportingDocuments: '',
    //     projectValidated: false,
    //     projectFinished: false,
    // });

    // useEffect(() => {
    //     fetchProjects();
    // }, []);

    // const fetchProjects = async () => {
    //     try {
    //         const response = await axios.get('/api/projects');
    //         setProjects(response.data);
    //     } catch (error) {
    //         console.error('Error fetching projects:', error);
    //     }
    // };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewProject({ ...newProject, [name]: value });
    // };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const ApiUrlImage = import.meta.env.VITE_URL_IMAGE;
                const apiUrl = import.meta.env.VITE_API_URL;

                console.log("Voci l'api des images : ", ApiUrlImage)
                console.log("Voci l'api des EndPoints : ", apiUrl)

                const response = await axios.get(`${apiUrl}/projects`);
                console.log("voici la reponse", response.data)
                setProjects(response.data)
                // Ajoutez ici la logique pour gérer la réponse de votre backend
                if (response.status === 201 || response.status === 200) { // Check for successful registration response
                    console.log('Connexion réussie ! :')
                    setReload(!reload);

                } else {
                    // Handle unsuccessful registration (e.g., display error message)
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
    }, [], [reload]); // Empty dependency array ensures the effect runs only once

    // const addProject = async () => {
    //     try {
    //         const response = await axios.post('/api/projects', newProject);
    //         setProjects([...projects, response.data]);
    //         setNewProject({
    //             projectTitle: '',
    //             projectDescription: '',
    //             projectImage: '',
    //             projectGoals: '',
    //             projectTimeline: [],
    //             projectAmount: 0,
    //             socialBonds: '',
    //             socialBondsCollect: 0,
    //             projectPartners: '',
    //             projectIndicators: '',
    //             projectProposal: '',
    //             projectBudgetDetails: '',
    //             supportingDocuments: '',
    //             projectValidated: false,
    //             projectFinished: false,
    //         });
    //     } catch (error) {
    //         console.error('Error adding project:', error);
    //     }
    // };

    // const updateProject = async (id, updatedFields) => {
    //     try {
    //         const response = await axios.put(`/api/projects/${id}`, updatedFields);
    //         setProjects(projects.map(project => (project._id === id ? response.data : project)));
    //     } catch (error) {
    //         console.error('Error updating project:', error);
    //     }
    // };

    // const deleteProject = async (id) => {
    //     try {
    //         await axios.delete(`/api/projects/${id}`);
    //         setProjects(projects.filter(project => project._id !== id));
    //     } catch (error) {
    //         console.error('Error deleting project:', error);
    //     }
    // };

    // const validateProject = (id) => {
    //     updateProject(id, { projectValidated: true });
    // };

    // const finishProject = (id) => {
    //     updateProject(id, { projectFinished: true });
    // };


    // useEffect(() => {
    //     fetchValidatedProjects();
    //     fetchUnvalidatedProjects();
    // }, []);

    // const fetchValidatedProjects = async () => {
    //     try {
    //         const response = await axios.get('/api/projects/validated');
    //         setProjects(response.data);
    //     } catch (error) {
    //         console.error('Error fetching validated projects:', error);
    //     }
    // };

    // const fetchUnvalidatedProjects = async () => {
    //     try {
    //         const response = await axios.get('/api/projects/unvalidated');
    //         setUnvalidatedProjects(response.data);
    //     } catch (error) {
    //         console.error('Error fetching unvalidated projects:', error);
    //     }
    // };

    const validateProject = async (projectId) => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;

            await axios.put(`${apiUrl}/pjts/validate/${projectId}`,{}, { // Le corps de la requête doit être un objet vide si non nécessaire
                headers: {
                    // 'Content-Type': 'application/json', // Utilisez application/json
                    'Authorization': `Bearer ${token}`,
                    'X-CSRF-Token': 'your-csrf-token', // Ajouter un token CSRF pour la sécurité si nécessaire
                    'Content-Type': 'multipart/form-data',


                },
            });

        } catch (error) {
            console.error('Error validating project:', error);
        }
    };

    const deleteProject = async (projectId) => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            await axios.delete(`${apiUrl}/projects/${projectId}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // 'Authorization': `Bearer ${token}`,
                    'X-CSRF-Token': 'your-csrf-token', // Ajouter un token CSRF pour la sécurité si nécessaire
                },
            });
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                            <th className="py-3 px-4 font-bold uppercase text-left">Image</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Title</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Description</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Goals</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Timeline</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Amount</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Social Bonds</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Collected Bonds</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Partners</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Indicators</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Proposal</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Budget Details</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Documents</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Validated</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Finished</th>
                            <th className="py-3 px-4 font-bold uppercase text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {projects.map(project => (
                            <tr key={project._id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">

                                <td className="py-3 px-4">
                                    <img src={`${import.meta.env.VITE_URL_IMAGE}${project.projectImage
                                        }`} alt={project.projectTitle} className="h-16 w-16 object-cover rounded" />
                                </td>
                                <td className="py-3 px-4 whitespace-nowrap">{project.projectTitle}</td>
                                <td className="py-3 px-4 whitespace-nowrap">
                                    {project.projectDescription.length > 50 ? (
                                        <span>
                                            {project.projectDescription.slice(0, 50)}...
                                            <span className="text-blue-500 cursor-pointer" onClick={() => alert(project.projectDescription)}> voir plus</span>
                                        </span>
                                    ) : (
                                        project.projectDescription
                                    )}
                                </td>

                                <td className="py-3 px-4 whitespace-nowrap">
                                    {project.projectGoals.length > 50 ? (
                                        <span>
                                            {project.projectGoals.slice(0, 50)}...
                                            <span className="text-blue-500 cursor-pointer" onClick={() => alert(project.projectGoals)}> voir plus</span>
                                        </span>
                                    ) : (
                                        project.projectGoals
                                    )}
                                </td>
                                <td className="py-3 px-4 whitespace-nowrap">
                                    <div className="flex flex-col">
                                        {project.projectTimeline.map((date, index) => (
                                            <span key={index}>{new Date(date).toLocaleDateString()}</span>
                                        ))}
                                    </div>
                                </td>
                                <td className="py-3 px-4 whitespace-nowrap">{project.projectAmount}</td>
                                <td className="py-3 px-4 whitespace-nowrap">{project.socialBonds}</td>
                                <td className="py-3 px-4 whitespace-nowrap">{project.socialBondsCollect}</td>
                                <td className="py-3 px-4 whitespace-nowrap">
                                    {project.projectPartners.length > 50 ? (
                                        <span>
                                            {project.projectPartners.slice(0, 50)}...
                                            <span className="text-blue-500 cursor-pointer" onClick={() => alert(project.projectPartners)}> voir plus</span>
                                        </span>
                                    ) : (
                                        project.projectPartners
                                    )}
                                </td>
                                <td className="py-3 px-4 whitespace-nowrap">
                                    {project.projectIndicators.length > 50 ? (
                                        <span>
                                            {project.projectIndicators.slice(0, 50)}...
                                            <span className="text-blue-500 cursor-pointer" onClick={() => alert(project.projectIndicators)}> voir plus</span>
                                        </span>
                                    ) : (
                                        project.projectIndicators
                                    )}
                                </td>
                                <td className="py-3 px-4 whitespace-nowrap">{project.projectProposal}</td>
                                <td className="py-3 px-4 whitespace-nowrap">{project.projectBudgetDetails}</td>
                                <td className="py-3 px-4 whitespace-nowrap">{project.supportingDocuments}</td>
                                <td className="py-3 px-4 whitespace-nowrap">{project.projectValidated ? 'Yes' : 'No'}</td>
                                <td className="py-3 px-4 whitespace-nowrap">{project.projectFinished ? 'Yes' : 'No'}</td>
                                <td className="py-3 px-4 flex space-x-2">
                                    <button onClick={() => validateProject(project._id)} className="bg-green-500 text-white px-2 py-1 rounded">Validate</button>
                                    <button className="bg-yellow-500 text-white px-2 py-1 rounded">Finish</button>
                                    <button onClick={() => deleteProject(project._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
}

















// <div className="mb-6">
//     <h2 className="text-xl font-bold mb-2">Add New Project</h2>
//     <div className="grid grid-cols-1 gap-4">
//         <input
//             type="text"
//             name="projectTitle"
//             value={newProject.projectTitle}
//             onChange={handleInputChange}
//             placeholder="Project Title"
//             className="border rounded p-2"
//         />
//         <textarea
//             name="projectDescription"
//             value={newProject.projectDescription}
//             onChange={handleInputChange}
//             placeholder="Project Description"
//             className="border rounded p-2"
//         />
//         <input
//             type="text"
//             name="projectImage"
//             value={newProject.projectImage}
//             onChange={handleInputChange}
//             placeholder="Project Image"
//             className="border rounded p-2"
//         />
//         <input
//             type="text"
//             name="projectGoals"
//             value={newProject.projectGoals}
//             onChange={handleInputChange}
//             placeholder="Project Goals"
//             className="border rounded p-2"
//         />
//         <input
//             type="date"
//             name="projectTimelineStart"
//             onChange={(e) => setNewProject({ ...newProject, projectTimeline: [e.target.value, newProject.projectTimeline[1]] })}
//             placeholder="Project Start Date"
//             className="border rounded p-2"
//         />
//         <input
//             type="date"
//             name="projectTimelineEnd"
//             onChange={(e) => setNewProject({ ...newProject, projectTimeline: [newProject.projectTimeline[0], e.target.value] })}
//             placeholder="Project End Date"
//             className="border rounded p-2"
//         />
//         <input
//             type="number"
//             name="projectAmount"
//             value={newProject.projectAmount}
//             onChange={handleInputChange}
//             placeholder="Project Amount"
//             className="border rounded p-2"
//         />
//         <input
//             type="text"
//             name="socialBonds"
//             value={newProject.socialBonds}
//             onChange={handleInputChange}
//             placeholder="Social Bonds"
//             className="border rounded p-2"
//         />
//         <input
//             type="number"
//             name="socialBondsCollect"
//             value={newProject.socialBondsCollect}
//             onChange={handleInputChange}
//             placeholder="Social Bonds Collect"
//             className="border rounded p-2"
//         />
//         <input
//             type="text"
//             name="projectPartners"
//             value={newProject.projectPartners}
//             onChange={handleInputChange}
//             placeholder="Project Partners"
//             className="border rounded p-2"
//         />
//         <input
//             type="text"
//             name="projectIndicators"
//             value={newProject.projectIndicators}
//             onChange={handleInputChange}
//             placeholder="Project Indicators"
//             className="border rounded p-2"
//         />
//         <input
//             type="text"
//             name="projectProposal"
//             value={newProject.projectProposal}
//             onChange={handleInputChange}
//             placeholder="Project Proposal"
//             className="border rounded p-2"
//         />
//         <input
//             type="text"
//             name="projectBudgetDetails"
//             value={newProject.projectBudgetDetails}
//             onChange={handleInputChange}
//             placeholder="Project Budget Details"
//             className="border rounded p-2"
//         />
//         <input
//             type="text"
//             name="supportingDocuments"
//             value={newProject.supportingDocuments}
//             onChange={handleInputChange}
//             placeholder="Supporting Documents"
//             className="border rounded p-2"
//         />
//         <button onClick={addProject} className="bg-blue-500 text-white p-2 rounded">Add Project</button>
//     </div>
// </div>