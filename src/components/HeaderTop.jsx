import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Simulate user authentication status
const isAuthenticated = () => {
    // Replace this with actual authentication logic
    return localStorage.getItem('isAuthenticated') === 'true';
}

export default function HeaderTop() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setLoggedIn(isAuthenticated());
    }, []);

    if (loggedIn) return null; // Hide top bar if the user is logged in

    return (
        <div className="bg-gray-800 text-white max-sm:hidden">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-envelope-open text-[#3bcf93]"></i>
                        <span>info@sotradons.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-phone text-[#3bcf93]"></i>
                        <span>+243 456 7890</span>
                    </div>
                </div>
                <div className="flex space-x-6">
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="hover:text-[#3bcf93] text-[#fff]">Connexion</Link>
                        <Link to="/register" className="hover:text-[#3bcf93] text-[#fff]">S'inscrire</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="hover:text-[#3bcf93] text-[#fff]">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-[#3bcf93] text-[#fff]">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-[#3bcf93] text-[#fff]">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
