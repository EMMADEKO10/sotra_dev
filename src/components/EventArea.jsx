import { Carousel } from 'antd';
import { Button } from 'antd';
// import 'antd/dist/antd.css'; // Importer le CSS d'Ant Design
import React from 'react';
import 'animate.css'; // Importer animate.css pour les animations

export default function EventArea() {
  return (
    <div className="event-area bg-gray-100 py-12">
      {/* Shape fixe */}
      <div className="shape-bottom-left absolute z-0">
        <img src="/shape/8.png" alt="Shape" />
      </div>
      {/* Conteneur principal */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contenu de gauche */}
          <div className="animate__animated animate__fadeInLeft lg:animate__delay-1s">
            <h5 className="text-lg text-gray-600 font-semibold mb-2">Événements à venir</h5>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Rejoignez notre prochain événement et impliquez-vous
            </h2>
          </div>
          {/* Contenu de droite */}
          <div className="animate__animated animate__fadeInRight lg:animate__delay-1s">
            <p className="text-gray-700 mb-4">
              Tout est mélancolique, rarement, mais la sollicitude habite la projection. La connexion stimule
              l’estimation de l’excellence et de l’impression.
            </p>
            <Button
              type="primary"
              size="large"
              className="btn-theme inline-block animate__animated animate__fadeInUp animate__delay-1s"
            >
              Voir tous les événements <i className="fas fa-angle-right ml-2"></i>
            </Button>
          </div>
        </div>
      </div>
      {/* Carousel des événements */}
      <div className="container mx-auto px-4 mt-8 relative z-10">
        <Carousel autoplay dots={false}>
          {/* Événement 1 */}
          <div className="item relative bg-white rounded-lg overflow-hidden shadow-md">
            <div className="thumb relative">
              <img src="/img/2440x1578.png" alt="Thumb" className="w-full h-auto" />
              <div className="date absolute top-2 left-2 bg-white rounded-full py-1 px-2">
                12 <strong>Août</strong>
              </div>
            </div>
            <div className="info p-4">
              <div className="time text-gray-600 mb-2">
                <i className="fas fa-clock"></i> 8:00 am - 16:00 pm
              </div>
              <h4 className="text-xl lg:text-2xl font-semibold mb-2">
                <a href="#" className="hover:underline">
                  Nourriture saine pour les pauvres
                </a>
              </h4>
              <p className="text-gray-700 mb-4">
                Appelé bien que la longueur d’excuse vous en ayez besoin qu’il ait. Tout ce qui nous jette sur
                l’entrée résolue ensemble gracieuse. Mme assurée a ajouté privé marié enlevé croire qu’elle n’a
                pas été plusieurs excité. familles particulières sensibles.
              </p>
              <a
                className="btn btn-theme border btn-md hover:bg-gray-200 inline-block animate__animated animate__fadeInUp lg:animate__delay-1s"
                href="#"
              >
                Savoir davantage
              </a>
            </div>
          </div>
          {/* Événement 2 */}
          <div className="item relative bg-white rounded-lg overflow-hidden shadow-md">
            <div className="thumb relative">
              <img src="/img/2440x1578.png" alt="Thumb" className="w-full h-auto" />
              <div className="date absolute top-2 left-2 bg-white rounded-full py-1 px-2">
                25 <strong>Dec</strong>
              </div>
            </div>
            <div className="info p-4">
              <div className="time text-gray-600 mb-2">
                <i className="fas fa-clock"></i> 10:00 am - 17:30 pm
              </div>
              <h4 className="text-xl lg:text-2xl font-semibold mb-2">
                <a href="#" className="hover:underline">
                  Installations médicales pour les personnes
                </a>
              </h4>
              <p className="text-gray-700 mb-4">
                Appelé bien que la longueur d’excuse vous en ayez besoin qu’il ait. Tout ce qui nous jette sur
                l’entrée résolue ensemble gracieuse. Mme assurée a ajouté privé marié enlevé croire qu’elle n’a
                pas été plusieurs excité. familles particulières sensibles.
              </p>
              <a
                className="btn btn-theme border btn-md hover:bg-gray-200 inline-block animate__animated animate__fadeInUp lg:animate__delay-1s"
                href="#"
              >
                Savoir davantage
              </a>
            </div>
          </div>
          {/* Événement 3 */}
          <div className="item relative bg-white rounded-lg overflow-hidden shadow-md">
            <div className="thumb relative">
              <img src="/img/2440x1578.png" alt="Thumb" className="w-full h-auto" />
              <div className="date absolute top-2 left-2 bg-white rounded-full py-1 px-2">
                18 <strong>Juil</strong>
              </div>
            </div>
            <div className="info p-4">
              <div className="time text-gray-600 mb-2">
                <i className="fas fa-clock"></i> 8:30 am - 16:45 pm
              </div>
              <h4 className="text-xl lg:text-2xl font-semibold mb-2">
                <a href="#" className="hover:underline">
                  Compétences de vie pour les enfants en Afrique du Sud
                </a>
              </h4>
              <p className="text-gray-700 mb-4">
                Appelé bien que la longueur d’excuse vous en ayez besoin qu’il ait. Tout ce qui nous jette sur
                l’entrée résolue ensemble gracieuse. Mme assurée a ajouté privé marié enlevé croire qu’elle n’a
                pas été plusieurs excité. familles particulières sensibles.
              </p>
              <a
                className="btn btn-theme border btn-md hover:bg-gray-200 inline-block animate__animated animate__fadeInUp lg:animate__delay-1s"
                href="#"
              >
                Savoir davantage
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
