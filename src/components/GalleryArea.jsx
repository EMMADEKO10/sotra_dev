import { Button } from 'antd';
// import 'antd/dist/antd.css';
import 'animate.css';

export default function GalleryArea() {
  return (
    <div className="gallery-area bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h5 className="text-2xl font-bold">Ce que nous avons accompli</h5>
            <h2 className="text-4xl font-bold mb-4">
              Projets vedettes de <br /> nos dernières causes
            </h2>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <p className="text-lg">
              Tout est mélancolique, rarement, mais la sollicitude habite la projection. La
              connexion stimule l’estimation de l’excellence et de l’impression.
            </p>
            <Button type="primary"
              size="large"
              className="btn-theme inline-block animate__animated animate__fadeInUp animate__delay-1s">
              Voir tout <i className="fas fa-angle-right ml-2"></i>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12">
        <div className="gallery-items-area">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gallery Item 1 */}
            <div className="pf-item relative overflow-hidden animate__animated animate__fadeIn">
              <img
                src="/media/african-kid-marketplace.jpg"
                alt="Thumb"
                className="w-full h-auto"
              />
              <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 transition duration-300">
                <div className="text-center">
                  <h4 className="mb-2">
                    <a href="#" className="hover:text-gray-200">
                      Nourriture servie
                    </a>
                  </h4>
                  <span className="cats bg-gray-800 text-white py-1 px-2 rounded-full">
                    Pauvre
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
                src="/media/african-kid-marketplace.jpg"
                alt="Thumb"
                className="w-full h-auto"
              />
              <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 transition duration-300">
                <div className="text-center">
                  <h4 className="mb-2">
                    <a href="#" className="hover:text-gray-200">
                      Collecte d’eau
                    </a>
                  </h4>
                  <span className="cats bg-gray-800 text-white py-1 px-2 rounded-full">
                    Pauvre
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
                src="/media/l’éducation.jpg"
                alt="Thumb"
                className="w-full h-auto"
              />
              <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 transition duration-300">
                <div className="text-center">
                  <h4 className="mb-2">
                    <a href="#" className="hover:text-gray-200">
                      Don de sang
                    </a>
                  </h4>
                  <span className="cats bg-gray-800 text-white py-1 px-2 rounded-full">
                    Pauvre
                  </span>
                </div>
              </div>
              <div className="view absolute inset-0 flex items-center justify-center opacity-0 transition duration-300">
                <a href="#" className="item popup-link">
                  <i className="fa fa-plus text-white text-3xl"></i>
                </a>
              </div>
            </div>
            {/* Add more gallery items similarly */}
          </div>
        </div>
      </div>
    </div>
  );
}
