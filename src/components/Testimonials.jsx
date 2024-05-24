// import React from 'react';

export default function Testimonials() {
    return (
        <div className="testimonials-area bg-gray py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Ce que les gens disent à propos de Sotradon</h2>
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Témoignage 1 */}
                    <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-6">
                        <blockquote className="text-lg mb-4">
                            Numerous indulged distance old law you. Total state as merit court green decay he. Steepest sex bachelor the may delicate its yourself.
                        </blockquote>
                        <cite className="text-sm font-bold">Jeckey Pura</cite>
                        <span className="block text-xs">Bénévole</span>
                    </div>
                    {/* Témoignage 2 */}
                    <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-6">
                        <blockquote className="text-lg mb-4">
                            Numerous indulged distance old law you. Total state as merit court green decay he. Steepest sex bachelor the may delicate its yourself.
                        </blockquote>
                        <cite className="text-sm font-bold">Benil Sraw</cite>
                        <span className="block text-xs">Volunteer</span>
                    </div>
                    {/* Témoignage 3 */}
                    <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-6">
                        <blockquote className="text-lg mb-4">
                            Numerous indulged distance old law you. Total state as merit court green decay he. Steepest sex bachelor the may delicate its yourself.
                        </blockquote>
                        <cite className="text-sm font-bold">Adam Blaur</cite>
                        <span className="block text-xs">Volunteer</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
