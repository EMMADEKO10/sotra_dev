import { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Card, Typography, Divider, Row, Col } from 'antd';
import { Line } from '@ant-design/charts';
import { Column } from '@ant-design/charts';


const { Title } = Typography;

const SponsorRankingPage = () => {
  const [sponsorData, setSponsorData] = useState([]);
  const [monthlyContributions, setMonthlyContributions] = useState([]);

  useEffect(() => {
    const fetchSponsorData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiUrl}/getSponsorRanking`)
        setSponsorData(response.data);

        const monthlyData = response.data.map(sponsor => {
          return sponsor.contributions.map(contribution => ({
            sponsor: sponsor.sponsorName,
            amount: contribution.amount,
            date: new Date(contribution.date),
          }));
        }).flat();

        setMonthlyContributions(monthlyData);
      } catch (error) {
        console.error('Error fetching sponsor data:', error);
      }
    };

    fetchSponsorData();
  }, []);

  const lineConfig = {
    data: monthlyContributions,
    xField: 'date',
    yField: 'amount',
    seriesField: 'sponsor',
    xAxis: {
      type: 'time',
      tickCount: 12,
    },
  };

  return (
    <div>
      <Divider orientation="left">
        <Title level={3} className="text-primary">
          Classement des Sponsors
        </Title>
      </Divider>
      <List
        bordered
        dataSource={sponsorData}
        renderItem={(item, index) => (
          <List.Item>
            <Typography.Text mark>[#{index + 1}]</Typography.Text> {item.sponsorName} - {item.totalInvested} €
          </List.Item>
        )}
      />
      <SponsorMonthlyContributionsPage />
      <SponsorMonthlyContributions />
    </div>
  );
};

export default SponsorRankingPage;

// ------------------------------------------------------------------------------------------------------------


const SponsorMonthlyContributionsPage = () => {
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
    xField: 'month',
    yField: 'amount',
    seriesField: 'sponsor',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
    xAxis: {
      title: {
        text: 'Month',
      },
    },
    yAxis: {
      title: {
        text: 'Amount Invested (€)',
      },
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