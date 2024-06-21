import { Input, Button } from 'antd';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* Section Breadcrumb */}
      <div
        className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
        style={{ backgroundImage: "url(/sotradonsImage/35.jpg)" }}
      >
        {/* Overlay sombre */}
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
            <div className="col-span-1 md:col-span-1">
              <div className="content">
                <div className="heading mb-8">
                  <h3 className="text-xl md:text-2xl font-bold">
                    Faisons ensemble un monde meilleur
                  </h3>
                </div>
                <form
                  action="assets/mail/contact.php"
                  method="POST"
                  className="contact-form"
                >
                  <div className="mb-4">
                    <Input
                      className="w-full py-3 px-4 rounded border border-gray-300"
                      id="name"
                      name="name"
                      placeholder="Nom"
                      type="text"
                    />
                    <span className="alert-error"></span>
                  </div>
                  <div className="mb-4">
                    <Input
                      className="w-full py-3 px-4 rounded border border-gray-300"
                      id="email"
                      name="email"
                      placeholder="Email*"
                      type="email"
                    />
                    <span className="alert-error"></span>
                  </div>
                  <div className="mb-4">
                    <Input
                      className="w-full py-3 px-4 rounded border border-gray-300"
                      id="phone"
                      name="phone"
                      placeholder="Téléphone"
                      type="text"
                    />
                    <span className="alert-error"></span>
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="w-full py-3 px-4 rounded border border-gray-300"
                      id="comments"
                      name="comments"
                      placeholder="Parlez-nous de votre projet *"
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <Button
                      type="primary"
                      htmlType="submit"
                      id="submit"
                      className="py-3 px-6 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Envoyer le message <i className="fa fa-paper-plane"></i>
                    </Button>
                  </div>
                  {/* Message d'alerte */}
                  <div className="col-md-12 alert-notification">
                    <div id="message" className="alert-msg"></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className="address-info">
                <div className="address-items">
                  <ul>
                    <li className="flex mb-6">
                      <i className="fas fa-map-marker-alt mr-4"></i>
                      <div>
                        <p className="font-bold">
                          Notre adresse
                          <span className="block">Alexima, NT 456678</span>
                        </p>
                      </div>
                    </li>
                    <li className="flex mb-6">
                      <i className="fas fa-envelope-open mr-4"></i>
                      <div>
                        <p className="font-bold">
                          Envoyez-nous un e-mail
                          <span className="block">Info@yourdomain.com</span>
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <i className="fas fa-mobile-alt mr-4"></i>
                      <div>
                        <p className="font-bold">
                          Appelez-nous
                          <span className="block">+456 456 4443</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="maps-area">
        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981"
            className="w-full h-96"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
