// Importation des bibliothèques nécessaires
import 'tailwindcss/tailwind.css';
import { Tabs, Progress, Button } from 'antd';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

const { TabPane } = Tabs;

const SocialBonds = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      
      {/* Zone cible */}
      <div className="target-area default-padding">
        <div className="container mx-auto py-10">
          <div className="flex flex-wrap -mx-4">
            
            {/* Image et contenu à gauche */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="thumb">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-1/2 px-4">
                    <img src="assets/img/800x600.png" alt="Thumb" className="mb-4 rounded" />
                    <img src="assets/img/800x800.png" alt="Thumb" className="rounded" />
                  </div>
                  <div className="w-1/2 px-4 flex flex-col justify-center">
                    <img src="assets/img/800x1000.png" alt="Thumb" className="mb-4 rounded" />
                    <div className="content">
                      <h4 className="text-xl font-semibold">Helping Today. Helping Tomorrow</h4>
                      <a href="#" className="text-primary hover:text-secondary mt-2">Become a volunteer</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contenu des onglets à droite */}
            <div className="w-full lg:w-1/2 px-4">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Our Mission" key="1">
                  <div className="info">
                    <h2 className="text-2xl font-bold">Bringing water, food & home to people in developing countries.</h2>
                    <p className="mt-4">
                      Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.
                    </p>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-center">
                        <h5 className="text-xl font-bold mr-2">168K</h5>
                        <span>Plants Protected</span>
                      </li>
                      <li className="flex items-center">
                        <h5 className="text-xl font-bold mr-2">5M Ton</h5>
                        <span>Water Conserved</span>
                      </li>
                      <li className="flex items-center">
                        <h5 className="text-xl font-bold mr-2">37K Sqmi.</h5>
                        <span>Ocean Protected</span>
                      </li>
                    </ul>
                    <Button type="primary" className="mt-6">Read More</Button>
                  </div>
                </TabPane>
                <TabPane tab="Our Vision" key="2">
                  <div className="info">
                    <h2 className="text-2xl font-bold">We are focused on restoring curable sight impairment worldwide</h2>
                    <p className="mt-4">
                      Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel.
                    </p>
                    <div className="progress-items mt-6">
                      <div className="mb-4">
                        <h5>Completed program <span className="float-right">88%</span></h5>
                        <Progress percent={88} />
                      </div>
                      <div>
                        <h5>Program for this month <span className="float-right">95%</span></h5>
                        <Progress percent={95} />
                      </div>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignages */}
      <div className="testimonials-area carousel-shadow bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <div className="site-heading mb-10">
            <h5 className="text-lg font-semibold">Testimonials</h5>
            <h2 className="text-3xl font-bold">What people say <br /> About Poora</h2>
            <div className="heading-divider mx-auto"></div>
          </div>
          <div className="testimonial-items flex space-x-6 overflow-x-scroll no-scrollbar">
            {["Jeckey Pura", "Benil Sraw", "Adam Blaur"].map((name, idx) => (
              <div key={idx} className="item bg-white p-6 rounded shadow-lg min-w-1/3">
                <div className="top-info flex items-center mb-4">
                  <i className="flaticon-left-quote-1 text-2xl text-primary"></i>
                  <div className="provider ml-4">
                    <h4 className="text-xl font-semibold">{name}</h4>
                    <span className="text-sm text-gray-500">Volunteer</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Numerous indulged distance humoured prefer you. Take dear to go and its far off him she particular. You may require for many seek end wish you. 
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Que faisons-nous */}
      <div className="wedo-area default-padding py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="thumb">
                <img src="assets/img/800x1000.png" alt="Thumb" className="rounded mb-4" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="info">
                <h5 className="text-lg font-semibold">What we do</h5>
                <h2 className="text-3xl font-bold mb-4">We Donate to charity causes around the world.</h2>
                <p className="mb-6">
                  Continual say suspicion provision you neglected sir curiosity unwilling. Simplicity end themselves increasing led day sympathize yet. General windows effects not are drawing man garrets.
                </p>
                <ul className="wedo-carousel flex space-x-6 overflow-x-scroll no-scrollbar">
                  {[
                    { icon: 'flaticon-water-bottle', title: 'Water Delivery', description: 'Taken now you him trees tears any. Her object giving end sister except oppose.' },
                    { icon: 'flaticon-pharmacy', title: 'Medicine Help', description: 'Taken now you him trees tears any. Her object giving end sister except oppose.' },
                    { icon: 'flaticon-planet-earth', title: 'Save Plants', description: 'Taken now you him trees tears any. Her object giving end sister except oppose.' },
                    { icon: 'flaticon-home', title: 'Build & Create', description: 'Taken now you him trees tears any. Her object giving end sister except oppose.' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex-shrink-0 bg-white p-6 rounded shadow-lg min-w-1/3">
                      <i className={`${item.icon} text-4xl text-primary mb-4`}></i>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SocialBonds;
