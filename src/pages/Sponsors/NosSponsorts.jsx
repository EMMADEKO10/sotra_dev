import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';
import axios from "axios"
import { useEffect,useState } from 'react';

const NosSponsorts = () => {

  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const ApiUrlImage = import.meta.env.VITE_URL_IMAGE;
        console.log("Voci l'api des images : ", ApiUrlImage)
        console.log("Voci l'api des EndPoints : ", apiUrl)

        const response = await axios.get(`${apiUrl}/sponsors`);
        console.log("voici la reponse", response.data)
        setSponsors(response.data)
        // Ajoutez ici la logique pour gérer la réponse de votre backend
        if (response.status === 201) { // Check for successful registration response
          console.log('Connexion réussie ! :')

        } else {
          // Handle unsuccessful registration (e.g., display error message)
        }
      } catch (error) {
        if (error.response) {
          // Erreur avec réponse du serveur
          console.error('Erreur de réponse du serveur:', error.response);

        } else {
          // Erreur de configuration ou autre
          console.error('Erreur lors de la requête:', error.message);
        }
      }

    };
    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures the effect runs only once

  // -----------------------------------------------------------------------------------
  return (
    <div>
    <Navbar />
      {/* Début Fil d'Ariane */}
      <div
        className="text-center shadow-lg text-white bg-cover py-8"
        style={{ backgroundImage: 'url(assets/img/logo-light.png)', backgroundColor: '#3bcf93' }}
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
            {sponsors.map((sponsor, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  <img src={`${import.meta.env.VITE_URL_IMAGE}${sponsor.logo}`} alt="Thumb" className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <ul className="flex space-x-4 text-white">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold">{sponsor.companyName}</h4>
                  <span className="text-gray-500">{sponsor.industry}</span>
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
