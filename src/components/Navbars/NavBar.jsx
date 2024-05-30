import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // State pour contrôler l'ouverture du menu mobile
  const [menuOpen, setMenuOpen] = useState(false)
  // State pour contrôler l'ouverture des dropdowns dans le menu principal
  const [dropdownOpen, setDropdownOpen] = useState(null)
  // State pour contrôler l'ouverture des sous-menus dans le menu mobile
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null)

  // Fonction pour gérer l'ouverture/fermeture des dropdowns du menu principal
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index)
  }

  // Fonction pour gérer l'ouverture/fermeture des sous-menus dans le menu mobile
  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index)
  }

  return (
    <nav className="sticky top-0 font-bold bg-white z-50 box-border">
      <div className="flex flex-row justify-between items-center container mx-auto px-4 md:px-0">


        {/* Logo affiché sur les écrans de taille moyenne et plus */}
        <div className="h-100 lg:mr-5 xs:block">
          <Link to="/">
            <img
              src="assets\img\Sotradons.png"
              alt="logo"
              style={{ width: "120px", height: "90px" }}
            />
          </Link>
        </div>
        
        {/* Menu de navigation principal pour les grands écrans */}
        <div className="hidden xl:block">
            <ul className="flex flex-row justify-between items-center bg-white p-4 uppercase">
                {[
                    {
                        title: "Projets",
                        subItems: [ "Découvrer les projets", "Démarrer un projet",],
                    },


                    {
                        title: "Info",
                        subItems: [ "Devenir prestataire","Social bonds","Charte","Blog",],
                    },
                    {
                        title: "Sponsor",
                        subItems: ["Nos sponsors", "Devenir sponsor"],
                    },
                    {
                        title: "Sotradons",
                        subItems: ["À propos", "Vision et Mission", "Contact"],
                    },

                ].map((item, index) => (
                    <li key={index} className="px-3 py-4 whitespace-nowrap uppercase relative">
                        <button onClick={() => toggleDropdown(index)} className="uppercase" >
                        <span className="hover:text-primary">{item.title}</span>
                        <span className="text-primary"> + </span>
                        </button>
                        {/* Dropdowns pour les éléments de navigation */}
                        {dropdownOpen === index && (
                        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow mt-2">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                {item.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex} className="hover:text-primary normal-case">
                                    <a className="block px-4 py-2 dark:hover:bg-gray-600" href="#">
                                        {subItem}
                                    </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
            {/* Call action */}
            <div className="w-full xs:hidden flex items-right justify-between py-2">
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap"
            >
                <button
                className="bg-primary hover:bg-white hover:text-primary text-white border-primary border-2 flex flex-row items-center ease-linear duration-200 px-3 text-lg flex items-center gap-x-2 font-normal py-1.5 rounded-md"
                type="button"
                >
                <span>Connexion</span>
                </button>
            </a>
            </div>


        {/* Section pour l'inscription et le menu burger sur les petits écrans */}
        <div className="flex flex-row justify-between items-center">
          {/* Bouton du menu mobile */}
          <div className="ml-3 xl:hidden">
            <button
              className="cursor-pointer"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="block w-6 h-1 mx-1 my-1 bg-black ease-linear duration-75 rounded-lg"></div>
              <div className="block w-6 h-1 mx-1 my-1 bg-black ease-linear duration-75 rounded-lg"></div>
              <div className="block w-6 h-1 mx-1 my-1 bg-black ease-linear duration-75 rounded-lg"></div>
            </button>
          </div>
        </div>
      </div>
      {/* Menu mobile affiché quand menuOpen est vrai */}
      {menuOpen && (
        <div className="bg-gray w-full absolute overflow-hidden ease-linear duration-100 xl:hidden min-h-screen">
          <div className="bg-gray w-full ease-linear duration-100 xl:hidden absolute min-h-screen">
            {[
              {
                title: "Formations",
                subItems: [
                  "Bootcamp carrière",
                  "Kadea Boost",
                  "Kadea Online",
                  "Certificat Executive",
                ],
              },
              { title: "Campus", subItems: ["Kinshasa", "Goma", "Lubumbashi"] },
              {
                title: "Découvrir",
                subItems: [
                  "À propos",
                  "Emploi à la clé",
                  "Réalisations",
                  "Carrière",
                  "Frais académiques",
                ],
              },
              {
                title: "Entreprises",
                subItems: ["Mentor4Job", "Kadea Software"],
              },
              {
                title: "Vodacom Lab",
                subItems: ["Vodacom Digital Lab", "Kadea Online"],
              },
              { title: "Communauté", subItems: ["State of Dev"] },
            ].map((item, index) => (
              <div
                key={index}
                className="divide-y"
              >
                <div className="container mx-auto">
                  <div className="px-5 py-2 flex justify-between items-center uppercase">
                    <a
                      aria-current="page"
                      className="hover:text-primary flex w-full justify-between items-center"
                      href="#"
                      onClick={() => toggleMobileDropdown(index)}
                    >
                      <span>{item.title}</span>
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </span>
                    </a>
                  </div>
                  {/* Sous-menu pour le menu mobile */}
                  {mobileDropdownOpen === index && (
                    <div className="bg-white divide-y divide-gray-100 rounded-lg shadow mt-2">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {item.subItems.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="hover:text-primary normal-case"
                          >
                            <a
                              className="block px-4 py-2 dark:hover:bg-gray-600"
                              href="#"
                            >
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <hr className="text-gray-dark" />
              </div>
            ))}
            {/* Bouton d'inscription dans le menu mobile */}
            <div className="py-5 xs:hidden container mx-auto px-4 md:px-0">
              <a
                href="https://forms.fillout.com/t/kb72R3kuNfus"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap"
              >
                <button
                  className="bg-primary hover:bg-white hover:text-primary text-white border-primary border-2 flex flex-row items-center ease-linear duration-200 px-3 text-lg flex items-center gap-x-2 font-normal py-1.5 rounded-md"
                  type="button"
                >
                  <span>Inscris-toi</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
