import React from 'react';
import { Breadcrumb, Button, Form, Input, Progress, Avatar, List } from 'antd';
import { HomeOutlined, ClockCircleOutlined, EnvironmentOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

const DonationPage = () => {
  const comments = [
    {
      author: 'Jonathom Doe',
      avatar: 'assets/img/100x100.png',
      content: 'Livré vous sportifs zélieusement organiser franchise estimable comme. Non tout article activé musical timidité encore seize encore rougit. Entièrement sa figure merveillée.',
      datetime: '28 Août, 2020',
    },
    {
      author: 'Bravo Paul',
      avatar: 'assets/img/100x100.png',
      content: 'Livré vous sportifs zélieusement organiser franchise estimable comme. Non tout article activé musical timidité encore seize encore rougit. Entièrement sa figure merveillée.',
      datetime: '17 Sep, 2020',
    },
    {
      author: 'Hirosim Path',
      avatar: 'assets/img/100x100.png',
      content: 'Livré vous sportifs zélieusement organiser franchise estimable comme. Non tout article activé musical timidité encore seize encore rougit. Entièrement sa figure merveillée.',
      datetime: '05 Déc, 2020',
    },
  ];

  return (
    <div>
    <Navbar />
      {/* Début Fil d'Ariane */}
      <div className="breadcrumb-area text-center shadow dark bg-fixed padding-xl text-light" style={{ backgroundImage: "url('assets/img/blogs/side-view-people-chatting-work.jpg')" }}>
              <div className="container">
                  <div className="breadcrumb-items">
                      <div className="row">
                          <div className="col-lg-12">
                              <h2> Projets </h2>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      {/* Fin Fil d'Ariane */}

      {/* Début Cause Unique */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Contenu Principal */}
            <div className="w-full lg:w-2/3 px-4 mb-10 lg:mb-0">
              <div className="bg-white shadow-lg rounded-lg p-8">
                <img src="assets/img/1500x700.png" alt="Vignette" className="mb-6 rounded-lg" />
                <div className="flex justify-between mb-4 text-gray-600">
                  <div><ClockCircleOutlined /> <strong>Créé le :</strong> 15 Juil, 2020</div>
                  <div><EnvironmentOutlined /> <strong>Lieu :</strong> Mombasa, Afrique</div>
                </div>
                <h4 className="text-2xl font-semibold mb-4">Offrir l'Éducation à l'Afrique</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Les plus petites familles honorées directement surprise sont un. Répondant maîtresse lui nombreux elle a retourné les sentiments peuvent jour. 
                  Soirée chanceusement exposé fils obtenir grandement général. Zélieusement prévalu être en train d'organiser faire. 
                  Ensemble organiser trop de déjection bonheur septembre. Instrument compris ou faire connexion aucune apparition faire invitation. 
                  Séché rapide tour ou ordre. Ajouter voir ouest passé ressenti a-t-il tout. Dire hors bruit vous goûter joyeusement assiette vous partager. 
                  Ma résolution est arrivée nous chambre être suppression.
                </p>
                <Button type="primary" shape="round" size="large" className="mt-4" style={{ backgroundColor: '#3bcf93', borderColor: '#3bcf93' }}>Faire un don maintenant</Button>
              </div>

              {/* Section des Commentaires */}
              <div className="bg-white shadow-lg rounded-lg p-8 mt-10">
                <h4 className="text-xl font-semibold mb-6">5 commentaires</h4>
                <List
                  itemLayout="horizontal"
                  dataSource={comments}
                  renderItem={comment => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={comment.avatar} />}
                        title={<a href="#">{comment.author}</a>}
                        description={<span><ClockCircleOutlined /> {comment.datetime}</span>}
                      />
                      <div>{comment.content}</div>
                    </List.Item>
                  )}
                />
              </div>

              {/* Formulaire de Commentaire */}
              <div className="bg-white shadow-lg rounded-lg p-8 mt-10">
                <h4 className="text-xl font-semibold mb-6">Laisser un commentaire</h4>
                <Form className="contact-comments">
                  <Form.Item name="name">
                    <Input placeholder="Nom *" />
                  </Form.Item>
                  <Form.Item name="email">
                    <Input placeholder="Email *" />
                  </Form.Item>
                  <Form.Item name="comment">
                    <Input.TextArea placeholder="Commentaire" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="mt-4" style={{ backgroundColor: '#3bcf93', borderColor: '#3bcf93' }}>Publier le commentaire</Button>
                  </Form.Item>
                </Form>
              </div>
            </div>

            {/* Barre Latérale */}
            <div className="w-full lg:w-1/3 px-4">
              <aside>
                <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
                  <Progress percent={87} strokeColor="#3bcf93" />
                  <p className="mt-4">Collecté : $6,230 <span className="float-right">Objectif : $8,400</span></p>
                  <span className="text-gray-600">Fonds collectés : 87%</span>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
                  <h4 className="text-lg font-semibold mb-4">Sélectionner le montant</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Button type="default" className="form-btn active">$10</Button>
                    <Button type="default" className="form-btn">$25</Button>
                    <Button type="default" className="form-btn">$50</Button>
                    <Button type="default" className="form-btn">$100</Button>
                  </div>
                  <Input placeholder="Montant personnalisé" className="mt-4" />
                  <Button type="primary" className="mt-4 w-full" style={{ backgroundColor: '#3bcf93', borderColor: '#3bcf93' }}>Faire un don maintenant</Button>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
                  <h4 className="text-lg font-semibold mb-4">Dons récents</h4>
                  <div className="flex items-center mb-6">
                    <Avatar src="assets/img/100x100.png" alt="Jonathom Doe" />
                    <div className="ml-4">
                      <h5 className="text-lg font-semibold">$17</h5>
                      <ul className="text-gray-600">
                        <li><strong>Jonathom Doe</strong></li>
                        <li>Il y a 12 minutes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center mb-6">
                    <Avatar src="assets/img/100x100.png" alt="Mohit Chuan" />
                    <div className="ml-4">
                      <h5 className="text-lg font-semibold">$33</h5>
                      <ul className="text-gray-600">
                        <li><strong>Mohit Chuan</strong></li>
                        <li>Il y a 45 minutes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center mb-6">
                    <Avatar src="assets/img/100x100.png" alt="Devid Mark" />
                    <div className="ml-4">
                      <h5 className="text-lg font-semibold">$100</h5>
                      <ul className="text-gray-600">
                        <li><strong>Devid Mark</strong></li>
                        <li>Il y a 1 heure</li>
                      </ul>
                    </div>
                  </div>
                  <a href="#" className="text-primary hover:underline">Voir tout <i className="fas fa-angle-right"></i></a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      {/* Fin Cause Unique */}
      <Footer />
    </div>
  );
};

export default DonationPage;
