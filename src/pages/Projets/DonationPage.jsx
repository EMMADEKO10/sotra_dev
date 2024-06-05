import React, { useState } from 'react';
import { Breadcrumb, Card, Col, Progress, Row, Pagination, Select, Input, Checkbox } from 'antd';
import { HomeOutlined, ThunderboltOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

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

const DonationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [onlyTrending, setOnlyTrending] = useState(false);
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

  return (
    <div>
      <Navbar />
      <div className="text-center bg-fixed text-white" style={{ backgroundImage: 'url(assets/img/2440x1578.png)' }}>
        {/* Section Breadcrumb */}
        <div className="breadcrumb-area text-center shadow dark bg-fixed padding-xl text-light" style={{ backgroundImage: "url('assets/img/blogs/side-view-people-chatting-work.jpg')" }}>
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
              {paginatedProjects.map((project, index) => (
                <Col key={index} lg={6} md={12} className="transform hover:scale-105 transition-transform duration-300">
                  <Card
                    hoverable
                    cover={<img alt="Thumb" src={project.image} className="w-full h-64 object-cover" />}
                    className="overflow-hidden rounded-lg shadow-md"
                  >
                    {project.trend && <div className="absolute top-0 right-0 m-2 text-yellow-500"><ThunderboltOutlined /> Tendance</div>}
                    <Card.Meta
                      title={<a href="#" className="text-lg font-semibold text-gray-900 hover:text-primary">{project.title}</a>}
                      description={<p className="text-sm text-gray-700">{project.description}</p>}
                    />
                    <div className="mt-4">
                      <Progress percent={project.percent} status="active" strokeColor={primaryColor} />
                      <p className="mt-2 text-sm">Collecté : ${project.collected} <span className="text-gray-600">Objectif : ${project.goal}</span></p>
                    </div>
                  </Card>
                </Col>
              ))}
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

export default DonationPage;
