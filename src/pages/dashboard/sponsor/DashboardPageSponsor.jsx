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
} from '@ant-design/icons';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'antd/dist/reset.css';
import 'tailwindcss/tailwind.css';
import Navbar from '../../../components/Navbars/NavBar';
import Footer from '../../../components/Footer';

const { Header, Content } = Layout;
const { TextArea } = Input;
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
        <a href="#" className="text-[#4caf50] hover:underline">
          {text}
        </a>
      ),
      filteredValue: searchText ? [searchText] : null,
      onFilter: (value, record) => record.name.includes(value),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text) => <Tooltip title={text}>{text}</Tooltip>,
    },
    {
      title: 'Montant',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
    },
    {
      title: 'Statut',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'En cours' ? '#2196f3' : '#4caf50';
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: 'Actions',
      key: 'action',
      render: (record) => (
        <span className="flex space-x-2">
          <Button
            icon={<EyeInvisibleOutlined />}
            onClick={() => handleMaskProject(record)}
          />
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteProject(record)}
          />
        </span>
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
          <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
            {/* Profile Section */}
            <div className="flex items-center space-x-4 mb-4">
              <Avatar
                size={100}
                src="https://avatars.githubusercontent.com/u/101941972?v=4"
              />
              <div>
                <h2 className="text-2xl font-semibold">Criho James</h2>
                <p>Developer web at Kadea</p>
                <NavLink to="/createprofilesponsort">
                  <Button
                    type="default"
                    icon={<EditOutlined />}
                    className="mt-2"
                    href="#"
                  >
                    Modifier le profil
                  </Button>
                </NavLink>
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  className="mt-2 ml-2"
                  onClick={handleShowCreditModal}
                >
                  Demander un crédit
                </Button>
                <Button
                  type="default"
                  icon={<TransactionOutlined />}
                  className="mt-2 ml-2"
                  onClick={handleShowModal}
                >
                  Voir les transactions
                </Button>
              </div>
            </div>

            {/* Social Bonds Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <Card
                bordered={false}
                className="hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: '#f9fafb' }}
              >
                <Statistic
                  title="Solde des Social Bonds"
                  value={5000}
                  prefix={<DollarCircleOutlined style={{ color: '#4caf50', fontSize: '24px' }} />}
                  valueStyle={{ color: '#4caf50', fontSize: '32px', fontWeight: 'bold' }}
                />
              </Card>
              <Card
                bordered={false}
                className="hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: '#f9fafb' }}
              >
                <Statistic
                  title="Totalité des Social Bonds Distribués"
                  value={10000}
                  prefix={<DollarCircleOutlined style={{ color: '#ff9800', fontSize: '24px' }} />}
                  valueStyle={{ color: '#ff9800', fontSize: '32px', fontWeight: 'bold' }}
                />
              </Card>
              <Card
                bordered={false}
                className="hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: '#f9fafb' }}
              >
                <Statistic
                  title="Nombre de Projets Sponsorisés"
                  value={10}
                  prefix={<ProjectOutlined style={{ color: '#2196f3', fontSize: '24px' }} />}
                  valueStyle={{ color: '#2196f3', fontSize: '32px', fontWeight: 'bold' }}
                />
              </Card>
            </div>

            {/* Sponsored Projects List */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Projets Sponsorisés</h2>
              <Input.Search
                placeholder="Rechercher un projet..."
                onSearch={handleSearch}
                style={{ marginBottom: 16 }}
                enterButton={<SearchOutlined />}
              />
              <Table
                columns={columns}
                dataSource={projectsData.filter(
                  (project) =>
                    project.name.includes(searchText) ||
                    project.description.includes(searchText)
                )}
                rowKey="key"
                className="bg-white shadow-md rounded-lg"
                pagination={false}
                components={{
                  body: {
                    row: (props) => <DraggableRow {...props} moveRow={moveRow} />,
                  },
                }}
              />
            </div>

            {/* Transactions Modal */}
            <Modal
              title="Transactions de Social Bonds"
              visible={isModalVisible}
              onCancel={handleHideModal}
              footer={null}
            >
              <Table
                columns={transactionColumns}
                dataSource={transactionsData}
                rowKey="key"
                pagination={false}
              />
            </Modal>

            {/* Credit Request Modal */}
            <Modal
              title="Demande de Créditation"
              visible={isCreditModalVisible}
              onCancel={handleHideCreditModal}
              footer={[
                <Button key="cancel" onClick={handleHideCreditModal}>
                  Cancel
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  onClick={handleCreditRequest}
                >
                  Submit Request
                </Button>,
              ]}
            >
              <Form form={creditForm} layout="vertical" name="creditForm">
                <Form.Item
                  name="amount"
                  label="Montant Demandé"
                  rules={[{ required: true, message: 'Entrez le montant demandé' }]}
                >
                  <InputNumber
                    min={1}
                    max={10000}
                    step={0.01} // Permettre les décimales
                    precision={2} // Limiter à 2 décimales
                    style={{ width: '100%' }}
                    placeholder="Entrez le montant en dollars"
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message de Demande"
                  rules={[{ required: true, message: 'Entrez votre message' }]}
                >
                  <TextArea rows={4} placeholder="Écrivez votre message ici" />
                </Form.Item>
                <Form.Item>
                  <p>Pour des questions urgentes, appelez le +243 000 000 000</p>
                  <a href="tel:+243000000000">
                    <Button
                      type="link"
                      icon={<PhoneOutlined />}
                      style={{ padding: 0 }}
                    >
                      +243 000 000 000
                    </Button>
                  </a>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </Content>
      </Layout>
      <Footer />
    </DndProvider>
  );
};

export default DashboardPageSponsor;
