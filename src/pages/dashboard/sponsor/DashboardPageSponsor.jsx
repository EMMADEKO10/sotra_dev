import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Layout,
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
  message,
  Breadcrumb,
  Typography,
  Space
} from 'antd';
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
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'antd/dist/reset.css';
import 'tailwindcss/tailwind.css';
import Navbar from '../../../components/Navbars/NavBar';
import Footer from '../../../components/Footer';

const { Content } = Layout;
const { TextArea } = Input;
const { Title, Text } = Typography;
const type = 'DraggableRow';

const DraggableRow = ({ index, moveRow, className, style, ...restProps }) => {
  const ref = React.useRef();
  const [, drop] = useDrop({
    accept: type,
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveRow(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [, drag] = useDrag({
    type,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <tr
      ref={ref}
      style={{ cursor: 'move', ...style }}
      {...restProps}
      className={className}
    />
  );
};

const DashboardPageSponsor = () => {
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCreditModalVisible, setIsCreditModalVisible] = useState(false);
  const [creditForm] = Form.useForm();

  const [projectsData, setProjectsData] = useState([
    {
      key: '1',
      name: 'Projet Alpha',
      description: 'Soutien à la communauté locale pour le développement durable.',
      amount: '$1000.50',
      status: 'En cours',
    },
    {
      key: '2',
      name: 'Projet Beta',
      description: 'Amélioration des infrastructures éducatives.',
      amount: '$2000.75',
      status: 'Terminé',
    },
    // Additional projects...
  ]);

  const transactionsData = [
    {
      key: '1',
      date: '2024-06-10',
      type: 'Crédit',
      amount: '$500.00',
    },
    {
      key: '2',
      date: '2024-06-12',
      type: 'Débit',
      amount: '$200.50',
    },
    // Additional transactions...
  ];

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleShowCreditModal = () => {
    setIsCreditModalVisible(true);
  };

  const handleHideCreditModal = () => {
    setIsCreditModalVisible(false);
    creditForm.resetFields();
  };

  const handleCreditRequest = () => {
    creditForm
      .validateFields()
      .then((values) => {
        console.log('Credit Request:', values);
        message.success('Demande de crédit envoyée avec succès');
        setIsCreditModalVisible(false);
        creditForm.resetFields();
      })
      .catch((info) => {
        console.log('Validation Failed:', info);
      });
  };

  const handleMaskProject = (record) => {
    console.log('Masking project:', record);
  };

  const handleDeleteProject = (record) => {
    console.log('Deleting project:', record);
  };

  const moveRow = (dragIndex, hoverIndex) => {
    const dragRow = projectsData[dragIndex];
    const newProjectsData = [...projectsData];
    newProjectsData.splice(dragIndex, 1);
    newProjectsData.splice(hoverIndex, 0, dragRow);
    setProjectsData(newProjectsData);
  };

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Projet',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <Text strong className="text-blue-600 hover:underline cursor-pointer">
          {text}
        </Text>
      ),
      sorter: (a, b) => a.name.localeCompare(b.name),
      filteredValue: searchText ? [searchText] : null,
      onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text) => (
        <Tooltip title={text}>
          <Text ellipsis={{ tooltip: text }}>{text}</Text>
        </Tooltip>
      ),
    },
    {
      title: 'Montant',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      sorter: (a, b) => a.amount.replace('$', '') - b.amount.replace('$', ''),
      render: (amount) => (
        <Text strong>{amount}</Text>
      ),
    },
    {
      title: 'Statut',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const color = status === 'En cours' ? 'blue' : 'green';
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
      filters: [
        { text: 'En cours', value: 'En cours' },
        { text: 'Terminé', value: 'Terminé' },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Masquer le projet">
            <Button
              icon={<EyeInvisibleOutlined />}
              onClick={() => handleMaskProject(record)}
            />
          </Tooltip>
          <Tooltip title="Supprimer le projet">
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDeleteProject(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const transactionColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Montant',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <Navbar />
      <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
        <Content style={{ padding: '20px' }}>
          <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
            <Breadcrumb style={{ marginBottom: '16px' }}>
              <Breadcrumb.Item>Accueil</Breadcrumb.Item>
              <Breadcrumb.Item>Tableau de bord</Breadcrumb.Item>
            </Breadcrumb>

            {/* Profile Section */}
            <div className="flex items-center space-x-6 mb-8">
              <Avatar
                size={120}
                src="https://avatars.githubusercontent.com/u/101941972?v=4"
              />
              <div>
                <Title level={2} style={{ marginBottom: '4px' }}>Criho James</Title>
                <Text type="secondary" style={{ fontSize: '16px' }}>Developer web at Kadea</Text>
                <div className="mt-4">
                  <NavLink to="/createprofilesponsort">
                    <Button
                      type="default"
                      icon={<EditOutlined />}
                      className="mr-2"
                    >
                      Modifier le profil
                    </Button>
                  </NavLink>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={handleShowCreditModal}
                    className="mr-2"
                  >
                    Demander un crédit
                  </Button>
                  <Button
                    type="default"
                    icon={<TransactionOutlined />}
                    onClick={handleShowModal}
                  >
                    Voir les transactions
                  </Button>
                </div>
              </div>
            </div>

            {/* Social Bonds Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <Card
                hoverable
                className="transition-all duration-300 transform hover:scale-105"
              >
                <Statistic
                  title="Solde des Social Bonds"
                  value={5000}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<DollarCircleOutlined />}
                  suffix="$"
                />
              </Card>
              <Card
                hoverable
                className="transition-all duration-300 transform hover:scale-105"
              >
                <Statistic
                  title="Totalité des Social Bonds Distribués"
                  value={10000}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="$"
                />
              </Card>
              <Card
                hoverable
                className="transition-all duration-300 transform hover:scale-105"
              >
                <Statistic
                  title="Nombre de Projets Sponsorisés"
                  value={10}
                  valueStyle={{ color: '#1890ff' }}
                  prefix={<ProjectOutlined />}
                />
              </Card>
            </div>

            {/* Sponsored Projects List */}
            <div className="mb-8">
              <Title level={3} style={{ marginBottom: '16px' }}>Projets Sponsorisés</Title>
              <Input.Search
                placeholder="Rechercher un projet..."
                onSearch={handleSearch}
                style={{ marginBottom: 16 }}
                enterButton={<SearchOutlined />}
                size="large"
              />
              <Table
                columns={columns}
                dataSource={projectsData.filter(
                  (project) =>
                    project.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchText.toLowerCase())
                )}
                rowKey="key"
                className="shadow-md rounded-lg"
                pagination={{
                  pageSize: 5,
                  showSizeChanger: true,
                  showQuickJumper: true,
                }}
                components={{
                  body: {
                    row: (props) => <DraggableRow {...props} moveRow={moveRow} />,
                  },
                }}
              />
            </div>

            {/* Modals remain unchanged */}
          </div>
        </Content>
      </Layout>
      <Footer />
    </DndProvider>
  );
};

export default DashboardPageSponsor;