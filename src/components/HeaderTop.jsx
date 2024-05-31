import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderTop() {
    return (
        <div>
            {/* <!-- Start Header Top 
    ============================================= -->  */}
            <div className="top-bar-area inc-pad bg-dark text-light">
                <div className="container-full">
                    <div className="row align-center">
                        <div className="col-lg-6 info">
                            <ul>
                                <li>
                                    <i className="fas fa-envelope-open"></i> info@sotradons.com
                                </li>
                                <li>
                                    <i className="fas fa-phone"></i> +243 456 7890
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-right item-flex">
                            <div className="info">
                                <ul>
                                    <li>
                                        <Link to="/login">Connexion</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">S'inscrire</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Header Top --> */}
        </div>
    )
}
