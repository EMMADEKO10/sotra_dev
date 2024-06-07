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
        style={{ backgroundImage: "url(src/assets/sotradonsImage/35.jpg)" }}
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

      <div className="contact-form-area default-padding">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-7 contact-forms">
              <div className="content">
                <div className="heading">
                  <h3>Faisons ensemble un monde meilleur</h3>
                </div>
                <form
                  action="assets/mail/contact.php"
                  method="POST"
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Input
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Nom"
                          type="text"
                        />
                        <span className="alert-error"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Input
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email*"
                          type="email"
                        />
                        <span className="alert-error"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Input
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Téléphone"
                          type="text"
                        />
                        <span className="alert-error"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group comments">
                        <textarea
                          className="form-control"
                          id="comments"
                          name="comments"
                          placeholder="Parlez-nous de votre projet *"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <Button
                        type="primary"
                        htmlType="submit"
                        id="submit"
                      >
                        Envoyer le message <i className="fa fa-paper-plane"></i>
                      </Button>
                    </div>
                  </div>
                  {/* Message d'alerte */}
                  <div className="col-md-12 alert-notification">
                    <div
                      id="message"
                      className="alert-msg"
                    ></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 address-info">
              <div className="address-items">
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>
                      Notre adresse
                      <span>Alexima, NT 456678</span>
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-envelope-open"></i>
                    <p>
                      Envoyez-nous un e-mail
                      <span>Info@yourdomain.com</span>
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-mobile-alt"></i>
                    <p>
                      Appelez-nous
                      <span>+456 456 4443</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="maps-area">
        <div className="google-maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981"></iframe>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact;
