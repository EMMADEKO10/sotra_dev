import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Typography, Spin, Select, Empty,Row, Col  } from 'antd';
import { Column } from '@ant-design/charts';
import { motion } from 'framer-motion';

const { Title, Text } = Typography;
const { Option } = Select;



const SponsorMonthlyContributions = () => {
  const [monthlyContributions, setMonthlyContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchMonthlyContributions = async () => {
      setLoading(true);
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/getSponsorMonthlyContributions`);
        console.log('Données reçues :', response.data);
        setMonthlyContributions(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching monthly contributions:', error);
        setError('Une erreur est survenue lors du chargement des données.');
      } finally {
        setLoading(false);
      }
    };

    fetchMonthlyContributions();
  }, []);

  const filteredData = monthlyContributions.filter(item => {
    const [year] = item.month.split('-');
    return parseInt(year) === selectedYear;
  });

  const columnConfig = {
    data: filteredData,
    isGroup: true,
    xField: 'sponsor',
    yField: 'amount',
    seriesField: 'month',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
    tooltip: {
      fields: ['sponsor', 'month', 'amount'],
      showTitle: true,
      title: 'month',
      formatter: (datum) => ({
        name: datum.sponsor,
        value: `Montant: ${datum.amount}€`,
      }),
    },
    xAxis: {
      title: {
        text: 'Sponsor',
      },
    },
    yAxis: {
      title: {
        text: 'Montant Investi (€)',
      },
    },
    legend: {
      position: 'top-left',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-100 py-12 rounded-lg shadow-lg"
    >
      <Title level={4} className="text-xl text-gray-600 font-semibold mb-2">
        Contributions Mensuelles des Sponsors
      </Title>
      
      <div className="mb-4">
        <Text strong>Sélectionner l'année : </Text>
        <Select
          value={selectedYear}
          onChange={setSelectedYear}
          className="w-32 ml-2"
        >
          {Array.from(new Set(monthlyContributions.map(item => parseInt(item.month.split('-')[0]))))
            .sort((a, b) => b - a)
            .map(year => (
              <Option key={year} value={year}>{year}</Option>
            ))}
        </Select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      ) : error ? (
        <Empty
          description={error}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      ) : (
        <Row gutter={16}>
          <Col span={24}>
            <Card
              title="Évolution Mensuelle des Contributions"
              bordered={false}
              className="mb-4 hover:shadow-lg transition-shadow duration-300"
            >
              <Column {...columnConfig} height={400} />
            </Card>
          </Col>
        </Row>
      )}
    </motion.div>
  );
};

export default SponsorMonthlyContributions;