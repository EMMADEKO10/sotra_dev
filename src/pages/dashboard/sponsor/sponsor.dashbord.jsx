import { useState, useEffect } from "react"
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import axios from "axios"
import {
  Skeleton,
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
  notification,
} from "antd"
import Navbar from "../../../components/Navbars/NavBar"
import Footer from "../../../components/Footer"
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
} from "@ant-design/icons"
import "antd/dist/reset.css"
import "tailwindcss/tailwind.css"
import SbIcon from "../../../components/Social Bonds/SbIcon"

// const isTokenExpired = (token) => {
//   if (!token) {
//     return true;
//   }

//   const payload = JSON.parse(atob(token.split('.')[1]));
//   const expiry = payload.exp * 1000; // exp est en secondes, convertir en millisecondes
//   const now = new Date().getTime();
//   return now > expiry;
// };
const { Content } = Layout
const { TextArea } = Input

const DashboardPageSponsor = () => {
  // const navigate = useNavigate();


  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const role = localStorage.getItem('role');
  //   const userId = localStorage.getItem('user');

  //   if (!token || isTokenExpired(token) || role !== 'sponsor' || userId !== id) {
  //     navigate('/login');
  //   }
  // }, [navigate, id]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [searchText, setSearchText] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isCreditModalVisible, setIsCreditModalVisible] = useState(false)
  const [creditForm] = Form.useForm()

  const [projects, setProjects] = useState([])
  const [sponsorStat, setSponsorStat] = useState([])
  const { id } = useParams()
  const [sponsorName, setSponsorName] = useState("")
  const [sponsorImage, setSponsorImage] = useState("")
  const [sponsorSocialBond, setSponsorSocialBond] = useState(0)
  const [totalSocialBondsInvested, setTotalSocialBondsInvested] = useState(0)
  const [loading, setLoading] = useState(true)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiUrl}/sponsors/pjtmontants/${id}`)
        const responseStat = await axios.get(`${apiUrl}/sponsor-contributions`)
        const responseTransaction = await axios.get(`${apiUrl}/${id}/transactions`)
        setTransactions(responseTransaction.data)
        setSponsorStat(responseStat.data)

        let fetchedProjects = []
        let sponsorName = ""
        let sponsorImage = ""
        let sponsorSocialBond = 0
        let totalSocialBondsInvested = 0

        // Vérifier si response.data est un objet avec une clé projects
        if (response.data.projects !== undefined) {
          // Cas où il n'y a pas de projets sponsorisés
          sponsorName = response.data.sponsorName
          sponsorImage = response.data.sponsorImage
          sponsorSocialBond = response.data.sponsorSocialBond
          fetchedProjects = response.data.projects
        } else if (Array.isArray(response.data)) {
          // Cas où il y a des projets sponsorisés
          fetchedProjects = response.data.map((project) => ({
            ...project,
            status: project.status || "N/A", // Ensure status is defined
          }))

          if (response.data.length > 0) {
            sponsorName = response.data[0]?.sponsorName || ""
            sponsorImage = response.data[0]?.sponsorImage || ""
            sponsorSocialBond = response.data[0]?.sponsorSocialBond || 0
            totalSocialBondsInvested =
              response.data[0]?.totalSocialBondsInvested || 0
          }
        }

        setProjects(fetchedProjects)
        setSponsorName(sponsorName)
        setSponsorImage(sponsorImage)
        setSponsorSocialBond(sponsorSocialBond)
        setTotalSocialBondsInvested(totalSocialBondsInvested)
      } catch (error) {
        message.error(`Erreur lors de la requête: ${error.message}`)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  const handleSearch = (value) => {
    setSearchText(value)
  }

  const handleShowCreditModal = () => {
    setIsCreditModalVisible(true)
  }

  const handleHideCreditModal = () => {
    setIsCreditModalVisible(false)
    creditForm.resetFields()
  }

  const handleCreditRequest = async () => {
    try {
      const values = await creditForm.validateFields()
      const message = `Demande de crédit pour un montant de €${values.amount}`

      const apiUrl = import.meta.env.VITE_API_URL
      await axios.post(`${apiUrl}/notifications/credit`, {
        message,
        sponsorName,
      })

      notification.success({
        message: "Demande de crédit envoyée",
        description: "Votre demande de crédit a été envoyée avec succès.",
      })

      setIsCreditModalVisible(false)
      creditForm.resetFields()
    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande de crédit:", error)
      notification.error({
        message: "Erreur",
        description:
          "Une erreur est survenue lors de l'envoi de la demande de crédit.",
      })
    }
  }

  const handleMaskProject = (record) => {
    console.log("Masking project:", record)
  }

  const handleDeleteProject = (record) => {
    console.log("Deleting project:", record)
  }

  // -------------------------------------------------------------------------

  // -------------------------------------------------------------------------

  const columns = [
    {
      title: "Projet",
      dataIndex: "projectName",
      key: "projectName",
      render: (text) => (
        <a
          href="#"
          className="text-[#4caf50] hover:underline"
        >
          {text}
        </a>
      ),
      filteredValue: searchText ? [searchText] : null,
      onFilter: (value, record) => record.projectName.includes(value),
    },
    {
      title: "Description",
      dataIndex: "projectDescription",
      key: "projectDescription",
      render: (text) => <Tooltip title={text}>{text}</Tooltip>,
    },
    {
      title: "Montant Collecté",
      dataIndex: "totalMontantReduit",
      key: "totalMontantReduit",
      align: "right",
    },
    {
      title: "Statut",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = status === "En cours" ? "#2196f3" : "#4caf50"
        return (
          <Tag
            color={color}
            key={status}
          >
            {status ? status.toUpperCase() : "N/A"}
          </Tag>
        )
      },
    },
    {
      title: "Actions",
      key: "action",
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
  ]

  // Define transaction columns
  const transactionColumns = [
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'Montant',
      dataIndex: 'montant_reduit',
      key: 'montant_reduit',
    },
    {
      title: 'Projet',
      dataIndex: ['projet', 'projectTitle'],
      key: 'projet',
    },
    // Ajoutez d'autres colonnes selon vos besoins
  ];
  

  return (
    <div>
      <Navbar />
      <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
        <Content style={{ padding: "20px" }}>
          <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
            {/* Profile Section */}
            <div className="flex items-center space-x-4 mb-4">
              <Avatar
                size={100}
                src={`${import.meta.env.VITE_URL_IMAGE}${sponsorImage}`}
              />
              <div>
                <h2 className="text-2xl font-semibold">{sponsorName}</h2>
                {/* <p>Developer web at Kadea</p> */}
                <NavLink to={`/createprofilesponsort/${id}`}>
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
                  onClick={() => setIsModalVisible(true)}
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
                style={{ backgroundColor: "#f9fafb" }}
              >
                <Statistic
                  title="Solde des Social Bonds"
                  value={sponsorSocialBond}
                  prefix={
                    <SbIcon size={32} color="#52c41a" />
                  }
                  valueStyle={{
                    color: "#4caf50",
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                />
              </Card>
              <Card
                bordered={false}
                className="hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: "#f9fafb" }}
              >
                <Statistic
                  title="Totalité des Social Bonds Distribués"
                  value={totalSocialBondsInvested}
                  prefix={
                    <SbIcon size={32} color="#ff9800" />
                  }
                  valueStyle={{
                    color: "#ff9800",
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                />
              </Card>
              <Card
                bordered={false}
                className="hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: "#f9fafb" }}
              >
                <Statistic
                  title="Nombre de Projets Sponsorisés"
                  value={projects.length}
                  prefix={
                    <ProjectOutlined
                      style={{ color: "#2196f3", fontSize: "24px" }}
                    />
                  }
                  valueStyle={{
                    color: "#2196f3",
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                />
              </Card>
            </div>

            {/* Sponsored Projects List */}
            <Card
              title="Projets Sponsorisés"
              className="p-4 bg-white shadow-sm rounded-lg"
            >
              <Input.Search
                placeholder="Rechercher un projet"
                onSearch={handleSearch}
                enterButton={<SearchOutlined />}
                className="mb-4"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <Skeleton
                        key={index}
                        active
                        paragraph={{ rows: 4 }}
                      />
                    ))
                  : projects.map((project, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6"
                      >
                        <NavLink to={`/oneprojet/${project.id}`}>
                          <img
                            src={`${import.meta.env.VITE_URL_IMAGE}${
                              project.projectImage
                            }`}
                            alt={project.projectName}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                          />
                          <h2 className="text-xl font-semibold mb-2">
                            {project.projectName}
                          </h2>
                          <p className="text-gray-600 mb-4">
                            {project.projectDescription}
                          </p>
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm text-gray-500">
                                Montant total investi 
                              </p>
                              <p className="text-lg font-bold">
                                {project.totalMontantReduit}<SbIcon color="#ff9800" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Montant collecté
                              </p>
                              <p className="text-lg font-bold">
                                {project.socialBondsCollect}<SbIcon color="#ff9800" /> /{" "}
                                {project.socialBonds}<SbIcon  color="#52c41a" />
                              </p>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    ))}
              </div>
            </Card>

            {/* Modals */}
            <Modal
      title="Transactions"
      visible={isModalVisible}
      onCancel={() => setIsModalVisible(false)}
      footer={null}
      width={800}
    >
      <Table
        columns={transactionColumns}
        dataSource={transactions}
        rowKey="_id"
        loading={loading}
      />
    </Modal>

            <Modal
              title="Demander un crédit"
              visible={isCreditModalVisible}
              onOk={handleCreditRequest}
              onCancel={handleHideCreditModal}
              okText="Envoyer la demande"
              cancelText="Annuler"
            >
              <Form
                form={creditForm}
                layout="vertical"
              >
                <Form.Item
                  name="amount"
                  label="Montant"
                  rules={[
                    { required: true, message: "Veuillez entrer le montant" },
                  ]}
                >
                  <InputNumber
                    min={0}
                    step={0.001} // Définissez le pas pour permettre les décimales jusqu'à trois chiffres
                    formatter={(value) =>
                      ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={(value) => value.replace(/Sb\s?|(,*)/g, "")}
                    precision={3} // Définissez la précision à 3 décimales
                    style={{ width: "100%" }}
                    prefix={
                    <SbIcon size={32} color="#52c41a" />
                  }
                  />
                </Form.Item>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrer la description",
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default DashboardPageSponsor
