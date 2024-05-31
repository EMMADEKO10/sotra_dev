import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null)

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index)
  }

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index)
  }

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
        { name: "Devenir prestataire", link: "/#" },
        { name: "Social bonds", link: "#" },
        { name: "Charte", link: "#" },
        { name: "Blog", link: "#" }
      ],
    },
    {
      title: "Sponsor",
      subItems: [
        { name: "Nos sponsors", link: "#" },
        { name: "Devenir sponsor", link: "#" }
      ],
    },
    {
      title: "Sotradons",
      subItems: [
        { name: "À propos", link: "#" },
        { name: "Vision et Mission", link: "#" },
        { name: "Contact", link: "#" }
      ],
    },
  ]

  return (
    <nav className="sticky top-0 font-bold bg-white z-50 box-border">
      <div className="flex flex-row justify-between items-center container mx-auto px-4 py-2 md:px-0 border-bottom border-4 border-[#3bcf94]">
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
          <ul className="flex flex-row justify-between items-center bg-white uppercase">
            {navItems.map((item, index) => (
              <li key={index} className="px-3 whitespace-nowrap uppercase relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="uppercase bg-transparent hover:text-[#282f68] transition duration-300 ease-in-out font-bold"
                >
                  <span className="hover:text-primary">{item.title}</span>
                  <span className="text-primary"> + </span>
                </button>
                {dropdownOpen === index && (
                  <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow mt-2">
                    <ul className="py-2 text-ls text-gray-700 dark:text-gray-200">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="hover:text-primary normal-case">
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

        <div className="hidden md:block">
          <a
            href="/login"
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

        <div className="flex flex-row justify-between items-center xl:hidden">
          <div className="ml-3">
            <button
              className="cursor-pointer bg-transparent"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="block w-6 h-1 mx-1 my-1 bg-primary ease-linear duration-75 rounded-lg"></div>
              <div className="block w-6 h-1 mx-1 my-1 bg-primary ease-linear duration-75 rounded-lg"></div>
              <div className="block w-6 h-1 mx-1 my-1 bg-primary ease-linear duration-75 rounded-lg"></div>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-gray w-full absolute overflow-hidden ease-linear duration-100 xl:hidden min-h-screen">
          <div className="bg-gray w-full ease-linear duration-100 xl:hidden absolute min-h-screen">
            {navItems.map((item, index) => (
              <div key={index} className="divide-y">
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
                  {mobileDropdownOpen === index && (
                    <div className="bg-white divide-y divide-gray-100 rounded-lg shadow mt-2">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="hover:text-primary normal-case">
                            <Link
                              className="block px-4 py-2 dark:hover:bg-[#3bcf946e]"
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
                <hr className="text-gray-dark" />
              </div>
            ))}
            <div className="py-5 xs:hidden container mx-auto px-4 md:px-0">
              <a
                href=""
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
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
