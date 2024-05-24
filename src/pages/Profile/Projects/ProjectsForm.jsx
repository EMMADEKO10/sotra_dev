import React from 'react';
import { Modal, Tabs, Form, Input, DatePicker, Row, Col, Select } from 'antd'; // Ajout de Select
import PropTypes from 'prop-types';
// import moment from 'moment';

const { Option } = Select;

function ProjectsForm({ showProjectForm, setShowProjectForm }) {
  return (
    <Modal
      title=""
      open={showProjectForm}
      onCancel={() => setShowProjectForm(false)}
      centered
      width={1000}
    >
      <Tabs defaultActiveKey='1'>
        <Tabs.TabPane tab="Général" key="1">
          <Form layout='vertical'>
            <Form.Item label="Nom du Projet" name="name">
              <Input type="text" />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <Input.TextArea />
            </Form.Item>

            <Form.Item label="Statut du Projet" name="status">
              <Select>
                <Option value="en_cours">En cours</Option>
                <Option value="termine">Terminé</Option>
                <Option value="annule">Annulé</Option>
              </Select>
            </Form.Item>

            <Form.Item label="ROI Estimé" name="roi">
              <Input type="number" suffix="%" />
            </Form.Item>

            <Form.Item label="Localisation" name="location">
              <Input type="text" />
            </Form.Item>

            <Form.Item label="Porteur de Projet" name="projectOwner">
              <Input type="text" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Montant Recherché" name="amountSought">
                  <Input type="number" prefix="$" suffix="USD" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Montant Collecté" name="amountCollected">
                  <Input type="number" prefix="$" suffix="USD" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Type de Projet" name="type">
                  <Select>
                    <Option value="communautaire">Communautaire</Option>
                    <Option value="environnemental">Environnemental</Option>
                    <Option value="educatif">Éducatif</Option>
                    <Option value="sanitaire">Sanitaire</Option>
                    <Option value="social">Social</Option>
                    <Option value="culturel">Culturel</Option>
                    <Option value="egalitaire">Égalitaire</Option>
                    <Option value="economique">Économique</Option>
                    <Option value="habitat">Habitat</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Durée" name="duration">
                  <DatePicker picker="month" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Images" key="2">
          <h1>Images</h1>
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  );
}

ProjectsForm.propTypes = {
  showProjectForm: PropTypes.bool.isRequired,
  setShowProjectForm: PropTypes.func.isRequired,
};

export default ProjectsForm;
