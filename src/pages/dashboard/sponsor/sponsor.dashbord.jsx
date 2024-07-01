import { useState, useEffect } from "react"
import axios from "axios"
import { NavLink, useParams } from "react-router-dom"
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
  Switch,
  Breadcrumb,
  Row,
  Col,
  Space,
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
  HomeOutlined,
  AppstoreOutlined,
  BarsOutlined,
} from "@ant-design/icons"
import "antd/dist/reset.css"
import "tailwindcss/tailwind.css"
import { motion } from "framer-motion"

const { Content } = Layout
const { TextArea } = Input

const DashboardPageSponsor = () => {
  const [searchText, setSearchText] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isCreditModalVisible, setIsCreditModalVisible] = useState(false)
  const [creditForm] = Form.useForm()
  const [isGridView, setIsGridView] = useState(true)

  const [projects, setProjects] = useState([])
  const { id } = useParams()
  const [sponsorName, setSponsorName] = useState("")
  const [sponsorImage, setSponsorImage] = useState("")
  const [sponsorSocialBond, setSponsorSocialBond] = useState(0)
  const [totalSocialBondsInvested, setTotalSocialBondsInvested] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiUrl}/sponsors/pjtmontants/${id}`)
        const fetchedProjects = response.data.map((project) => ({
          ...project,
          status: project.status || "N/A",
        }))
        setProjects(fetchedProjects)
        if (response.status === 200 || response.status === 201) {
          setSponsorName(response.data[0]?.sponsorName || "")
          setSponsorImage(response.data[0]?.sponsorImage || "")
          setSponsorSocialBond(response.data[0]?.sponsorSocialBond || 0)
          setTotalSocialBondsInvested(
            response.data[0]?.totalSocialBondsInvested || 0
          )
        } else {
          message.error(`Erreur lors de la requête: ${response.status}`)
        }
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

  const transactionColumns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Montant",
      dataIndex: "amount",
      key: "amount",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Layout>
        <Content className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb className="mb-6">
              <Breadcrumb.Item href="/">
                <HomeOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>{sponsorName}</Breadcrumb.Item>
            </Breadcrumb>

            <Card className="mb-8 shadow-md">
              <Row
                gutter={[24, 24]}
                align="middle"
              >
                <Col
                  xs={24}
                  sm={8}
                  md={6}
                  lg={4}
                >
                  <Avatar
                    size={100}
                    src={`${import.meta.env.VITE_URL_IMAGE}${sponsorImage}`}
                  />
                </Col>
                <Col
                  xs={24}
                  sm={16}
                  md={18}
                  lg={20}
                >
                  <h2 className="text-2xl font-semibold mb-2">{sponsorName}</h2>
                  <Space wrap>
                    <NavLink to={`/createprofilesponsort/${id}`}>
                      <Button
                        type="default"
                        icon={<EditOutlined />}
                      >
                        Modifier le profil
                      </Button>
                    </NavLink>
                    <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      onClick={handleShowCreditModal}
                    >
                      Demander un crédit
                    </Button>
                    <Button
                      type="default"
                      icon={<TransactionOutlined />}
                      onClick={() => setIsModalVisible(true)}
                    >
                      Voir les transactions
                    </Button>
                  </Space>
                </Col>
              </Row>
            </Card>

            <Row
              gutter={[16, 16]}
              className="mb-8"
            >
              <Col
                xs={24}
                sm={12}
                lg={8}
              >
                <Card
                  hoverable
                  className="h-full"
                >
                  <Statistic
                    title="Solde des Social Bonds"
                    value={sponsorSocialBond}
                    prefix={<DollarCircleOutlined className="text-green-500" />}
                    valueStyle={{ color: "#4caf50" }}
                  />
                </Card>
              </Col>
              <Col
                xs={24}
                sm={12}
                lg={8}
              >
                <Card
                  hoverable
                  className="h-full"
                >
                  <Statistic
                    title="Totalité des Social Bonds Distribués"
                    value={totalSocialBondsInvested}
                    prefix={
                      <DollarCircleOutlined className="text-yellow-500" />
                    }
                    valueStyle={{ color: "#ff9800" }}
                  />
                </Card>
              </Col>
              <Col
                xs={24}
                sm={12}
                lg={8}
              >
                <Card
                  hoverable
                  className="h-full"
                >
                  <Statistic
                    title="Nombre de Projets Sponsorisés"
                    value={projects.length}
                    prefix={<ProjectOutlined className="text-blue-500" />}
                    valueStyle={{ color: "#2196f3" }}
                  />
                </Card>
              </Col>
            </Row>

            <Card
              title="Projets Sponsorisés"
              className="mb-8 shadow-md"
              extra={
                <Space>
                  <Switch
                    checkedChildren={<AppstoreOutlined />}
                    unCheckedChildren={<BarsOutlined />}
                    checked={isGridView}
                    onChange={(checked) => setIsGridView(checked)}
                  />
                  <Input.Search
                    placeholder="Rechercher un projet"
                    onSearch={handleSearch}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ width: 250 }}
                  />
                </Space>
              }
            >
              {isGridView ? (
                <Row gutter={[16, 16]}>
                  {loading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <Col
                          xs={24}
                          sm={12}
                          lg={8}
                          key={index}
                        >
                          <Card className="h-full">
                            <Skeleton active />
                          </Card>
                        </Col>
                      ))
                    : projects.map((project, index) => (
                        <Col
                          xs={24}
                          sm={12}
                          lg={8}
                          key={index}
                        >
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Card
                              hoverable
                              cover={
                                <img
                                  alt={project.projectName}
                                  src={`${import.meta.env.VITE_URL_IMAGE}${
                                    project.projectImage
                                  }`}
                                  className="h-48 object-cover"
                                />
                              }
                              className="h-full"
                            >
                              <Card.Meta
                                title={project.projectName}
                                description={
                                  <Tooltip title={project.projectDescription}>
                                    <p className="truncate">
                                      {project.projectDescription}
                                    </p>
                                  </Tooltip>
                                }
                              />
                              <div className="mt-4">
                                <p className="text-sm text-gray-500">
                                  Montant total investi
                                </p>
                                <p className="text-lg font-bold">
                                  {project.totalMontantReduit}
                                </p>
                              </div>
                              <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                  Montant collecté
                                </p>
                                <p className="text-lg font-bold">
                                  {project.socialBondsCollect} /{" "}
                                  {project.socialBonds}
                                </p>
                              </div>
                            </Card>
                          </motion.div>
                        </Col>
                      ))}
                </Row>
              ) : (
                <Table
                  columns={columns}
                  dataSource={projects}
                  rowKey="id"
                  loading={loading}
                  pagination={{ pageSize: 10 }}
                  scroll={{ x: true }}
                />
              )}
            </Card>
          </div>
        </Content>
        <Footer />
      </Layout>

      <Modal
        title="Transactions"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
      >
        <Table
          columns={transactionColumns}
          dataSource={projects}
          rowKey="id"
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
            rules={[{ required: true, message: "Veuillez entrer le montant" }]}
          >
            <InputNumber
              min={0}
              formatter={(value) =>
                `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/€\s?|(,*)/g, "")}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Veuillez entrer la description" },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default DashboardPageSponsor
