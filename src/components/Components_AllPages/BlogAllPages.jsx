import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Blog() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    // const navigate = useNavigate();

    useEffect(() => {
        if (isModalOpen) {
            // Désactiver le défilement
            document.body.style.overflow = 'hidden';
        } else {
            // Réactiver le défilement
            document.body.style.overflow = 'auto';
        }

        // Nettoyage à la fermeture du composant
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    const openModal = (project) => {
        setCurrentProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProject(null);
    };

    const handleFinanceClick = () => {
        closeModal();
        // navigate(`/project/${currentProject.id}`);
    };

    const projects = [
        {
            id: 1,
            title: 'Lasting out end article express fortune demands own charmed',
            imgSrc: 'assets/img/media/Photo _ Neil Palmer (CIAT) Flickr CC.jpeg',
            tags: ['Poor', 'Health'],
            date: '05 Dec, 2020',
            author: 'Park Lee'
        },
        {
            id: 2,
            title: 'Surprise steepest recurred landlord mr wandered',
            imgSrc: 'assets/img/media/medium-shot-woman-posing-outdoors.jpg',
            tags: ['Education', 'Donate'],
            date: '26 Sep, 2020',
            author: 'Park Lee'
        },
        // Ajoutez plus de projets ici si nécessaire
    ];

    return (
        <div className="container">
            <div className="blog-items content-less">
                <div className="blog-content">
                    <div className="blog-item-box">
                        <div className="row">
                            {projects.map((project) => (
                                <div key={project.id} className="col-lg-4 col-md-6 single-item">
                                    <div className="item wow fadeInUp" data-wow-delay="500ms">
                                        <div className="thumb">
                                            <a href="#" onClick={() => openModal(project)}>
                                                <img src={project.imgSrc} alt="Thumb" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <div className="tags">
                                                {project.tags.map(tag => (
                                                    <a key={tag} href="#">{tag}</a>
                                                ))}
                                            </div>
                                            <div className="meta">
                                                <ul>
                                                    <li><i className="fas fa-calendar-alt"></i> {project.date}</li>
                                                    <li>By <a href="#">{project.author}</a></li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <a href="#" onClick={() => openModal(project)}>{project.title}</a>
                                            </h4>
                                            <div className='flex flex-col'>
                                                <a className="btn circle btn-theme border btn-sm" href="#" onClick={() => openModal(project)}>Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && currentProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-auto sm:w-3/4 md:w-1/2 max-h-screen overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">{currentProject.title}</h2>
                        <img src={currentProject.imgSrc} alt="Project" className="w-full mb-4" />
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                    Montant à payer
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="amount"
                                    type="number"
                                    placeholder="Entrez le montant"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <NavLink to={`/project/${currentProject.id}`}><button onClick={handleFinanceClick}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Financer
                                </button></NavLink>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={closeModal}
                                >
                                    Fermer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
