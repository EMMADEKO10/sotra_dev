import React from "react";
import { Carousel, Button } from 'antd';
import ProjectsForm from "../pages/Profile/Projects/ProjectsForm";
import 'antd/dist/reset.css'; // Import Ant Design styles
import 'animate.css'; // Import Animate.css
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

export default function Banner() {
    const [showProjectForm, setShowProjectForm] = React.useState(false);

    return (
        <>
            <div className="relative bg-gray-900 text-white overflow-hidden">
                <Carousel autoplay dotPosition="bottom" className="h-screen">
                    {/* Slide 1 */}
                    <div className="relative h-screen">
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 z-10"></div>
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img11.jpg')" }}></div>
                        <div className="container mx-auto h-full flex items-center justify-center relative z-20 px-6">
                            <div className="text-center max-w-3xl p-6 bg-black bg-opacity-60 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1">
                                <h4 className="text-2xl md:text-3xl font-semibold animate__animated animate__slideInDown text-white opacity-60">
                                    Votre innovation mérite d'être vue
                                </h4>
                                <h2 className="text-4xl md:text-6xl font-extrabold my-4 animate__animated animate__slideInRight text-white opacity-80">
                                    Transformez vos idées<strong> en réalisations concrètes</strong>
                                </h2>
                                <Button type="primary" shape="round" size="large" className="animate__animated animate__fadeInUp mt-6 shadow-lg hover:bg-[#1e8159] hover:shadow-2xl transition duration-300 ease-in-out">
                                    Démarrer un projet
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Slide 2 */}
                    <div className="relative h-screen">
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 z-10"></div>
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero section/Sans titre-1.jpg')" }}></div>
                        <div className="container mx-auto h-full flex items-center justify-center relative z-20 px-6">
                            <div className="text-center max-w-3xl p-6 bg-black bg-opacity-60 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1">
                                <h4 className="text-2xl md:text-3xl font-semibold animate__animated animate__slideInDown text-white opacity-60">
                                    Investissez dans l'avenir
                                </h4>
                                <h2 className="text-4xl md:text-6xl font-extrabold my-4 animate__animated animate__slideInRight text-white opacity-80">
                                    Transformez votre portefeuille avec<strong> des investissements durables</strong>
                                </h2>
                                <Button type="primary" shape="round" size="large" className="animate__animated animate__fadeInUp mt-6 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                                    Démarrer un projet
                                </Button>
                            </div>
                        </div>
                    </div>
                </Carousel>
                
                {showProjectForm && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 transition duration-300 ease-in-out">
                        <div className="bg-white p-8 rounded-lg shadow-lg relative">
                            <button onClick={() => setShowProjectForm(false)} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 transition duration-200 ease-in-out">✖</button>
                            <ProjectsForm showProjectForm={showProjectForm} setShowProjectForm={setShowProjectForm} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
