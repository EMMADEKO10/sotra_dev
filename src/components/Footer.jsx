import React from 'react';
import { Input } from 'antd';
import 'tailwindcss/tailwind.css';
import { NavLink, Link } from 'react-router-dom';
import { Layout, Menu, Space } from "antd";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import FollowUs from './ReseaxSociaux/FollowUs';
const { Search } = Input;

export default function Footer() {
  return (
    <footer className="bg-[#1C2942] text-white pt-8 sm:pt-12 relative overflow-hidden">
      {/* Forme Fixe */}
      <div className="absolute inset-0">
        <img src="/footer-bg.png" alt="Forme" className="w-full h-full object-cover opacity-5" />
        <div className="bg-black opacity-40 absolute inset-0"></div>
      </div>
      {/* Conteneur Principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos de nous */}
          <div className="text-center md:text-left">
            <img src="/Sotradons.png" alt="Logo" className="w-24 h-24 mx-auto md:mx-0 mb-4" />
            <p className="text-[#F0F0F0] opacity-85 mb-4">
              Bienvenue à la Fondation Sotradons, pionnière dans la promotion de l'impact social à travers des initiatives durables et transparentes.
            </p>
            <Search
              placeholder="Votre Email"
              enterButton="S'abonner"
              size="large"
              className="max-w-xs mx-auto md:mx-0"
            />
          </div>
          {/* Liens */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F0F0F0] opacity-85">Explorer</h4>
            <ul className="space-y-2">
              <li><NavLink to="/socialbonds" className="hover:text-green-400 text-[#F0F0F0] opacity-85 transition duration-300">Social Bonds</NavLink></li>
              <li><NavLink to="/chart" className="hover:text-green-400 text-[#F0F0F0] opacity-85 transition duration-300">Charte</NavLink></li>
              <li><NavLink to="/about" className="hover:text-green-400 text-[#F0F0F0] opacity-85 transition duration-300">Vision et Mission</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-green-400 text-[#F0F0F0] opacity-85 transition duration-300">Contact</NavLink></li>
            </ul>
          </div>

          {/* Informations de Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F0F0F0] opacity-85">Contactez-nous</h4>
            <ul className="space-y-2 text-[#F0F0F0] opacity-85">
              <li className="text-sm text-gray-600 mb-2">
                <strong>Adresse:</strong>
                <p className="mt-1">76 Av. de la Justice, Kinshasa, Congo-Kinshasa</p>
              </li>
              <li>
                <strong>Email:</strong>
                <a href="mailto:fondationentreprendrerdc@gmail.com" className="hover:text-green-400 block mt-1 transition duration-300">fondationentreprendrerdc@gmail.com</a>
              </li>
              <li>
                <strong>Téléphone:</strong>
                <a href="tel:+243820294352" className="hover:text-green-400 block mt-1 transition duration-300">+243 820 294 352</a>
              </li>
            </ul>
          </div>
          {/* Dernières Nouvelles */}
          <div className="text-center">
          <h3 className="text-lg font-semibold mb-4 text-[#F0F0F0] opacity-85">Suivez-nous</h3>
            <FollowUs />
          </div>
        </div>
      </div>
      {/* Bas de page */}
      <div className="bg-gray-800 py-4 mt-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-white mb-4 sm:mb-0">&copy; 2024. developed by crihojames & deko</p>
          <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-green-400 transition duration-300">Conditions</a></li>
            <li><a href="#" className="hover:text-green-400 transition duration-300">Confidentialité</a></li>
            <li><a href="#" className="hover:text-green-400 transition duration-300">Support</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}