import React from "react";
import { Layout, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos</h3>
            <p className="text-sm text-gray-600">
              Sotradons est une plateforme innovante dédiée à la collecte de fonds pour des projets sociaux et humanitaires.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <Menu mode="vertical" className="border-0 bg-transparent">
              <Menu.Item key="about" className="p-0 mb-2">
                <Link to="/about" className="text-gray-600 hover:text-gray-900">À propos</Link>
              </Menu.Item>
              <Menu.Item key="team" className="p-0 mb-2">
                <Link to="/team" className="text-gray-600 hover:text-gray-900">Équipe</Link>
              </Menu.Item>
              <Menu.Item key="products" className="p-0 mb-2">
                <Link to="/products" className="text-gray-600 hover:text-gray-900">Produits</Link>
              </Menu.Item>
              <Menu.Item key="blog" className="p-0 mb-2">
                <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
              </Menu.Item>
              <Menu.Item key="pricing" className="p-0">
                <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Tarifs</Link>
              </Menu.Item>
            </Menu>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <p className="text-sm text-gray-600 mb-2">Email: info@sotradons.com</p>
            <p className="text-sm text-gray-600 mb-2">Téléphone: +1 234 567 890</p>
            <p className="text-sm text-gray-600">Adresse: 123 Rue Example, Ville, Pays</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <Space size="middle">
              <Link to="#" className="text-gray-600 hover:text-blue-500 text-2xl">
                <DribbbleOutlined />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-blue-400 text-2xl">
                <TwitterOutlined />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-pink-500 text-2xl">
                <InstagramOutlined />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900 text-2xl">
                <GithubOutlined />
              </Link>
            </Space>
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