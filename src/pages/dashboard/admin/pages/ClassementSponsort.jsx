import { useState, useEffect } from "react"
import axios from "axios"
import {
  Table,
  Typography,
  Divider,
  Input,
  Space,
  Button,
  Badge,
  Spin,
} from "antd"
import "tailwindcss/tailwind.css"
import "animate.css"
import { motion } from "framer-motion"
import SbIcon from "../../../../components/Social Bonds/SbIcon"

const { Title } = Typography

const ClassementSponsort = () => {
  const [sponsorData, setSponsorData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchText, setSearchText] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSponsorData = async () => {
      setLoading(true)
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiUrl}/getSponsorRanking`)
        console.log(response.data)

        // Tri et ajout de l'index statique
        const sortedData = response.data
          .sort((a, b) => b.totalInvested - a.totalInvested)
          .map((item, index) => ({ ...item, staticRanking: index + 1 }))

        setSponsorData(sortedData)
        setFilteredData(sortedData)
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des sponsors:",
          error
        )
      } finally {
        setLoading(false)
      }
    }

    fetchSponsorData()
  }, [])

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase()
    setSearchText(value)
    const filtered = sponsorData.filter((sponsor) =>
      sponsor.sponsorName.toLowerCase().includes(value)
    )
    setFilteredData(filtered)
  }

  const resetSearch = () => {
    setSearchText("")
    setFilteredData(sponsorData)
  }

  const columns = [
    {
      title: "Position",
      dataIndex: "staticRanking",
      key: "staticRanking",
      render: (text, record) => (
        <Badge
          count={`#${record.staticRanking}`}
          style={{ 
            backgroundColor: record.staticRanking <= 3 ? '#ffd700' : '#3bcf94',
            color: record.staticRanking <= 3 ? '#000' : '#fff',
            fontWeight: 'bold'
          }}
        />
      ),
      className: "font-bold text-center",
      width: 100,
    },
    {
      title: "Sponsors",
      dataIndex: "sponsorName",
      key: "sponsor",
      render: (text, record) => (
        <div className="flex items-center">
          <img
            src={`${import.meta.env.VITE_URL_IMAGE}${record.logo}`}
            alt="logo"
            className="hidden sm:block w-12 h-12 rounded-full border-2 border-gray-300 mr-3"
          />
          <span className="font-medium text-gray-800">
            {record.sponsorName}
          </span>
        </div>
      ),
      className: "text-left",
      width: 300,
    },
    {
      title: <span>Capital investis</span>,
      dataIndex: "totalInvested",
      key: "totalInvested",
      sorter: (a, b) => b.totalInvested - a.totalInvested,
      render:  (text) => <span>{text.toLocaleString()}<SbIcon color="#ff9800"/></span>,
      className: "text-center text-blue-600 font-semibold",
      width: 295,
    },

    
  ]

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text- mt-12 text-wrap">
          <h4 className="text-xl text-gray-600 font-semibold mb-2">
            Classement de nos meilleurs partenaires
          </h4>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            DRC RSE Awards
          </h2>
        </div>

        <Space
          direction="vertical"
          size="middle"
          className="w-full"
        >
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Spin size="large" />
            </div>
          ) : (
            <Table
              className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden"
              columns={columns}
              dataSource={filteredData}
              rowKey="sponsorName"
              pagination={{
                pageSize: 10,
                showSizeChanger: false,
                className: "pagination-centered",
              }}
              bordered={false}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }
            />
          )}
        </Space>
      </motion.div>
    </>
  )
}

export default ClassementSponsort
