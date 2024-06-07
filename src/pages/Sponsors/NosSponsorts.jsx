import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

const NosSponsorts = () => {
  return (
    <div>
    <Navbar />
      {/* Début Fil d'Ariane */}
      <div
        className="text-center shadow-lg text-white bg-cover py-8"
        style={{ backgroundImage: 'url(src/assets/sotradonsImage/10.jpg)', backgroundColor: '#3bcf93' }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Rencontrez nos bénévoles</h2>
        </div>
      </div>
      {/* Fin Fil d'Ariane */}

      {/* Début Section Bénévole */}
      <div className="volunteer-area py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Single Item */}
            {[
              { name: 'Jones Park', role: 'Bénévole', img: 'assets/img/800x800.png' },
              { name: 'Monal Spoa', role: 'Bénévole', img: 'assets/img/800x800.png' },
              { name: 'Devid Blue', role: 'Bénévole', img: 'assets/img/800x800.png' },
              { name: 'Jones Park', role: 'Bénévole', img: 'assets/img/800x800.png' },
              { name: 'Monal Spoa', role: 'Bénévole', img: 'assets/img/800x800.png' },
              { name: 'Devid Blue', role: 'Bénévole', img: 'assets/img/800x800.png' }
            ].map((volunteer, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  <img src={volunteer.img} alt="Thumb" className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <ul className="flex space-x-4 text-white">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold">{volunteer.name}</h4>
                  <span className="text-gray-500">{volunteer.role}</span>
                </div>
              </div>
            ))}
            {/* Fin Single Item */}
          </div>
        </div>
      </div>
      {/* Fin Section Bénévole */}
    <Footer/>
    </div>
  );
};

export default NosSponsorts;
