import { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Card, Typography, Divider, Row, Col } from 'antd';
import { Line } from '@ant-design/charts';
import { Column } from '@ant-design/charts';


const { Title } = Typography;

// -----------------------------------------------------------------------------------------------------------

const SponsorMonthlyContributions = () => {
    const [monthlyContributions, setMonthlyContributions] = useState([]);
  
    useEffect(() => {
      const fetchMonthlyContributions = async () => {
        try {
          const apiUrl = import.meta.env.VITE_API_URL
          
          const response = await axios.get(`${apiUrl}/getSponsorMonthlyContributions`);
          setMonthlyContributions(response.data);
        } catch (error) {
          console.error('Error fetching monthly contributions:', error);
        }
      };
  
      fetchMonthlyContributions();
    }, []);
const columnConfig = {
    data: monthlyContributions,
    isGroup: true,
    xField: 'sponsor',
    yField: 'amount',
    seriesField: 'month',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color'},
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
    <div>
      <Divider orientation="left">
        <Title level={3} className="text-primary">
          Contributions Mensuelles des Sponsors
        </Title>
      </Divider>
      <Row gutter={16}>
        <Col span={24}>
          <Card
            title="Évolution Mensuelle des Contributions"
            bordered={false}
            className="mb-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Column {...columnConfig} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};


export default SponsorMonthlyContributions;
