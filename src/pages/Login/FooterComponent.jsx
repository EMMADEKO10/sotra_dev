import { Layout, Menu } from "antd";
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
    <Footer className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <Menu mode="horizontal" className="justify-center mb-4">
          <Menu.Item>À propos</Menu.Item>
          <Menu.Item>Équipe</Menu.Item>
          <Menu.Item>Produits</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
          <Menu.Item>Tarifs</Menu.Item>
        </Menu>
        <Menu mode="horizontal" className="menu-nav-social justify-center mb-4">
          <Menu.Item>
            <Link to="#"><DribbbleOutlined /></Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="#"><TwitterOutlined /></Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="#"><InstagramOutlined /></Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="#"><GithubOutlined /></Link>
          </Menu.Item>
        </Menu>
        <p className="text-center text-gray-600">
          Copyright © {new Date().getFullYear()} Sotradons. Tous droits réservés.
        </p>
      </div>
    </Footer>
  );
};

export default FooterComponent;