import  { useState,useEffect } from 'react';
import { Breadcrumb, Card, Col, Progress, Row, Pagination, Select, Input, Checkbox } from 'antd';
import { HomeOutlined, ThunderboltOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
// import { Card, Col, Row, Pagination, Checkbox, Select, Progress } from 'antd';
// import { ThunderboltOutlined } from '@ant-design/icons';
import { Skeleton } from 'antd'; // Import du Skeleton

const { Option } = Select;
const { Search } = Input;

const AllProjets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [onlyTrending, setOnlyTrending] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
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
    const matchesSearch = (project.projectTitle && project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase())) || 
                         (project.projectDescription && project.projectDescription.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    const matchesTrending = onlyTrending ? project.trend : true;
    return matchesSearch && matchesCategory && matchesTrending;
  });

  const paginatedProjects = filteredProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/projects/validated`);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="text-center bg-fixed text-white">
        <div className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/sotradonsImage/22.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative container mx-auto z-10">
            <div className="breadcrumb-items">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Projets</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            </Select>
            <Checkbox onChange={handleTrendingChange} checked={onlyTrending}>
              Afficher seulement les tendances
            </Checkbox>
          </div>
        </div>

        <div className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <Row gutter={[16, 16]}>
              {loading ? (
                Array.from({ length: pageSize }).map((_, index) => (
                  <Col key={index} lg={6} md={12}>
                    <Card>
                      <Skeleton loading={true} active />
                    </Card>
                  </Col>
                ))
              ) : (
                paginatedProjects.map((project, index) => {
                  const percent = project.socialBonds
                    ? ((project.socialBondsCollect / project.socialBonds) * 100).toFixed(2)
                    : 0;
                  return (
                    <Col key={index} lg={6} md={12} className="transform hover:scale-105 transition-transform duration-300">
                      <NavLink to={`/oneprojet/${project._id}`}>
                        <Card
                          hoverable
                          cover={
                            <img
                              alt="Thumb"
                              src={`${import.meta.env.VITE_URL_IMAGE}${project.projectImage}`}
                              className="w-full h-64 object-cover"
                            />
                          }
                          className="overflow-hidden rounded-lg shadow-md"
                        >
                          {project.trend && (
                            <div className="absolute top-0 right-0 m-2 text-yellow-500">
                              <ThunderboltOutlined /> Tendance
                            </div>
                          )}
                          <Card.Meta
                            title={
                              <a href="#" className="text-lg font-semibold text-gray-900 hover:text-primary">
                                {project.projectTitle}
                              </a>
                            }
                            description={<p className="text-sm text-gray-700">{project.projectDescription}</p>}
                          />
                          <div className="mt-4">
                            <Progress percent={percent} status="active"  />
                            <p className="mt-2 text-sm">
                              Collecté : ${project.socialBondsCollect}{' '}
                              <span className="text-gray-600">Objectif : ${project.socialBonds}</span>
                            </p>
                          </div>
                        </Card>
                      </NavLink>
                    </Col>
                  );
                })
              )}
            </Row>

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