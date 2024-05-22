// import React from 'react'

import { NavLink } from "react-router-dom"

// import logo from '../../../source/assets/img/Sotradons A.svg';



export default function Header() {
    return (
        <>
            <header id="home">

                {/* <!-- Start Navigation --> */}
                <nav className="navbar navbar-default navbar-sticky bootsnav">

                    <div className="container-full">

                        {/* <!-- Start Atribute Navigation --> */}
                        <div className="attr-nav border-less">
                            <ul>
                                <li className="button"><NavLink to ='/projet'><i className="fas fa-heart"></i>Project</NavLink></li>
                            </ul>
                        </div>
                        {/* <!-- End Atribute Navigation -->

                <!-- Start Header Navigation --> */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <NavLink to ='/'>
                                <img width={60} height={60} src="assets/img/Sotradons (2).png" className="logo" alt="Logo" />
                            </NavLink>      
                        </div>
                        {/* <!-- End Header Navigation -->

                <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="ml-20 " id="navbar-menu">
                            <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle active" data-toggle="dropdown" >Home</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="index.html">Home Version One</a></li>
                                        <li><a href="index-2.html">Home Version Two</a></li>
                                        <li><a href="index-3.html">Home Version Three</a></li>
                                        <li><a href="index-4.html">Home Version Four</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Pages</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="volunteer.html">Voluntter</a></li>
                                        <li><a href="our-mission.html">Our Mission</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="404.html">Error Page</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Donations</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="donation-1.html">Donations Version One</a></li>
                                        <li><a href="donation-2.html">Donations Version Two</a></li>
                                        <li><a href="donation-3.html">Donations Version Three</a></li>
                                        <li><a href="donation-single.html">Donations Single</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Event</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="event-1.html">Event Version One</a></li>
                                        <li><a href="event-2.html">Event Version Two</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Blog</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="blog-standard.html">Blog Standard</a></li>
                                        <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                        <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                                        <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                        <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /.navbar-collapse --> */}
                    </div>

                </nav>
                {/* <!-- End Navigation --> */}

            </header>
        </>
    )
}
