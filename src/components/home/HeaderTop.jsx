import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Fonction pour vérifier si l'utilisateur est connecté
const isAuthenticated = () => {
    return localStorage.getItem('user') !== null;
};

export default function HeaderTop() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setLoggedIn(isAuthenticated());
    }, []);

    // Si l'utilisateur est connecté, on ne rend rien
    if (loggedIn) return null;

    return (
        <div className="bg-gray-800 text-white max-sm:hidden">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-envelope-open text-[#3bcf93]"></i>
                        <span>contact@sotradons.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-phone text-[#3bcf93]"></i>
                        <span>+243 456 7890</span>
                    </div>
                </div>
                <div className="flex space-x-6">
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="hover:text-[#3bcf93] text-[#fff]">Se connecter</Link>
                        <Link to="/register" className="hover:text-[#3bcf93] text-[#fff]">Inscription</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="https://www.facebook.com/sotradons" className="hover:text-[#3bcf93] text-[#fff]">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/sotradons" className="hover:text-[#3bcf93] text-[#fff]">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/sotradons" className="hover:text-[#3bcf93] text-[#fff]">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}