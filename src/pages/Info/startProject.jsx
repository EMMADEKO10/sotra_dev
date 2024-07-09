import React from 'react';
import { Carousel } from 'antd';
import 'animate.css';

export default function EventArea() {
// Définition des titres d'événements avec leurs descriptions correspondantes
const eventDescriptions = {
  "Amélioration des infrastructures éducatives dans les régions rurales": "Amélioration des infrastructures éducatives dans les régions rurales, visant à fournir un meilleur accès à l'éducation pour les communautés éloignées.",
  "Campagne de sensibilisation sur la santé maternelle": "Campagne de sensibilisation visant à promouvoir la santé maternelle et à réduire les taux de mortalité maternelle dans les zones défavorisées.",
  "Distribution de kits d'hygiène dans les zones défavorisées": "Distribution de kits d'hygiène pour améliorer les conditions sanitaires dans les zones défavorisées et prévenir les maladies.",
  "Séminaire sur l'entrepreneuriat social pour les jeunes": "Séminaire visant à inspirer et à éduquer les jeunes sur l'entrepreneuriat social pour stimuler le développement économique local.",
  "Plantation d'arbres pour lutter contre le changement climatique": "Initiative de plantation d'arbres pour restaurer l'écosystème local et lutter contre les effets du changement climatique.",
  "Formation professionnelle pour les femmes en situation de précarité": "Programme de formation visant à renforcer les compétences professionnelles des femmes en situation de précarité économique.",
  "Journée de nettoyage des plages pour la préservation de l'environnement": "Journée dédiée au nettoyage des plages pour sensibiliser à la préservation de l'environnement côtier.",
  "Clinique mobile pour les soins de santé primaires": "Clinique mobile offrant des services de santé primaires pour les communautés éloignées et difficilement accessibles.",
  "Ateliers de sensibilisation sur les droits des enfants": "Ateliers éducatifs visant à informer et à protéger les droits des enfants dans la société.",
  "Programme de micro-financement pour les petites entreprises locales": "Programme de micro-financement pour soutenir le démarrage et la croissance des petites entreprises locales.",
  "Exposition d'art au profit des initiatives sociales": "Exposition artistique pour sensibiliser et collecter des fonds pour des initiatives sociales locales.",
  "Conférence sur l'éducation numérique pour les enseignants": "Conférence visant à améliorer les compétences numériques des enseignants pour une meilleure éducation.",
  "Collecte de fonds pour l'accès à l'eau potable dans les villages": "Collecte de fonds pour financer l'accès à l'eau potable dans les villages isolés.",
  "Ateliers de formation agricole pour une agriculture durable": "Ateliers de formation pour promouvoir des pratiques agricoles durables et améliorer la sécurité alimentaire.",
  "Séminaire sur les énergies renouvelables et leur impact": "Séminaire sur l'adoption des énergies renouvelables pour réduire l'empreinte carbone et promouvoir la durabilité.",
  "Visite médicale gratuite pour les personnes âgées": "Initiative de santé publique offrant des soins médicaux gratuits aux personnes âgées de la communauté.",
  "Compétition sportive pour la cohésion sociale": "Compétition sportive visant à renforcer la cohésion sociale et promouvoir un mode de vie sain.",
  "Journée de sensibilisation à la protection des animaux sauvages": "Journée de sensibilisation pour la protection et la conservation des espèces animales menacées.",
  "Forum sur l'innovation sociale et technologique": "Forum réunissant des leaders d'opinion pour discuter de l'innovation sociale et technologique.",
  "Cours de secourisme pour les bénévoles": "Formation en premiers secours pour préparer les bénévoles à intervenir en cas d'urgence.",
  "Distribution de fournitures scolaires aux enfants démunis": "Distribution de fournitures scolaires essentielles pour soutenir l'éducation des enfants défavorisés.",
  "Campagne de vaccination pour les communautés isolées": "Campagne visant à assurer une couverture vaccinale complète dans les communautés isolées.",
  "Spectacle de théâtre pour sensibiliser sur les droits des femmes": "Spectacle théâtral pour sensibiliser et promouvoir les droits et l'égalité des femmes.",
  "Hackathon pour développer des solutions numériques sociales": "Hackathon pour encourager l'innovation numérique au service du bien social.",
  "Course caritative pour soutenir les victimes de catastrophes naturelles": "Course caritative pour collecter des fonds en faveur des victimes de catastrophes naturelles et soutenir la reconstruction."
};

  const generateEvents = () => {
    const events = [];

    for (let i = 0; i < 25; i++) {
      const randomIndex = Math.floor(Math.random() * Object.keys(eventDescriptions).length);
      const eventName = Object.keys(eventDescriptions)[randomIndex];
      const eventDate = getRandomDate();
      const eventTime = getRandomTime();
      const eventDescription = eventDescriptions[eventName];

      const event = (
        <div className="event-item bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1" key={i}>
          <div className="event-thumb relative">
            <div className="date absolute top-4 left-4 bg-[#3bcf93] text-white rounded-full py-2 px-4 font-semibold">
              {eventDate}
            </div>
          </div>
          <div className="event-info p-6">
            <div className="time text-gray-600 mb-2">
              <i className="fas fa-clock mr-2"></i> {eventTime}
            </div>
            <h4 className="event-title text-xl font-bold mb-3 text-gray-800">
              {eventName}
            </h4>
            <p className="event-description text-gray-600 mb-4 line-clamp-3">
              {eventDescription}
            </p>
            <button className="btn bg-[#3bcf93] text-white py-2 px-4 rounded-full hover:bg-[#2aa77b] transition-colors duration-300">
              En savoir plus
            </button>
          </div>
        </div>
      );

      events.push(event);
    }

    return events;
  };

  // Générer une date aléatoire pour simuler les événements à venir
  const getRandomDate = () => {
    const day = Math.floor(Math.random() * 28) + 1; // Random day between 1 and 28
    const month = getRandomMonth();
    return `${day} ${month}`;
  };

  // Générer un mois aléatoire pour les événements
  const getRandomMonth = () => {
    const months = ["Janv", "Fév", "Mars", "Avr", "Mai", "Juin", "Juillet", "Août", "Sept", "Oct", "Nov", "Déc"];
    const randomIndex = Math.floor(Math.random() * months.length);
    return months[randomIndex];
  };

  // Générer une heure aléatoire pour les événements
  const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 12) + 8; // Random hour between 8 and 19
    const minutes = Math.floor(Math.random() * 2) * 30; // Either 0 or 30 minutes
    const period = hours >= 12 ? "pm" : "am";
    return `${hours}:${minutes === 0 ? "00" : minutes} ${period}`;
  };


  return (
    <section className="event-area py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-lg font-semibold text-[#3bcf93] mb-2">Événements à venir</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Découvrez nos initiatives futures
          </h2>
          <div className="w-20 h-1 bg-[#3bcf93] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre engagement pour le progrès social guide chacune de nos actions. Explorez les événements locaux à venir et participez à notre mouvement pour un changement positif en République Démocratique du Congo.
          </p>
        </div>

        <Carousel
          autoplay
          dots={false}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
          className="event-carousel"
        >
          {generateEvents()}
        </Carousel>
      </div>
    </section>
  );
}