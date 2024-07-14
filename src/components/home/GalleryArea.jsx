import { Button } from 'antd';
import 'animate.css'; // Assurez-vous que 'animate.css' est correctement importé
import { NavLink } from 'react-router-dom';

export default function GalleryArea() {
  return (
    <div className="gallery-area bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h5 className="text-2xl font-bold">Ce que nous avons accompli</h5>
            <h2 className="text-4xl font-bold mb-4">
              Projets vedettes <br /> de notre impact social
            </h2>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <p className="text-lg">
              Nous nous engageons à soutenir des projets socialement viables qui transforment des vies et renforcent les communautés. Notre approche promeut la solidarité et la transparence pour un impact durable.
            </p>
            <NavLink to="/allprojets">
              <Button
                type="primary"
                size="large"
                className="btn-theme inline-block animate__animated animate__fadeInUp animate__delay-1s"
              >
                Voir tous les projets <i className="fas fa-angle-right ml-2"></i>
              </Button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12">
        <div className="gallery-items-area">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gallery Item 1 */}
            <div className="pf-item relative overflow-hidden animate__animated animate__fadeIn">
              <img
                src="/media/Photo _ Neil Palmer (CIAT) Flickr CC.jpeg"
                alt="Image 1"
                className="w-full h-auto object-cover"
                style={{ height: "300px" }} // Ajustez la hauteur comme nécessaire
              />
              <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 transition duration-300">
                <div className="text-center">
                  <h4 className="mb-2">
                    <a href="#" className="hover:text-gray-200">
                      Nourriture pour les plus démunis
                    </a>
                  </h4>
                  <span className="cats bg-gray-800 text-white py-1 px-2 rounded-full">
                    Pauvreté
                  </span>
                </div>
              </div>
              <div className="view absolute inset-0 flex items-center justify-center opacity-0 transition duration-300">
                <a href="#" className="item popup-link">
                  <i className="fa fa-plus text-white text-3xl"></i>
                </a>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="pf-item relative overflow-hidden animate__animated animate__fadeIn">
              <img
                src="/media/b wenz.jpg"
                alt="Image 2"
                className="w-full h-auto object-cover"
                style={{ height: "300px" }} // Ajustez la hauteur comme nécessaire
              />
              <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 transition duration-300">
                <div className="text-center">
                  <h4 className="mb-2">
                    <a href="#" className="hover:text-gray-200">
                      Accès à l'eau potable
                    </a>
                  </h4>
                  <span className="cats bg-gray-800 text-white py-1 px-2 rounded-full">
                    Pauvreté
                  </span>
                </div>
              </div>
              <div className="view absolute inset-0 flex items-center justify-center opacity-0 transition duration-300">
                <a href="#" className="item popup-link">
                  <i className="fa fa-plus text-white text-3xl"></i>
                </a>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="pf-item relative overflow-hidden animate__animated animate__fadeIn">
              <img
                src="/media/b doct.jpg"
                alt="Image 3"
                className="w-full h-auto object-cover"
                style={{ height: "300px" }} // Ajustez la hauteur comme nécessaire
              />
              <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 transition duration-300">
                <div className="text-center">
                  <h4 className="mb-2">
                    <a href="#" className="hover:text-gray-200">
                      Don de sang pour sauver des vies
                    </a>
                  </h4>
                  <span className="cats bg-gray-800 text-white py-1 px-2 rounded-full">
                    Santé
                  </span>
                </div>
              </div>
              <div className="view absolute inset-0 flex items-center justify-center opacity-0 transition duration-300">
                <a href="#" className="item popup-link">
                  <i className="fa fa-plus text-white text-3xl"></i>
                </a>
              </div>
            </div>
            {/* Ajoutez d'autres éléments de galerie de manière similaire */}
          </div>
        </div>
      </div>
    </div>
  );
}
