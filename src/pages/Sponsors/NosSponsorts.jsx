import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbars/NavBar';
import 'tailwindcss/tailwind.css';
import { Input, Button, Row, Col } from 'antd';
import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

const NosSponsorts = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/sponsors`);
        setSponsors(response.data);
      } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {/* Section Breadcrumb */}
      <div
        className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
        style={{ backgroundImage: "url(/sotradonsImage/10.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Nos sponsors
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Sponsors */}
      <div className="volunteer-area py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  <img src={`${import.meta.env.VITE_URL_IMAGE}${sponsor.logo}`} alt="Thumb" className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <ul className="flex space-x-4 text-white">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold">{sponsor.companyName}</h4>
                  <span className="text-gray-500">{sponsor.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nouveau Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <div className="about">
                <img src="assets/img/logo-light.png" alt="Logo" className="mb-4" />
                <p>
                  Happen active county. Winding morning am shyness evident to. Garrets because elderly new manners however one village she.
                </p>
                <form action="#">
                  <Input
                    placeholder="Your Email"
                    prefix={<MailOutlined />}
                    className="my-2"
                    type="email"
                    name="email"
                  />
                  <Button type="primary" htmlType="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </Col>
            <Col xs={24} sm={12} md={4}>
              <div className="link">
                <h4 className="widget-title text-xl font-bold">Explore</h4>
                <ul className="mt-4">
                  <li><a href="#" className="text-gray-400 hover:text-white">Our Causes</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">New Campaign</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Site Map</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Donate</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                </ul>
              </div>
            </Col>
            <Col xs={24} sm={12} md={7}>
              <div className="contact">
                <h4 className="widget-title text-xl font-bold">Contact Info</h4>
                <div className="address mt-4">
                  <p><HomeOutlined className="mr-2" />5919 Trussville Crossings Pkwy, Birmingham AL 35235</p>
                  <p><MailOutlined className="mr-2" /><a href="mailto:info@validtheme.com" className="text-gray-400 hover:text-white">info@validtheme.com</a></p>
                  <p><PhoneOutlined className="mr-2" /><a href="tel:2151234567" className="text-gray-400 hover:text-white">+123 34598768</a></p>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={7}>
              <div className="recent-post">
                <h4 className="widget-title text-xl font-bold">Latest News</h4>
                <div className="mt-4">
                  <a href="#" className="block text-gray-400 hover:text-white mb-2">Delighted prevailed supported too not remainder perpetual.</a>
                  <span className="block text-sm text-gray-500"><i className="fas fa-calendar-alt mr-2"></i>22 Aug, 2020 - <a href="#" className="hover:text-white">Admin</a></span>
                </div>
                <div className="mt-4">
                  <a href="#" className="block text-gray-400 hover:text-white mb-2">Speaking trifling an to unpacked moderate debating learning management.</a>
                  <span className="block text-sm text-gray-500"><i className="fas fa-calendar-alt mr-2"></i>15 Nov, 2020 - <a href="#" className="hover:text-white">User</a></span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
};

export default NosSponsorts;
