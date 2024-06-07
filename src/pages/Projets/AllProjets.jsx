import  { useState,useEffect } from 'react';
import { Breadcrumb, Card, Col, Progress, Row, Pagination, Select, Input, Checkbox } from 'antd';
import { HomeOutlined, ThunderboltOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';
import axios from 'axios'
import { NavLink } from 'react-router-dom';


const { Option } = Select;
const { Search } = Input;

// Définir la couleur principale
const primaryColor = '#3bcf93';

// Définir des données fictives pour les projets
const projects = [
  { title: 'Donner une éducation à l\'Afrique', description: 'Surtout faire à la possession de manière insensible sympathiser bruyamment.', percent: 50, collected: 4200, goal: 8400, image: 'assets/img/800x600.png', date: 'Nov 7, 2020', trend: false, category: 'Éducation' },
  { title: 'De l\'eau pour tous les enfants', description: 'Surtout faire à la possession de manière insensible sympathiser bruyamment.', percent: 69, collected: 6230, goal: 8400, image: 'assets/img/800x600.png', date: 'Jul 15, 2020', trend: true, category: 'Santé' },
  { title: 'Nourriture pour les Syriens', description: 'Surtout faire à la possession de manière insensible sympathiser bruyamment.', percent: 45, collected: 4230, goal: 8400, image: 'assets/img/800x600.png', date: 'Dec 26, 2020', trend: false, category: 'Alimentation' },
  // Répétez ou ajoutez d'autres projets pour atteindre 20 éléments ou plus
];

const AllProjets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [onlyTrending, setOnlyTrending] = useState(false);
  const [project, setProjects] = useState([]);
  const pageSize = 20;

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const handleTrendingChange = (e) => {
    setOnlyTrending(e.target.checked);
    setCurrentPage(1);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    const matchesTrending = onlyTrending ? project.trend : true;
    return matchesSearch && matchesCategory && matchesTrending;
  });

  const paginatedProjects = filteredProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  console.log("paginatedProjects :", paginatedProjects)
  console.log("filteredProjects :", filteredProjects)
  console.log("projects :", projects)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const ApiUrlImage = import.meta.env.VITE_URL_IMAGE;
        console.log("Voci l'api des images : ", ApiUrlImage)
        console.log("Voci l'api des EndPoints : ", apiUrl)

        const response = await axios.get(`${apiUrl}/projects`);
        console.log("voici la reponse", response.data)
        setProjects(response.data)
        // Ajoutez ici la logique pour gérer la réponse de votre backend
        if (response.status === 201) { // Check for successful registration response
          console.log('Connexion réussie ! :')

        } else {
          // Handle unsuccessful registration (e.g., display error message)
        }
      } catch (error) {
        if (error.response) {
          // Erreur avec réponse du serveur
          console.error('Erreur de réponse du serveur:', error.response);

        } else {
          // Erreur de configuration ou autre
          console.error('Erreur lors de la requête:', error.message);
        }
      }

    };
    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures the effect runs only once

  // -----------------------------------------------------------------------------------

  if (!project) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <Navbar />
      <div className="text-center bg-fixed text-white" style={{ backgroundImage: 'url(src/assets/sotradonsImage/22.jpg)' }}>
        {/* Section Breadcrumb */}
        <div className="breadcrumb-area text-center shadow dark bg-fixed padding-xl text-light" style={{ backgroundImage: "url('src/assets/sotradonsImage/22.jpg')" }}>
              <div className="container">
                  <div className="breadcrumb-items">
                      <div className="row">
                          <div className="col-lg-12">
                              <h2> Projets </h2>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

        {/* Section de recherche et tri */}
        <div className="bg-gray-200 py-4">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <Search
              placeholder="Rechercher par mot-clé"
              onSearch={handleSearch}
              className="w-full lg:w-1/3"
              enterButton
            />
            <Select
              placeholder="Sélectionner une catégorie"
              onChange={handleCategoryChange}
              className="w-full lg:w-1/4"
            >
              <Option value="">Toutes les catégories</Option>
              <Option value="Éducation">Éducation</Option>
              <Option value="Santé">Santé</Option>
              <Option value="Alimentation">Alimentation</Option>
              {/* Ajouter d'autres catégories ici */}
            </Select>
            <Checkbox
              onChange={handleTrendingChange}
              checked={onlyTrending}
            >
              Afficher seulement les tendances
            </Checkbox>
          </div>
        </div>

        {/* Section Causes */}
        <div className="bg-gray-100 py-12">
          
          <div className="container mx-auto">
            <Row gutter={[16, 16]}>
              {project.map((project, index) => {
                const percent = project.socialBonds ? (project.socialBondsCollect / project.socialBonds) * 100 : 0;
                return (
                <Col key={index} lg={6} md={12} className="transform hover:scale-105 transition-transform duration-300">
                  <NavLink to={`/oneprojet/${project._id}`}>
                  <Card
                    hoverable
                    cover={<img alt="Thumb" src={`${import.meta.env.VITE_URL_IMAGE}${project.projectImage}`} className="w-full h-64 object-cover" />}
                    className="overflow-hidden rounded-lg shadow-md"
                  >
                    {project.trend && <div className="absolute top-0 right-0 m-2 text-yellow-500"><ThunderboltOutlined /> Tendance</div>}
                    <Card.Meta
                      title={<a href="#" className="text-lg font-semibold text-gray-900 hover:text-primary">{project.projectTitle}</a>}
                      description={<p className="text-sm text-gray-700">{project.projectDescription}</p>}
                    />
                    <div className="mt-4">
                      <Progress percent={percent} status="active" strokeColor={primaryColor} />
                        <p className="mt-2 text-sm">Collecté : ${project.socialBondsCollect} <span className="text-gray-600">Objectif : ${project.socialBonds}</span></p>
                    </div>
                  </Card>
                  </NavLink>
                </Col>
                );
              })}
            </Row>

            {/* Pagination */}
            <div className="text-center mt-8">
              <Pagination
                current={currentPage}
                total={filteredProjects.length}
                pageSize={pageSize}
                onChange={handleChangePage}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProjets;
