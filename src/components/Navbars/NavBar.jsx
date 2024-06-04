import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const userConnect = localStorage.getItem("user")

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };


  const logout = () => {
    // Remove the token from localStorage or sessionStorage
    localStorage.removeItem('token');

    // Optionally, you can clear other user-related data
    localStorage.removeItem('user');

    // Redirect to the login page
    window.location.href = '/login';
  };

  const navItems = [
    {
      title: "Projets",
      subItems: [
        { name: "Découvrer les projets", link: "/projet" },
        { name: "Démarrer un projet", link: "#" }
      ],
    },
    {
      title: "Info",
      subItems: [
        { name: "Devenir prestataire", link: "#" },
        { name: "Social bonds", link: "#" },
        { name: "Charte", link: "#" },
        { name: "Blog", link: "#" }
      ],
    },
    {
      title: "Sponsor",
      subItems: [
        { name: "Nos sponsors", link: "/nossponsorts" },
        { name: "Devenir sponsor", link: "#" }
      ],
    },
    {
      title: "À propos",
      subItems: [
        // { name: "À propos", link: "#" },
        { name: "Vision et Mission", link: "/about" },
        { name: "Contact", link: "/contact" }
      ],
    },
  ];

  return (
    <nav className="sticky top-0 font-bold bg-white z-50 shadow-lg">
      <div className="flex flex-row justify-between items-center container mx-auto px-4 py-2 md:px-0 border-b-4 border-[#3bcf94]">
        <div className="lg:mr-5">
          <Link to="/">
            <div className="sotradons">
              <img
                src="assets/img/sotradon logo.png"
                alt="logo"
                style={{ width: "60px", height: "60px" }}
                className="pr-1"
              />
              <span className="s">S</span>
              <span className="o">o</span>
              <span className="t">t</span>
              <span className="r">r</span>
              <span className="a">a</span>
              <span className="d">d</span>
              <span className="o">o</span>
              <span className="n">n</span>
              <span className="s">s</span>
            </div>
          </Link>
        </div>

        <div className="hidden xl:block">
          <ul className="flex flex-row justify-between items-center bg-white uppercase space-x-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className="uppercase bg-transparent hover:text-[#282f68] transition duration-300 ease-in-out font-bold"
                >
                  {item.title} <span className="text-[#3bcf94]">+</span>
                </button>
                {dropdownOpen === index && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <ul className="py-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:text-primary normal-case"
                        >
                          <Link
                            className="block px-4 py-2 dark:hover:bg-[#3bcf946e]"
                            to={subItem.link}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-6">

          {userConnect && <div className="hidden md:block">
            <Link to="/">
              <button
                className="bg-white border-green-700 hover:bg-white hover:text-primary text-black  border-2  flex-row ease-linear duration-200 px-3 text-lg flex items-center gap-x-2 font-normal py-1.5 rounded-md"
                type="button"
              >
                <span>Mes Projets</span>
              </button>
            </Link>
          </div>}
          
          <div className="hidden md:block">
            <Link to="/login">
              {!userConnect ? (<button
                className="bg-primary hover:bg-white hover:text-primary text-white border-primary border-2  flex-row ease-linear duration-200 px-3 text-lg flex items-center gap-x-2 font-normal py-1.5 rounded-md"
                type="button"
              >
                <span>Connexion</span> 
              </button> ): (
              <button onClick={logout}
                className="bg-primary hover:bg-white hover:text-primary text-white border-primary border-2  flex-row ease-linear duration-200 px-3 text-lg flex items-center gap-x-2 font-normal py-1.5 rounded-md"
                type="button"
              >
                <span>Deconnexion</span> </button>)}
            </Link>
          </div>

         
        </div>

        <div className="flex flex-row justify-between items-center xl:hidden">
          <button
            className="cursor-pointer bg-transparent"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="block w-6 h-1 mx-1 my-1 bg-[#3bcf94] rounded"></div>
            <div className="block w-6 h-1 mx-1 my-1 bg-[#3bcf94] rounded"></div>
            <div className="block w-6 h-1 mx-1 my-1 bg-[#3bcf94] rounded"></div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-white w-full absolute top-16 left-0 shadow-lg z-40 xl:hidden">
          <div className="p-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="mb-4"
              >
                <button
                  className=" bg-transparent w-full text-left py-2 flex justify-between items-center"
                  onClick={() => toggleMobileDropdown(index)}
                >
                  {item.title}
                  <svg
                    className="w-4 h-4 transform transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform:
                        mobileDropdownOpen === index ? "rotate(180deg)" : "",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {mobileDropdownOpen === index && (
                  <div className="mt-2 bg-gray-50 rounded-md shadow-inner">
                    <ul className="py-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:bg-[#3bcf94] hover:text-white"
                        >
                          <Link
                            className="block px-4 py-2"
                            to={subItem.link}
                            onClick={() => setMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <div className="py-2">

              <Link to="/">
                <button className="w-full bg-white hover:bg-white hover:text-primary text-black border-primary border-2 flex justify-center items-center px-4 py-2 rounded-md transition duration-200 ease-in-out">
                  Mes projets
                </button>
              </Link>

              <Link to="/login">
                <button className="w-full bg-primary hover:bg-white hover:text-primary text-white border-primary border-2 flex justify-center items-center px-4 py-2 rounded-md transition duration-200 ease-in-out">
                  Connexion
                </button>

              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
};

export default Navbar;
