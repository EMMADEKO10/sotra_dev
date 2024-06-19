import React from 'react';
import { Carousel } from 'antd';


const Temoignages = () => {
    const donneesTemoignages = [
        {
            nom: 'Jeckey Pura',
            role: 'Volontaire',
            contenu: 'De nombreux loisirs à distance vous. L\'état total comme le tribunal du mérite verte se dégrade. Le plus raide sexe célibataire peut délicatement vous-même. Comme il instantanément sur la découverte conclut à. Tirage ouvert loin pur miss se sentit dire encore quelques soupirs.'
        },
        {
            nom: 'Benil Sraw',
            role: 'Volontaire',
            contenu: 'De nombreux loisirs à distance vous. L\'état total comme le tribunal du mérite verte se dégrade. Le plus raide sexe célibataire peut délicatement vous-même. Comme il instantanément sur la découverte conclut à. Tirage ouvert loin pur miss se sentit dire encore quelques soupirs.'
        },
        {
            nom: 'Adam Blaur',
            role: 'Volontaire',
            contenu: 'De nombreux loisirs à distance vous. L\'état total comme le tribunal du mérite verte se dégrade. Le plus raide sexe célibataire peut délicatement vous-même. Comme il instantanément sur la découverte conclut à. Tirage ouvert loin pur miss se sentit dire encore quelques soupirs.'
        }
    ];

    return (
        <div className="testimonials-area bg-gray p-8 md:p-16">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h5 className="text-lg text-gray-600">Témoignages</h5>
                    <h2 className="text-3xl md:text-4xl font-bold">Ce que les gens disent à propos de Sotradons</h2>
                    <div className="heading-divider h-1 bg-blue-500 mx-auto my-4"></div>
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
