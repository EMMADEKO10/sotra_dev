import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);


  const userConnect = localStorage.getItem("user");
  let roleUserConnect = localStorage.getItem("role") || "user";

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };


  const logout = () => {
    if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
      localStorage.removeItem('token');
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      navigate('/login');
    }
  };

  const navItems = [
    {
      title: "Projets",
      subItems: [
        { name: "Découvrer les projets", link: "/allprojets", restrictedTo: ["admin", "user", "prestataire", "sponsor"] },
        { name: "Démarrer un projet", link: "/projectsubmission", restrictedTo: ["admin", "prestataire", "user"] }
      ],
    },
    {
      title: "Info",
      subItems: [
        { name: "Social bonds", link: "#", restrictedTo: ["admin", "user", "prestataire", "sponsor"] },
        { name: "Charte", link: "/chart", restrictedTo: ["admin", "user", "prestataire", "sponsor"] },
        { name: "Blog", link: "/blogs", restrictedTo: ["admin", "user", "prestataire", "sponsor"] },
        { name: "Devenir prestataire", link: "/infoprestataire", restrictedTo: ["admin", "user"] }
      ],
    },
    {
      title: "Sponsor",
      subItems: [
        { name: "Nos sponsors", link: "/nossponsorts", restrictedTo: ["admin", "user", "sponsor", "prestataire"] },
        { name: "Devenir sponsor", link: "/sponsorregistration", restrictedTo: ["admin", "user"] }
      ],
    },
    {
      title: "À propos",
      subItems: [
        { name: "Vision et Mission", link: "/about" },
        { name: "Contact", link: "/contact" }
      ],
    },
  ];

  // let dashboardUrl;
  // if (roleUserConnect === 'prestataire') {
  //   dashboardUrl = `/prestataire/${userConnect}`;
  // } else if (roleUserConnect === 'sponsor') {
  //   dashboardUrl = `/sponsor/${userConnect}`;
  // }


let dashboardUrl;
  let dashboardText;

  if (roleUserConnect === 'admin') {
    dashboardUrl = `/admin/dashboard`;
    dashboardText = "Dashboard";
  } else if (roleUserConnect === 'sponsor') {
    dashboardUrl = `/sponsor/${userConnect}`;
    dashboardText = "Mes Projets Sponsorisé";
  } else {
    dashboardUrl = `/prestataire/${userConnect}`;
    dashboardText = "Mes Projets";
  }


  // ---------------------------------------------------------------
  // const handleStartProjectClick = () => {
  //   if (!token) {
  //     setIsModalVisible(true);
  //   } else {
  //     // Logique pour démarrer un projet
  //   }
  // };
  // // ------------------------------------------------------------
  // const handleModalOk = () => {
  //   form.validateFields().then(values => {
  //     if (values.agree) {
  //       setIsModalVisible(false);
  //       history.push('/devenir-prestataire');
  //     }
  //   }).catch(info => {
  //     console.log('Validation Failed:', info);
  //   });
  // };
  // // ---------------------------------------------------------------

  // const handleModalCancel = () => {
  //   setIsModalVisible(false);
  // };
  // // ---------------------------------------------------------------


  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md">
      <div className="flex flex-row justify-between items-center container mx-auto px-4 py-3">
        <Link
          to="/"
          className="flex items-center space-x-2"
        >
          <img
            src="assets/img/sotradon logo.png"
            alt="Sotradons Logo"
            className="w-10 h-10"
          />
          <div className="sotradons-text">
            <div className="ttext">
              <span className="s">S</span>
              <span className="o">O</span>
              <span className="t">T</span>
              <span className="r">R</span>
              <span className="a">A</span>
              <span className="d">D</span>
              <span className="o">O</span>
              <span className="n">N</span>
              <span className="s">S</span>
            </div>
            <span className="by">BY GOUVERNIX</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex space-x-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                onClick={() => toggleDropdown(index)}
                className="text-lg font-semibold hover:text-[#3bcf94] transition-colors bg-transparent"
              >
                {item.title} <span className="text-[#3bcf94]">+</span>
              </button>
              {dropdownOpen === index && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <ul className="py-2">
                    {item.subItems.map((subItem, subIndex) => (
                      !subItem.restrictedTo || subItem.restrictedTo.includes(roleUserConnect) ? (
                        <li key={subIndex}>
                          <Link
                            className="block px-4 py-2 text-gray-700 hover:bg-[#3bcf94] hover:text-white transition-colors"
                            to={subItem.link}
                            onClick={() => setDropdownOpen(null)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ) : null
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* User Actions */}
        <div className=" hidden lg:flex items-center space-x-4">
          {userConnect ? (
            <>
              <button
                className="bg-[#3bcf94] text-white border-[#3bcf94] hover:bg-[#1e8159] hover:border-[#1e8159] flex items-center gap-2 px-4 py-1.5 rounded transition-colors"
                onClick={() => navigate(dashboardUrl)}
              >
                {dashboardText}
              </button>
              <button
                className="bg-[#3bcf94] text-white border-[#3bcf94] hover:bg-[#1e8159] hover:border-[#1e8159] flex items-center gap-2 px-4 py-1.5 rounded transition-colors"
              >
                {roleUserConnect}
              </button>
              <button
                onClick={logout}
                className="bg-[#3bcf94] text-white border-[#3bcf94] hover:bg-[#1e8159] hover:border-[#1e8159] px-4 py-1.5 rounded transition-colors"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-[#3bcf94] text-white border-2 border-[#3bcf94] hover:bg-[#1e8159] hover:text-[#3bcf94] px-4 py-1.5 rounded transition-colors">
                Connexion
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden flex items-center bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#3bcf94]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#3bcf94]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="bg-white w-full shadow-lg z-40 xl:hidden">
          <div className="p-4 space-y-4">
            <div className="space-y-3 flex flex-col items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
             
            </div>

            <div className="space-y-3">
              {navItems.map((item, index) => (
                <div key={index} className="w-full">
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="w-full flex items-center justify-between text-lg font-semibold bg-[#3bcf94] text-white px-4 py-2 rounded-md"
                  >
                    {item.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform transition-transform duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06-.02L10 10.46l3.71-3.27a.75.75 0 111.02 1.1l-4 3.5a.75.75 0 01-1.02 0l-4-3.5a.75.75 0 01-.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {mobileDropdownOpen === index && (
                    <ul className="mt-2 bg-gray-100 rounded-md shadow-inner">
                      {item.subItems.map((subItem, subIndex) => (
                        !subItem.restrictedTo || subItem.restrictedTo.includes(roleUserConnect) ? (
                          <li key={subIndex}>
                            <Link
                              className="block px-4 py-2 text-gray-700 hover:bg-[#3bcf94] hover:text-white transition-colors"
                              to={subItem.link}
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ) : null
                      ))}
                    </ul>
                  )}

                  
                </div>
              ))}

              {userConnect ? (
                <div className="flex flex-col gap-2 w-full items-center">
                  <Link
                    to={dashboardUrl}
                    className="w-full max-w-lg flex  justify-center"
                  >
                    <button className="w-full  bg-[#3bcf94] text-white border-[#3bcf94] hover:bg-[#1e8159] hover:border-[#1e8159] px-4 py-1.5 rounded transition-colors">
                      {dashboardText}
                    </button>
                  </Link>

                  <Link to="/login" className="w-full max-w-lg flex  justify-center">
                    <button className="w-full  bg-[#3bcf94] text-white border-[#3bcf94] hover:bg-[#1e8159] hover:border-[#1e8159] px-4 py-1.5 rounded transition-colors">
                      Deconnexion
                    </button>
                  </Link>
                </div>

              ) : (
                <Link to="/login" className="w-full max-w-lg flex justify-center">
                  <button className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-[#3bcf94] text-white border-[#3bcf94] hover:bg-[#1e8159] hover:border-[#1e8159] px-4 py-1.5 rounded transition-colors">
                    Connexion
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
