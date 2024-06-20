import { Button, Progress } from 'antd';
import { NavLink } from 'react-router-dom';
import 'animate.css';

export default function Causes() {
  return (
    <>
      <div className="causes-area bg-gray py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate__animated animate__fadeInLeft">
              <h5 className="text-lg text-gray-600 font-semibold mb-2">Nos Initiatives Sociales</h5>
              <h2 className="text-3xl font-bold mb-4">
                Soutenez des projets caritatifs à travers le monde.
              </h2>
            </div>
            <div className="animate__animated animate__fadeInRight">
              <p className="text-gray-700 mb-4">
                Ensemble, nous créons un impact positif en soutenant des causes humanitaires essentielles.
              </p>
              <NavLink to="/allprojets">
                <Button type="primary" className=" py-3 px-6 text-base animate__animated animate__fadeInUp">
                  Découvrir plus <i className="fas fa-angle-right ml-2"></i>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Single Item */}
            <div className="single-item animate__animated animate__fadeInUp">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="/media/l’éducation.jpg"
                    alt="Thumb"
                    className="w-full h-56 object-cover object-center"
                  />
                  <span className="absolute bg-gray-800 text-white py-1 px-3 rounded-full bottom-0 right-0 m-4 text-xs">
                    Créé : Nov 7, 2020
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">
                    <a href="#">Éducation pour l'Afrique</a>
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Soutenez notre initiative visant à fournir une éducation de qualité en Afrique.
                  </p>
                  <div className="flex items-center mb-4">
                    <Progress percent={50} className="w-full" />
                  </div>
                  <p className="text-gray-700">
                    Collecté : $4200 <span className="ml-2">Objectif : $8400</span>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="single-item animate__animated animate__fadeInUp">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="/media/l’eau pour tous.jpg"
                    alt="Thumb"
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="absolute bg-green-500 text-white py-1 px-3 rounded-full top-0 left-0 m-4 text-xs">
                    En Tendance
                  </div>
                  <span className="absolute bg-gray-800 text-white py-1 px-3 rounded-full bottom-0 right-0 m-4 text-xs">
                    Créé : Jul 15, 2020
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">
                    <a href="#">Accès à l'eau potable pour tous</a>
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Contribuez à notre effort pour fournir de l'eau potable à des communautés défavorisées.
                  </p>
                  <div className="flex items-center mb-4">
                    <Progress percent={69} className="w-full" />
                  </div>
                  <p className="text-gray-700">
                    Collecté : $6230 <span className="ml-2">Objectif : $8400</span>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="single-item animate__animated animate__fadeInUp">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="/media/african-kid-marketplace (2).jpg"
                    alt="Thumb"
                    className="w-full h-56 object-cover object-center"
                  />
                  <span className="absolute bg-gray-800 text-white py-1 px-3 rounded-full bottom-0 right-0 m-4 text-xs">
                    Créé : Dec 26, 2020
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">
                    <a href="#">Aide alimentaire pour les Syriens</a>
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Soutenez notre initiative pour fournir une aide alimentaire essentielle aux enfants syriens.
                  </p>
                  <div className="flex items-center mb-4">
                    <Progress percent={45} className="w-full" />
                  </div>
                  <p className="text-gray-700">
                    Collecté : $4230 <span className="ml-2">Objectif : $8400</span>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Item */}
          </div>
        </div>
      </div>
    </>
  );
}
