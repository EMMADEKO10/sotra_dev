import { useState, useEffect } from 'react';
import { Breadcrumb, Card, Col, Progress, Row, Pagination, Select, Input, Checkbox, Skeleton } from 'antd';
import { HomeOutlined, ThunderboltOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const { Option } = Select;
const { Search } = Input;

const AllProjets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [onlyTrending, setOnlyTrending] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageSize = 10;

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
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

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.projectTitle && project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? project.projectCategory === selectedCategory : true;
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
    <div className="bg-gray-100 py-20">
      <Navbar />
      <div className="text-center bg-fixed text-white">
        <div
          className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
          style={{ backgroundImage: "url('/sotradonsImage/31.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative container mx-auto z-10">
            <div className="breadcrumb-items">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Projets
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-4">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <Search
              placeholder="Rechercher par titre de projet"
              onChange={handleSearch} // Changed to onChange
              className="w-full lg:w-1/3"
              value={searchTerm} // Keep the input controlled
              enterButton
            />
            <Select
              placeholder="Sélectionnez une catégorie"
              onChange={handleCategoryChange}
              className="w-full lg:w-1/4"
            >
              <Option value="">Toutes les catégories</Option>
              <Option value="Éducation">Éducation et formation</Option>
              <Option value="Santé">Santé et bien-être</Option>
              <Option value="Logement">Logement et infrastructures</Option>
              <Option value="Emploi">Emploi et développement économique</Option>
              <Option value="Protection de l'enfance">
                Protection de l'enfance et des personnes vulnérables
              </Option>
              <Option value="Environnement">
                Environnement et développement durable
              </Option>
              <Option value="Culture">Culture et loisirs</Option>
              <Option value="Justice sociale">
                Justice sociale et droits de l'homme
              </Option>
              <Option value="Sécurité alimentaire">Sécurité alimentaire</Option>
              <Option value="Cohésion sociale">
                Intégration et cohésion sociale
              </Option>
              <Option value="Sécurité communautaire">
                Prévention de la violence et sécurité communautaire
              </Option>
              <Option value="Autonomisation des femmes">
                Autonomisation des femmes
              </Option>
              <Option value="Immigration">
                Aide aux réfugiés et aux migrants
              </Option>
              <Option value="Soutien aux personnes handicapées">
                Soutien aux personnes handicapées
              </Option>
              <Option value="Paix et réconciliation">
                Promotion de la paix et de la réconciliation
              </Option>
              <Option value="Assainissement">
                Accès à l'eau potable et assainissement
              </Option>
              <Option value="Patrimoine culturel">
                Préservation du patrimoine culturel
              </Option>
              <Option value="Toxicomanie">
                Lutte contre la toxicomanie
              </Option>
              <Option value="Numériques">
                Formation en compétences numériques
              </Option>
              <Option value="Sensibilisation">
                Sensibilisation et éducation environnementale
              </Option>
            </Select>
            <Checkbox
              onChange={handleTrendingChange}
              checked={onlyTrending}
            >
              Afficher seulement les tendances
            </Checkbox>
          </div>
        </div>

        <div className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <Row gutter={[16, 16]}>
              {loading
                ? Array.from({ length: pageSize }).map((_, index) => (
                    <Col
                      key={index}
                      lg={6}
                      md={12}
                    >
                      <Card>
                        <Skeleton
                          loading={true}
                          active
                        />
                      </Card>
                    </Col>
                  ))
                : paginatedProjects.map((project, index) => {
                    const percent = project.socialBonds
                      ? (
                          (project.socialBondsCollect / project.socialBonds) *
                          100
                        ).toFixed(2)
                      : 0
                    return (
                      <Col
                        key={index}
                        lg={6}
                        md={12}
                        className="transform hover:scale-105 transition-transform duration-300"
                      >
                        <NavLink to={`/oneprojet/${project._id}`}>
                          <Card
                            hoverable
                            cover={
                              <img
                                alt="Thumb"
                                src={`${import.meta.env.VITE_URL_IMAGE}${
                                  project.projectImage
                                }`}
                                className="w-full h-64 object-cover"
                              />
                            }
                            className="overflow-hidden rounded-lg shadow-md"
                          >
                            <Card.Meta
                              title={
                                <a
                                  href="#"
                                  className="text-lg font-semibold text-gray-900 hover:text-primary"
                                >
                                  {project.projectTitle}
                                </a>
                              }
                              description={
                                <p className="text-sm text-gray-700">
                                  {project.projectDescription}
                                </p>
                              }
                            />
                            <div className="mt-4">
                              <div className="text-sm text-gray-500">
                                Catégorie : {project.projectCategory}
                              </div>
                              <Progress
                                percent={percent}
                                status="active"
                              />
                              <p className="mt-2 text-sm">
                                Collecté : {project.socialBondsCollect}Sb{" / "}
                                <span className="text-gray-600">
                                  Objectif : {project.socialBonds}Sb
                                </span>
                              </p>
                            </div>
                          </Card>
                        </NavLink>
                      </Col>
                    )
                  })}
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
  )
};

export default AllProjets;
