import React from "react";
import { Layout, Menu, Space } from "antd";
import { Link, NavLink } from "react-router-dom";
  import {
    DribbbleOutlined,
    TwitterOutlined,
    InstagramOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
  } from "@ant-design/icons";
import FollowUs from "../../components/ReseaxSociaux/FollowUs";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">À propos</h3>
            <img src="/Sotradons.png" alt="Logo" className="w-24 h-24 mx-auto md:mx-0 mb-4" />
            <p className="text-sm text-gray-600">
              Sotradons est une plateforme innovante dédiée à la collecte de fonds pour des projets sociaux et humanitaires.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Explorer</h3>

            <ul className="space-y-2">
              <li><NavLink to="/socialbonds" className="text-gray-600 hover:text-green-600 opacity-85 transition duration-300">Social Bonds</NavLink></li>
              <li><NavLink to="/chart" className="text-gray-600 hover:text-green-600 opacity-85 transition duration-300">Charte</NavLink></li>
              <li><NavLink to="/about" className="text-gray-600 hover:text-green-600 opacity-85 transition duration-300">Vision et Mission</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-600 hover:text-green-600 opacity-85 transition duration-300">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <ul className="space-y-2 text-[#F0F0F0] opacity-85">
              <li className="text-sm text-gray-600 mb-2">
                <strong>Adresse:</strong>
                <p className="text-gray-600 mb-2">76 Av. de la Justice, Kinshasa, Congo-Kinshasa</p>
              </li>
              <li className="text-sm text-gray-600 mb-2">
                <strong>Email:</strong>
                <a href="mailto:fondationentreprendrerdc@gmail.com" className="hover:text-green-600 block mt-1 transition duration-300 text-gray-600 mb-2">fondationentreprendrerdc@gmail.com</a>
              </li>
              <li className="text-sm text-gray-600 mb-2">
                <strong>Téléphone:</strong>
                <a href="tel:+243820294352" className="hover:text-green-600 block mt-1 transition duration-300 text-gray-600 mb-2">+243 820 294 352</a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 opacity-85">Suivez-nous</h3>
            <FollowUs iconColor="text-gray-600" />
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            Copyright © {new Date().getFullYear()} Sotradons. Tous droits réservés.
          </p>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;