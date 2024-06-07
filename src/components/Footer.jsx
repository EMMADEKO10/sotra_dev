import React from 'react';
import { Input } from 'antd';
import 'tailwindcss/tailwind.css';

const { Search } = Input;

export default function Footer() {
  return (
    <footer className="bg-[#1C2942] text-white pt-12 relative overflow-hidden">
      {/* Forme Fixe */}
      <div className="absolute inset-0">
        <img src="assets/img/footer-bg.png" alt="Forme" className="w-full h-full object-cover opacity-5" />
        <div className="bg-black opacity-40 absolute inset-0"></div>
      </div>
      {/* Conteneur Principal */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap -mx-4">
          {/* À propos de nous */}
          <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
            <div className="about text-center lg:text-left">
              <img src="assets/img/Sotradons.png" alt="Logo" className="w-32 h-32 mx-auto lg:mx-0 mb-4" />
              <p className="text-[#F0F0F0]" style={{ opacity: 0.85 }}>
                Activité du comté. La timidité du matin est évidente. Les mansardes parce que les manières nouvelles des personnes âgées pourtant un village qu'elle.
              </p>
              <Search
                placeholder="Votre Email"
                enterButton="S'abonner"
                size="large"
                className="mt-4"
                style={{ maxWidth: '300px' }}
              />
            </div>
          </div>
          {/* Liens */}
          <div className="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
            <div className="link">
              <h4 className="widget-title text-lg font-semibold mb-4 text-[#F0F0F0]" style={{ opacity: 0.85 }}>Explorer</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400 text-[#F0F0F0]" style={{ opacity: 0.85 }}>Social Bonds</a></li>
                <li><a href="#" className="hover:text-green-400 text-[#F0F0F0]" style={{ opacity: 0.85 }}>Charte</a></li>
                <li><a href="#" className="hover:text-green-400 text-[#F0F0F0]" style={{ opacity: 0.85 }}>Blog</a></li>
                <li><a href="#" className="hover:text-green-400 text-[#F0F0F0]" style={{ opacity: 0.85 }}>Devenir Sponsor</a></li>
                <li><a href="#" className="hover:text-green-400 text-[#F0F0F0]" style={{ opacity: 0.85 }}>Conditions</a></li>
              </ul>
            </div>
          </div>
          {/* Informations de Contact */}
          <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
            <div className="contact-info">
              <h4 className="widget-title text-lg font-semibold mb-4 text-[#F0F0F0]" style={{ opacity: 0.85 }}>Infos de Contact</h4>
              <ul className="space-y-2 text-[#F0F0F0]" style={{ opacity: 0.85 }}>
                <li>
                  <strong>Adresse:</strong>
                  <p> 76 Av. de la Justice, Kinshasa, Congo-Kinshasa</p>
                </li>
                <li>
                  <strong>Email:</strong>
                  <a href="mailto:info@validtheme.com" className="hover:text-green-400"> fondationentreprendrerdc@gmail.com
</a>
                </li>
                <li>
                  <strong>Téléphone:</strong>
                  <a href="tel:+12334598768" className="hover:text-green-400"> +243 820 294 352 </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Dernières Nouvelles */}
          <div className="w-full lg:w-1/4 px-4">
            <div className="recent-post">
              <h4 className="widget-title text-lg font-semibold mb-4 text-[#F0F0F0]" style={{ opacity: 0.85 }}>Dernières Nouvelles</h4>
              <div className="space-y-4 text-[#F0F0F0]" style={{ opacity: 0.85 }}>
                <div className="item">
                  <a href="#" className="hover:text-green-400 text-[#7E7E7E]">Délice soutenu a trop non reste perpétuel.</a>
                  <span className="block text-sm text-gray-400"><i className="fas fa-calendar-alt mr-1"></i> 22 Août, 2020 - <a href="#" className="hover:text-green-400 text-[#F0F0F0]">Admin</a></span>
                </div>
                <div className="item">
                  <a href="#" className="hover:text-green-400 text-[#7E7E7E]">Parler insignifiant à déballé débat modéré apprenant gestion.</a>
                  <span className="block text-sm text-[#F0F0F0]"><i className="fas fa-calendar-alt mr-1"></i> 15 Nov, 2020 - <a href="#" className="hover:text-green-400 text-[#F0F0F0]">Utilisateur</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bas de page */}
      <div className="footer-bottom bg-gray-800 py-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <p className="text-sm text-white">&copy; 2020. Conçu par Sotradon <a href="#" className="hover:text-green-400">Sotradons</a></p>
          <ul className="flex space-x-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-green-400">Conditions</a></li>
            <li><a href="#" className="hover:text-green-400">Confidentialité</a></li>
            <li><a href="#" className="hover:text-green-400">Support</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
