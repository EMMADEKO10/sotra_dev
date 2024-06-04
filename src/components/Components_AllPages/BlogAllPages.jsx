import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
// import { ConnectingAirportsOutlined } from '@mui/icons-material';

export default function Blog() {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [currentProject, setCurrentProject] = useState(null);
    const [project, setProjects] = useState([]);


    
    // const openModal = (project) => {
    //     setCurrentProject(project);
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    //     setCurrentProject(null);
    // };

    // const handleFinanceClick = () => {
    //     closeModal();
    //     // navigate(`/project/${currentProject.id}`);
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const ApiUrlImage = import.meta.env.VITE_URL_IMAGE;
                console.log("Voci l'api des images : ", ApiUrlImage)
                console.log("Voci l'api des EndPoints : ", apiUrl)

                const response = await axios.get(`${apiUrl}/projects`);
                console.log("voici la reponse", response.data)
                setProjects(response.data)
                // Ajoutez ici la logique pour gérer la réponse de votre backend
                if (response.status === 201) { // Check for successful registration response
                    console.log('Connexion réussie ! :')

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
    }, []); // Empty dependency array ensures the effect runs only once

    // -----------------------------------------------------------------------------------

    if (!project) {
        return <div>Loading...</div>;
    }


    return (
        <div className="container">
            <div className="blog-items content-less">
                <div className="blog-content">
                    <div className="blog-item-box">
                        <div className="row">
                            {project.map((project) => (
                                <div key={project._id} className="col-lg-4 col-md-6 single-item">
                                    <NavLink to={`/oneprojet/${project._id}`}>
                                        <div>
                                            <div className="item wow fadeInUp" data-wow-delay="500ms">
                                                <div className="thumb">
                                                    <a >
                                                        <img src={`${import.meta.env.VITE_URL_IMAGE}${project.background}`} alt={`${project.background}`} />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <div className="tags">
                                                        {/* {project.tags.map(tag => ( */}
                                                        <a href="#">{project.type_projet}</a>
                                                        {/* ))} */}
                                                    </div>
                                                    <div className="meta">
                                                        <ul>
                                                            <li><i className="fas fa-calendar-alt"></i> {"12/02/2012"}</li>
                                                            <li>By <a href="#">Artur Deko</a></li>
                                                        </ul>
                                                    </div>
                                                    <h4>
                                                        <a>{project.description}</a>
                                                    </h4>
                                                    <div className='flex flex-col'>
                                                        <a className="btn circle btn-theme border btn-sm">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>

      
        </div >
    );
}



















// {
//     isModalOpen && currentProject && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-auto sm:w-3/4 md:w-1/2 max-h-screen overflow-y-auto">
//                 <h2 className="text-2xl font-bold mb-4">{currentProject.title}</h2>
//                 <img src={currentProject.imgSrc} alt="Project" className="w-full mb-4" />
//                 <form>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
//                             Montant à payer
//                         </label>
//                         <input
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             id="amount"
//                             type="number"
//                             placeholder="Entrez le montant"
//                         />
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <NavLink to={`/project/${currentProject.id}`}><button onClick={handleFinanceClick}
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                             type="button"
//                         >
//                             Financer
//                         </button></NavLink>
//                         <button
//                             className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                             type="button"
//                             onClick={closeModal}
//                         >
//                             Fermer
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }











