import { useState, useCallback, memo, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import {
  LogoutOutlined,
  UserOutlined,
  DollarCircleOutlined,
  ToolOutlined,
  StarOutlined,
  ProfileOutlined,
  DashboardOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,BellOutlined,
} from "@ant-design/icons"
import { Button, Modal, Popover, Badge } from "antd"

const NavItem = memo(({ item, roleUserConnect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef(null)
  const navItemRef = useRef(null)


  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={navItemRef}
    >
      <button
        className="text-lg font-semibold hover:text-[#3bcf94] transition-colors bg-transparent flex items-center"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {item.title}
        <span
          className={`ml-1 text-[#3bcf94] transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-2">
            {item.subItems.map((subItem, subIndex) =>
              !subItem.restrictedTo ||
              subItem.restrictedTo.includes(roleUserConnect) ? (
                <li key={subIndex}>
                  <Link
                    to={subItem.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-[#3bcf94] hover:text-white transition-colors"
                  >
                    {subItem.name}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </div>
      )}
    </div>
  )
})

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const navigate = useNavigate()

     // ... (états existants)
     const [notifications, setNotifications] = useState([])
     const [unreadCount, setUnreadCount] = useState(0)

  const userConnect = localStorage.getItem("user")
  let roleUserConnect = localStorage.getItem("role") || "user"

  const toggleMobileDropdown = useCallback(
    (index) => {
      setMobileDropdownOpen(mobileDropdownOpen === index ? null : index)
    },
    [mobileDropdownOpen]
  )

  const logout = useCallback(() => {
    if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      localStorage.removeItem("role")
      navigate("/login")
    }
  }, [navigate])

  const navItems = [
    {
      title: "Projets",
      subItems: [
        {
          name: "Découvrir les projets",
          link: "/allprojets",
          restrictedTo: ["admin", "user", "prestataire", "sponsor"],
        },
        {
          name: "Démarrer un projet",
          link: "/projectsubmission",
          restrictedTo: ["admin", "prestataire", "user"],
        },
      ],
    },
    {
      title: "Info",
      subItems: [
        {
          name: "Social bonds",
          link: "/socialbonds",
          restrictedTo: ["admin", "user", "prestataire", "sponsor"],
        },
        {
          name: "Charte",
          link: "/chart",
          restrictedTo: ["admin", "user", "prestataire", "sponsor"],
        },
      ],
    },
    {
      title: "Sponsor",
      subItems: [
        {
          name: "Nos sponsors",
          link: "/nossponsorts",
          restrictedTo: ["admin", "user", "sponsor", "prestataire"],
        },
      ],
    },
    {
      title: "À propos",
      subItems: [
        { name: "Vision et Mission", link: "/about" },
        { name: "Contact", link: "/contact" },
      ],
    },
  ]

  let dashboardUrl, dashboardIcon, dashboardText

  if (roleUserConnect === "admin") {
    dashboardUrl = `/dashboard`
    dashboardText = "Dashboard"
    dashboardIcon = <DashboardOutlined />
  } else if (roleUserConnect === "sponsor") {
    dashboardUrl = `/sponsor/${userConnect}`
    dashboardText = "Mes Projets Sponsorisés"
    dashboardIcon = <StarOutlined />
  } else if (roleUserConnect === "prestataire") {
    dashboardUrl = `/prestataire/${userConnect}`
    dashboardText = "Mes Projets"
    dashboardIcon = <ProfileOutlined />
  }

  const isValidRole = ["prestataire", "sponsor", "admin"].includes(
    roleUserConnect
  )

  const roleButtonStyle = isValidRole
    ? "bg-green-500 text-white border-green-500 hover:bg-green-600 hover:border-green-600"
    : "bg-red-500 text-white border-red-500 hover:bg-red-600 hover:border-red-600"

  const roleIcon = isValidRole ? (
    <CheckCircleOutlined />
  ) : (
    <CloseCircleOutlined />
  )

  const roleButtonText = isValidRole ? roleUserConnect : "Non approuvé"

  const showModal = () => {
    if (!isValidRole) {
      setIsModalVisible(true)
    }
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  useEffect(() => {
    if (["admin", "sponsor", "prestataire", "user"].includes(roleUserConnect)) {
      fetchNotifications()
    }
  }, [roleUserConnect])

  const fetchNotifications = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const endpoint = {
        admin: 'adminNotif',
        sponsor: 'sponsorNotif',
        prestataire: 'prestataireNotif',
        user: 'userNotif'
      }[roleUserConnect]
  console.log("Voici les users info Connect = ",userConnect )
      const response = await axios.get(`${apiUrl}/${endpoint}/${userConnect}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setNotifications(response.data)
      console.log("voici la reponse : ", response.data)
      setUnreadCount(response.data.filter(notif => !notif.read).length)
    } catch (error) {
      console.error("Erreur lors de la récupération des notifications:", error)
    }
  }

  const markAsRead = async (notificationId) => {
    try {
      await axios.put(`/api/notifications/${notificationId}/read`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setUnreadCount(prev => prev - 1)
      setNotifications(prev => prev.map(notif => 
        notif._id === notificationId ? {...notif, read: true} : notif
      ))
    } catch (error) {
      console.error("Erreur lors du marquage de la notification comme lue:", error)
    }
  }


  const NotificationList = () => (
    <div className="max-h-80 overflow-y-auto">
      {notifications.length > 0 ? (
        notifications.map((notif) => (
          <div 
            key={notif._id} 
            className={`p-2 border-b ${notif.read ? 'bg-gray-100' : 'bg-white'}`}
            onClick={() => markAsRead(notif._id)}
          >
            <p>{notif.message}</p>
            <small>{new Date(notif.date).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <p>Pas de notifications</p>
      )}
    </div>
  )
  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md transition-all duration-300">
      <div className="flex flex-row justify-between items-center container mx-auto px-4 py-1">
        <Link
          to="/"
          className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/sotradon logo.png"
            alt="Logo de Sotradons - RSE Market Place by Gouvernix"
            className="w-10 h-10"
          />
          <div className="sotradons-text">
            <div className="ttext">
              <span
                className="s"
                style={{ "--order": 0 }}
              >
                S
              </span>
              <span
                className="o"
                style={{ "--order": 1 }}
              >
                O
              </span>
              <span
                className="t"
                style={{ "--order": 2 }}
              >
                T
              </span>
              <span
                className="r"
                style={{ "--order": 3 }}
              >
                R
              </span>
              <span
                className="a"
                style={{ "--order": 4 }}
              >
                A
              </span>
              <span
                className="d"
                style={{ "--order": 5 }}
              >
                D
              </span>
              <span
                className="o"
                style={{ "--order": 6 }}
              >
                O
              </span>
              <span
                className="n"
                style={{ "--order": 7 }}
              >
                N
              </span>
              <span
                className="s"
                style={{ "--order": 8 }}
              >
                S
              </span>
            </div>
            <span className="by">BY GOUVERNIX</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex space-x-8">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              roleUserConnect={roleUserConnect}
            />
          ))}
        </div>

        

        {/* User Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {userConnect ? (
            <>
              {isValidRole && (
                <Link
                  to={dashboardUrl}
                  className="w-full max-w-lg flex justify-center"
                >
                  <button className="bg-[#3bcf94] text-white border-[#3bcf94] hover:bg-[#1e8159] hover:border-[#1e8159] flex items-center gap-2 px-4 py-1.5 rounded transition-all duration-300 hover:shadow-lg">
                    {dashboardIcon}
                    {dashboardText}
                  </button>
                </Link>
              )}

{["admin", "sponsor", "prestataire", "user"].includes(roleUserConnect) && (
  <Popover 
    content={<NotificationList />} 
    title="Notifications" 
    trigger="click"
    placement="bottomRight"
  >
    <Badge count={unreadCount}>
      <Button icon={<BellOutlined />} />
    </Badge>
  </Popover>
)}

{/* {["admin", "sponsor", "prestataire", "user"].includes(roleUserConnect) && (
  <Popover 
    content={<NotificationList />} 
    title="Notifications" 
    trigger="click"
    placement="bottomRight"
  >
    <Badge count={unreadCount}>
      <Button icon={<BellOutlined />} className="w-full" />
    </Badge>
  </Popover>
)} */}


              {!isValidRole && (
                <button
                  className={`w-full flex items-center justify-center gap-2 px-4 py-1.5 rounded transition-all duration-300 hover:shadow-lg ${roleButtonStyle}`}
                  onClick={showModal}
                >
                  {roleIcon}
                  {roleButtonText}
                </button>
              )}

              <Button
                className="w-full bg-[#3bcf94] text-white border-[#3bcf94] hover:bg-[#1e8159] hover:border-[#1e8159] px-4 py-1.5 rounded transition-all duration-300 hover:shadow-lg"
                type="primary"
                danger
                onClick={logout}
                icon={<LogoutOutlined />}
              ></Button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-[#3bcf94] text-white border-2 border-[#3bcf94] hover:bg-[#1e8159] hover:text-white px-4 py-1.5 rounded transition-all duration-300 hover:shadow-lg">
                Connexion
              </button>
            </Link>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="xl:hidden flex items-center bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#3bcf94] transition-transform duration-300 transform rotate-90"
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
              className="h-8 w-8 text-[#3bcf94] transition-transform duration-300"
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
        <div className="bg-white w-full shadow-lg z-40 xl:hidden transition-all duration-300 ease-in-out">
          <div className="p-4 space-y-4">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full"
                >
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="w-full flex items-center justify-between text-lg font-semibold bg-[#3bcf94] text-white px-4 py-2 rounded-md transition-all duration-300"
                  >
                    {item.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transform transition-transform duration-300 ${
                        mobileDropdownOpen === index ? "rotate-180" : ""
                      }`}
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
                      {item.subItems.map((subItem, subIndex) =>
                        !subItem.restrictedTo ||
                        subItem.restrictedTo.includes(roleUserConnect) ? (
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
                      )}
                    </ul>
                  )}
                </div>
              ))}

              {userConnect ? (
                <div className="flex flex-col gap-2 w-full items-center">
                  {isValidRole && (
                    <Link
                      to={dashboardUrl}
                      className="w-full max-w-lg flex justify-center"
                    >
                      <button className="w-full bg-[#3bcf94] text-white border-[#3bcf94] hover:bg-[#1e8159] hover:border-[#1e8159] px-4 py-1.5 rounded transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                        {dashboardIcon}
                        {dashboardText}
                      </button>
                    </Link>
                  )}

                  {!isValidRole && (
  <button className={`w-full flex items-center justify-center gap-2 px-4 py-1.5 rounded transition-all duration-300 hover:shadow-lg ${roleButtonStyle}`} onClick={showModal}>
    {roleIcon}
    {roleButtonText}
  </button>
)}

             <Button
                    className="w-full bg-[#3bcf94] text-white border-[#3bcf94] hover:bg-[#1e8159] hover:border-[#1e8159] px-4 py-1.5 rounded transition-all duration-300 hover:shadow-lg"
                    type="primary"
                    danger
                    onClick={logout}
                    icon={<LogoutOutlined />}
                  ></Button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="w-full max-w-lg flex justify-center"
                >
                  <button className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-[#3bcf94] text-white border-[#3bcf94] hover:bg-[#1e8159] hover:border-[#1e8159] px-4 py-1.5 rounded transition-all duration-300 hover:shadow-lg">
                    Connexion
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal pour les utilisateurs non approuvés */}
      <Modal
        title="Compte non approuvé"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[
          <Button
            key="ok"
            type="primary"
            onClick={handleOk}
          >
            J'ai compris
          </Button>,
        ]}
      >
        <p>
          Nous vous remercions pour votre inscription. Votre compte est
          actuellement en attente d'approbation. Pour finaliser ce processus et
          accéder à toutes les fonctionnalités de notre plateforme, nous vous
          invitons à contacter notre équipe administrative.
        </p>
        <p>
          Ils se feront un plaisir de vérifier vos informations et d'activer
          votre compte dans les plus brefs délais. Nous apprécions votre
          patience et votre compréhension.
        </p>
      </Modal>
    </nav>
  )
}

export default memo(Navbar)
