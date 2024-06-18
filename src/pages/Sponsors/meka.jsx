import { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { Skeleton, Layout,
  Menu,
  Avatar,
  Button,
  Table,
  Input,
  Card,
  Statistic,
  Tag,
  Tooltip,
  Modal,
  Form,
  InputNumber,
  message, } from "antd";
import Navbar from "../../components/Navbars/NavBar";
import Footer from "../../components/Footer";
import {
  UserOutlined,
  EditOutlined,
  PlusOutlined,
  DollarCircleOutlined,
  ProjectOutlined,
  EyeInvisibleOutlined,
  SearchOutlined,
  DeleteOutlined,
  TransactionOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'antd/dist/reset.css';
import 'tailwindcss/tailwind.css';

const { Content } = Layout;
const { TextArea } = Input;
const type = 'DraggableRow';

const SponsorDashboard = ({ index, moveRow, className, style, ...restProps }) => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  const [sponsorName, setSponsorName] = useState("");
  const [sponsorSocialBond, setSponsorSocialBond] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/sponsors/pjtmontants/${id}`);
        setProjects(response.data);
        setLoading(false);
        if (response.status === 201 || response.status === 200) {
          setSponsorName(response.data[0].sponsorName);
          setSponsorSocialBond(response.data[0].sponsorSocialBond);
        } else {
          console.error("Erreur lors de la requête:", response.status);
        }
      } catch (error) {
        console.error("Erreur lors de la requête:", error.message);
      }
      
    };
    fetchData();

    
  }, [id]);
  
  // ----------------------------------------------------------------------------------------

  

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">{sponsorName}</h2>
          <p className="text-lg">Sponsor Social Bond: {sponsorSocialBond}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} active paragraph={{ rows: 4 }} />
            ))
          ) : (
            projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <NavLink to={`/oneprojet/${project._id}`}>
                  <img
                    src={`${import.meta.env.VITE_URL_IMAGE}${project.projectImage}`}
                    alt={project.projectName}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h2 className="text-xl font-semibold mb-2">{project.projectName}</h2>
                  <p className="text-gray-600 mb-4">{project.projectDescription}</p>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Montant total investi</p>
                      <p className="text-lg font-bold">{project.totalMontantReduit}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Montant collecté</p>
                      <p className="text-lg font-bold">{project.socialBondsCollect} / {project.socialBonds}</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SponsorDashboard;
