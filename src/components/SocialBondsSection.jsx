import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import 'animate.css';
import SbIcon from './Social Bonds/SbIcon'; // Assuming you have an icon component

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
            <h2 className="text-3xl font-extrabold mb-4 leading-tight animate__animated animate__fadeInUp">
              Investissez dans l'Impact avec les <span className="text-[#3bcf93]">Social Bonds</span>
            </h2>
            <p className="text-lg text-gray-600 font-semibold mb-2 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
              Découvrez comment les Social Bonds révolutionnent l'investissement social et maximisent votre impact.
            </p>
            <ul className=" animate__animated animate__fadeInUp animate__delay-2s">
              {[
                'Unité de mesure transparente pour l’investissement social',
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
                  <SbIcon color="#3bcf93" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6 animate__animated animate__fadeInUp animate__delay-3s">
              À la RSE Market Place by Gouvernix, nous vous offrons la possibilité de maximiser votre impact social grâce à des investissements sécurisés et responsables.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 animate__animated animate__fadeInUp animate__delay-4s">
              <Link to="/socialbonds">
                <Button
                  type="primary"
                  size="large"
                  className="btn-theme inline-block"
                >
                  En savoir plus
                </Button>
              </Link>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/RSE Market Place.pdf"
                download
                className="inline-block"
              >
                <Button
                  type="default"
                  size="large"
                  icon={<DownloadOutlined />}
                  className="bg-white text-gray-800 font-bold rounded-lg border-2 border-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Téléchargez la brochure
                </Button>
              </motion.a>
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
