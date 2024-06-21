import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbars/NavBar';
import 'tailwindcss/tailwind.css';
import { Input, Button, Row, Col } from 'antd';
import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import Footer from '../../components/Footer';

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
      <Footer />
    </div>
  );
};

export default NosSponsorts;
