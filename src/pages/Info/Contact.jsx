import React from "react"
import { Input, Button, Tooltip } from "antd"
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  PinterestOutlined,
  InstagramOutlined
} from "@ant-design/icons"
import Navbar from "../../components/Navbars/NavBar"
import Footer from "../../components/Footer"
import "animate.css"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Breadcrumb Section */}
      <div
        className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
        style={{ backgroundImage: "url(/sotradonsImage/35.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Contactez-nous
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-area py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Contact Form */}
            <div className="col-span-1 md:col-span-1">
              <div className="content animate__animated animate__fadeInLeft">
                <div className="heading mb-8">
                  <h3 className="text-xl md:text-2xl font-bold">
                    Faisons ensemble un monde meilleur
                  </h3>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <div className="mb-4">
                    <Input
                      size="large"
                      className="w-full rounded border border-gray-300 px-4 py-3"
                      id="name"
                      name="name"
                      placeholder="Nom"
                      type="text"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      size="large"
                      className="w-full rounded border border-gray-300 px-4 py-3"
                      id="email"
                      name="email"
                      placeholder="Email*"
                      type="email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      size="large"
                      className="w-full rounded border border-gray-300 px-4 py-3"
                      id="phone"
                      name="phone"
                      placeholder="Téléphone"
                      type="text"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="w-full rounded border border-gray-300 px-4 py-3"
                      id="comments"
                      name="comments"
                      placeholder="Parlez-nous de votre projet *"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      className="btn-theme inline-block animate__animated animate__fadeInUp animate__delay-1s"
                    >
                      Envoyer le message <i className="fa fa-paper-plane"></i>
                    </Button>
                  </div>
                </form>
                {/* Display form submission message or error */}
                <div className="col-md-12 alert-notification">
                  <div
                    id="message"
                    className="alert-msg"
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Column: Address Info */}
            <div className="col-span-1 md:col-span-1">
              <div className="address-info animate__animated animate__fadeInRight">
                <div className="address-items">
                  <ul>
                    <li className="flex items-start mb-6">
                      <a
                        href="https://maps.app.goo.gl/PPTfozYiikC2V9KP9"
                        className="flex items-start hover:text-green-400 text-[#7E7E7E]"
                      >
                        <EnvironmentOutlined className="text-2xl mr-4 mt-1" />
                        <div>
                          <p className="font-bold">
                            Notre adresse
                            <span className="block">
                              76 Av. de la Justice, Kinshasa, Congo-Kinshasa
                            </span>
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="flex items-start mb-6">
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
        </div>
      </div>

      {/* Maps Section */}
      <div className="maps-area">
        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.513789321302!2d15.277950374747874!3d-4.314097346431557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33c7cbada14b%3A0xa23ee0f278db0a29!2sSky%20view!5e0!3m2!1sfr!2sus!4v1718983979737!5m2!1sfr!2sus"
            className="w-full h-96"
            title="Google Maps"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
