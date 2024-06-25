import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';
import { Table, Typography, Divider, Space, Button, Badge } from "antd";
import ClassementSponsort from '../dashboard/sponsor/ClassementSponsort';
import SponsorRankingPage from '../../pages/dashboard/sponsor/graphiques';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'animate.css';
// import SponsorRankingPage from "../dashboard/sponsor/graphiques"


const { Title } = Typography;

const { Search } = Input;

const NosSponsorts = () => {
  const [sponsors, setSponsors] = useState([]);
  const [filteredSponsors, setFilteredSponsors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/sponsors`);
        setSponsors(response.data);
        setFilteredSponsors(response.data);
      } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterSponsors(value);
  };

  const filterSponsors = (value) => {
    const filtered = sponsors.filter((sponsor) =>
      sponsor.companyName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSponsors(filtered);
  };

  return (
    <div>
      <Navbar />

      {/* Breadcrumb Section */}
      <div className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
        style={{ backgroundImage: "url(/sotradonsImage/10.jpg)" }}>
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

      {/* Sponsor Section */}
      <div className="volunteer-area py-12">
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate__animated animate__fadeInLeft">
              <Title level={4} className="text-lg text-gray-600 font-semibold mb-2">
                Nos Partenaires d'Impact
              </Title>
              <Title level={2} className="font-bold mb-4">
              Découvrez les principaux contributeurs de nos projets.
              </Title>
            </div>
            <div className="animate__animated animate__fadeInRight">
              <p className="text-gray-700 mb-4">
                Grâce à la générosité de nos sponsors, nous créons des impacts positifs à travers des initiatives sociales innovantes.
              </p>
            </div>
          </div>
          {/* Champ de recherche */}
          <div className="container mx-auto mt-6 mb-6 flex justify-end">
          <div className="relative">
            <Search
              placeholder="Rechercher"
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onChange={handleSearchChange}
              value={searchTerm}
              style={{ maxWidth: '300px' }}
              
            />
          </div>
          </div>

          {/* Grid des sponsors */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-12">
            {filteredSponsors.map((sponsor, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <NavLink to={`/profilepagesponsort/${sponsor._id}`} className="block h-full">
                  <div className="relative">
                    <img src={`${import.meta.env.VITE_URL_IMAGE}${sponsor.logo}`} alt="Sponsor Logo" className="w-full h-32 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      {/* Social media icons */}
                    </div>
                  </div>
                  <div className="p-1 text-center">
                    <h4 className="text-lg font-bold">{sponsor.companyName}</h4>
                    <span className="text-gray-500 text-sm">{sponsor.industry}</span>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
          <ClassementSponsort />
          <SponsorRankingPage />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NosSponsorts;
