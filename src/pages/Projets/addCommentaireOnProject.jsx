// import { useState,useEffect } from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AddCommentaire = ({setReloadComment,reloadComment}) => {
  const { id } = useParams(); // Assuming you are using react-router for routing
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/commentaire`, {
        projetId: id,
        name: values.name,
        email: values.email,
        texte: values.comment,
      });

      if (response.status === 201) {
        notification.success({
          message: 'Commentaire ajouté',
          description: 'Votre commentaire a été ajouté avec succès.',
        });
        form.resetFields(); // Reset form fields after successful submission
        setReloadComment(!reloadComment)
      }
    } catch (error) {
      notification.error({
        message: 'Erreur',
        description: 'Une erreur est survenue lors de l\'ajout du commentaire.',
      });
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mt-10">
      <h4 className="text-xl font-semibold mb-6">Laisser un commentaire</h4>
      <Form form={form} onFinish={onFinish} className="contact-comments">
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
        >
          <Input placeholder="Nom *" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Veuillez entrer votre email' }]}
        >
          <Input placeholder="Email *" />
        </Form.Item>
        <Form.Item
          name="comment"
          rules={[{ required: true, message: 'Veuillez entrer votre commentaire' }]}
        >
          <Input.TextArea placeholder="Commentaire" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="mt-4" style={{ backgroundColor: '#3bcf93', borderColor: '#3bcf93' }}>
            Publier le commentaire
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCommentaire;

// --------------------------------------------------------------------------------------------------------------

