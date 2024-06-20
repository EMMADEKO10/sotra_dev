import { Carousel } from 'antd';
import React from 'react';
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

  // Simuler la génération aléatoire de 25 événements
  const generateEvents = () => {
    const events = [];

    for (let i = 0; i < 25; i++) {
      const randomIndex = Math.floor(Math.random() * Object.keys(eventDescriptions).length);
      const eventName = Object.keys(eventDescriptions)[randomIndex];
      const eventDate = getRandomDate();
      const eventTime = getRandomTime();
      const eventImage = `/img/event-${i % 3 + 1}.jpg`; // Random image selection
      const eventDescription = eventDescriptions[eventName];

      const event = (
        <div className="event-item rounded-lg overflow-hidden shadow-md" key={i}>
          <div className="event-thumb relative">
            {/* <img src={eventImage} alt="Event Thumbnail" className="w-full h-auto" /> */}
            <div
              className="date absolute top-2 left-2 bg-white rounded-full py-1 px-2"
              style={{ border: "1px solid #3bcf93", background: "transparent" }}
            >
              {eventDate}
            </div>
          </div>
          <div className="event-info p-4">
          <div className="time text-gray-600 mb-2 pt-4">
              <i className="fas fa-clock"></i> {eventTime}
            </div>
            <h4 className="event-title text-xl lg:text-2xl font-semibold mb-2">
              {eventName}
            </h4>
            <p className="event-description text-gray-700 mb-4">
              {eventDescription}
            </p>
            {/* <a
              className="btn btn-theme border btn-md hover:bg-gray-200 inline-block animate__animated animate__fadeInUp lg:animate__delay-1s"
              href="#"
            >
              En savoir plus
            </a> */}
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
    <div className="event-area bg-gray-100 py-12">
      <div className="shape-bottom-left absolute z-0">
        <img src="/shape/8.png" alt="Shape" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate__animated animate__fadeInLeft lg:animate__delay-1s">
            <h5 className="text-lg text-gray-600 font-semibold mb-2">Événements à venir à ne pas manquer</h5>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Découvrez nos initiatives futures et engagez-vous pour une cause qui compte
            </h2>
          </div>
          <div className="animate__animated animate__fadeInRight lg:animate__delay-1s">
            <p className="text-gray-700 mb-4">
              Notre engagement pour le progrès social guide chacune de nos actions. Explorez les événements locaux à venir et participez à notre mouvement pour un changement positif en République Démocratique du Congo.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 relative z-10">
        <Carousel autoplay dots={false}>
          {generateEvents()}
        </Carousel>
      </div>
    </div>
  );
}
