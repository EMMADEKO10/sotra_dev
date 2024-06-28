import {useState} from "react"
import { Input, Button, Tooltip } from "antd"
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  PinterestOutlined,
  InstagramOutlined,
} from "@ant-design/icons"
import Navbar from "../../components/Navbars/NavBar"
import Footer from "../../components/Footer"
import "animate.css"
import RetourEnHaut from "../../components/bouton/RetourEnHaut"
import { motion } from "framer-motion"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3700/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Section Breadcrumb avec effet parallaxe */}
      <div
        className="breadcrumb-area relative text-center shadow-lg p-12 bg-cover bg-center"
        style={{
          backgroundImage: "url(/sotradonsImage/35.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contactez-nous
            </h2>
            <nav className="text-white">
              <a
                href="/"
                className="hover:underline"
              >
                Accueil
              </a>{" "}
              &gt; <span>Contactez-nous</span>
            </nav>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-form-area py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Column: Contact Form */}
              <div className="col-span-1 p-6 bg-white rounded-lg shadow-lg animate__animated animate__fadeInLeft">
                <h3 className="text-2xl font-bold mb-6">
                  Faisons ensemble un monde meilleur
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="contact-form space-y-6"
                >
                  <Input
                    size="large"
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    id="name"
                    name="name"
                    placeholder="Nom"
                    type="text"
                    required
                    value={formData.name}
  onChange={handleInputChange}
                  />
                  <Input
                    size="large"
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    type="email"
                    required
                    value={formData.email}
  onChange={handleInputChange}
                  />
                  <Input
                    size="large"
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    id="phone"
                    name="phone"
                    placeholder="Téléphone"
                    type="text"
                    value={formData.phone}
  onChange={handleInputChange}
                  />
                  <textarea
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    id="comments"
                    name="comments"
                    placeholder="Parlez-nous de votre projet *"
                    rows="5"
                    required
                    value={formData.comments}
  onChange={handleInputChange}
                  ></textarea>
                  <Button
                    type="primary"
                    size="large"
                    htmlType="submit"
                    className="btn-theme inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Envoyer le message{" "}
                    <i className="fa fa-paper-plane ml-2"></i>
                  </Button>
                </form>

                {/* Display form submission message or error */}
                <div className="alert-notification mt-6">
                  <div
                    id="message"
                    className="alert-msg"
                  ></div>
                </div>
              </div>

              {/* Right Column: Address Info */}
              <div className="col-span-1 p-6 bg-white rounded-lg shadow-lg animate__animated animate__fadeInRight">
                <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <a
                      href="https://maps.app.goo.gl/PPTfozYiikC2V9KP9"
                      className="flex items-start hover:text-green-500 text-gray-700 transition-colors duration-300"
                    >
                      <EnvironmentOutlined className="text-3xl mr-4 mt-1 text-green-500" />
                      <div>
                        <p className="font-bold">Notre adresse</p>
                        <p>76 Av. de la Justice, Kinshasa, Congo-Kinshasa</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start">
                    <a
                      href="mailto:fondationentreprendrerdc@gmail.com"
                      className="flex items-start hover:text-green-400 text-[#7E7E7E]"
                    >
                      <MailOutlined className="text-2xl mr-4 mt-1" />
                      <div>
                        <p className="font-bold">
                          Envoyez-nous un e-mail
                          <span className="block">
                            fondationentreprendrerdc@gmail.com
                          </span>
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start">
                    <a
                      href="tel:+243820294352"
                      className="flex items-start hover:text-green-400 text-[#7E7E7E]"
                    >
                      <PhoneOutlined className="text-2xl mr-4 mt-1" />
                      <div>
                        <p className="font-bold">
                          Appelez-nous
                          <span className="block">+243 820 294 352</span>
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start">
                    <div className="social flex space-x-4 text-xl">
                      <Tooltip title="Partager sur Facebook">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <FacebookOutlined />
                        </a>
                      </Tooltip>
                      <Tooltip title="Partager sur Twitter">
                        <a
                          href="#"
                          className="text-blue-400 hover:text-blue-600"
                        >
                          <TwitterOutlined />
                        </a>
                      </Tooltip>
                      <Tooltip title="Partager sur Pinterest">
                        <a
                          href="#"
                          className="text-pink-500 hover:text-pink-700"
                        >
                          <InstagramOutlined />
                        </a>
                      </Tooltip>
                      <Tooltip title="Partager sur LinkedIn">
                        <a
                          href="#"
                          className="text-blue-700 hover:text-blue-900"
                        >
                          <LinkedinOutlined />
                        </a>
                      </Tooltip>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="maps-area mt-16">
          <div className="container mx-auto">
            <div className="google-maps rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.513789321302!2d15.277950374747874!3d-4.314097346431557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33c7cbada14b%3A0xa23ee0f278db0a29!2sSky%20view!5e0!3m2!1sfr!2sus!4v1718983979737!5m2!1sfr!2sus"
                className="w-full h-96"
                title="Google Maps"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
      <RetourEnHaut />
      <Footer />
    </div>
  )
}

export default Contact
