import { NavLink } from "react-router-dom"


export default function Header() {
    return (
        <>
            <header id="home">

                {/* <!-- Start Navigation --> */}
                <nav className="navbar navbar-default navbar-sticky bg-white shadow-lg">

                    <div className="container-full">

                        {/* <!-- Start Atribute Navigation --> */}
                        <div className="flex justify-center items-center attr-nav border-less content-center text-center gap-4">
                            <ul className="flex items-center justify-center ">
                                <li className="button"><NavLink to='/projet'><i className="fas fa-heart"></i>Decouvrez les projets</NavLink></li>
                            </ul>
                            {/* <div className="text-center w-[60px] h-[60px] mt-1 rounded-full flex items-center justify-center border border-black bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('assets/img/blogs/photo-serious-black-man-holds-chin-carries-yellow-mug-drink-looks-directly-camera-wears-red-hat-shirt.jpg')" }}>
                            </div> */}


                        </div>

                        {/* <!-- End Atribute Navigation -->

                <!-- Start Header Navigation --> */}
                        <div className="navbar-header items-center justify-center">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <NavLink to='/'>
                                <img width={90} height={90} src="assets/img/Sotradons (2).png" className="logo mt-1" alt="Logo" />
                            </NavLink>
                        </div>
                        {/* <!-- End Header Navigation -->

                <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="ml-20 " id="navbar-menu">
                            <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Son fonctionnement</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Son fonctionnement</a></li>
                                        <li><a href="#">Social Bonds</a></li>
                                        <li><a href="#">Collecter des fonds</a></li>
                                        <li><a href="#">Comment Devenir un Sponsor</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Démarrer un projet</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="donation-1.html">Donations Version One</a></li>
                                        <li><a href="donation-2.html">Donations Version Two</a></li>
                                        <li><a href="donation-3.html">Donations Version Three</a></li>
                                        <li><a href="donation-single.html">Donations Single</a></li>
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
