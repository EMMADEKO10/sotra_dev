import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SocialBondsSection = () => {
  return (
    <section className="py-16 md:py-24 xl:py-32 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-y-6 md:gap-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Investissez dans l'Impact avec les <span className="text-[#3bcf93]">Social Bonds</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Découvrez comment les Social Bonds révolutionnent l'investissement social et maximisent votre impact.
            </p>
            <ul className="space-y-4 ">
              {[
                'Unité de mesure transparente pour l investissement social',
                'Facilite le financement de projets à haute valeur sociale',
                'Assure une gestion efficace et responsable des fonds',
                'Projets soigneusement sélectionnés pour un impact maximum'
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-800"
                >
                  <svg className="w-6 h-6 text-[#3bcf93] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              À la RSE Market Place by Gouvernix, nous vous offrons la possibilité de maximiser votre impact social grâce à des investissements sécurisés et responsables.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/social-bonds/details" className="inline-block">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  En savoir plus
                </motion.button>
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg border-2 border-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Téléchargez la brochure
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
              <img
                src="/129575.jpg"
                alt="Investissement social"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialBondsSection;