import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/Sotradons.png";

const HeaderComponent = () => {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setSelectedKey(location.pathname);
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { key: "/", label: "Accueil" },
    { key: "/login", label: "Connexion" },
    { key: "/register", label: "S'inscrire" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
              <span className="ml-2 text-xl font-bold text-gray-800">Sotradons</span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.key}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                      ${
                        selectedKey === item.key
                          ? "bg-[#3bcf94] text-white shadow-lg"
                          : "text-gray-600 hover:bg-[#3bcf94] hover:text-white hover:shadow-md"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#3bcf94] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.key}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out
                ${
                  selectedKey === item.key
                    ? "bg-[#3bcf94] text-white shadow-lg"
                    : "text-gray-600 hover:bg-[#3bcf94] hover:text-white hover:shadow-md"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;