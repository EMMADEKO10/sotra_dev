import React from 'react';
import { Carousel } from 'antd';

const Temoignages = () => {
    const donneesTemoignages = [
        {
            nom: 'Jeanne Dupont',
            role: 'Partenaire stratégique',
            contenu: "En tant que partenaire stratégique de la RSE Market Place, nous avons été impressionnés par l'engagement envers l'innovation sociale et la transparence. La plateforme a facilité des collaborations fructueuses et des investissements à fort impact pour notre organisation."
        },
        {
            nom: 'Martin Lambert',
            role: 'Directeur financier',
            contenu: "La RSE Market Place nous a permis de diversifier nos investissements socialement responsables de manière efficace. Les Social Bonds ont été un outil précieux pour soutenir des projets prometteurs, tout en respectant des standards élevés de qualité et d'impact."
        },
        {
            nom: 'Sophie Renaud',
            role: 'Volontaire engagée',
            contenu: "Mon expérience avec Sotradons a été enrichissante. J'ai eu l'opportunité de contribuer à des initiatives qui font une réelle différence dans nos communautés. La transparence et l'intégrité sont au cœur de chaque projet soutenu par la RSE Market Place."
        }
    ];

    return (
        <div className="testimonials-area bg-gray p-8 md:p-16">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h5 className="text-lg text-gray-600">Témoignages</h5>
                    <h2 className="text-3xl md:text-4xl font-bold">Ce que les gens disent à propos de la RSE Market Place</h2>
                    <div className="heading-divider h-1 bg-blue-#3bcf93 mx-auto my-4"></div>
                </div>
                <div className="relative">
                    <Carousel className="testimonial-items testimonial-carousel owl-carousel owl-theme animate__animated animate__fadeIn">
                        {donneesTemoignages.map((temoignage, index) => (
                            <div key={index} className="item p-8 md:p-12">
                                <div className="info bg-white p-6 rounded-lg shadow-lg">
                                    <div className="top-info flex items-center mb-6">
                                        <i className="flaticon-left-quote-1 text-4xl text-gray-500"></i>
                                        <div className="provider ml-4">
                                            <h4 className="text-lg font-semibold">{temoignage.nom}</h4>
                                            <span className="text-sm text-gray-500">{temoignage.role}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">{temoignage.contenu}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Temoignages;
