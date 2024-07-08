import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Qu'est-ce qu'un Social Bond dans le contexte de la RSE Market Place ?",
      answer: (
        <>
          <p>
            Un <strong>Social Bond</strong> est une unité de mesure financière utilisée pour les investissements dans des projets sociaux via la RSE Market Place. Chaque bond représente une contribution spécifique à un projet social soumis par un prestataire accrédité. En général, 1 Social Bond équivaut à 1000 USD, permettant aux sponsors de quantifier et de suivre leur engagement en matière de responsabilité sociale.
          </p>
        </>
      )
    },
    {
      question: "Comment les Social Bonds sont-ils utilisés pour financer les projets sociaux ?",
      answer: (
        <>
          <p>
            Les Social Bonds permettent aux sponsors d'investir dans divers projets en achetant des bonds. Par exemple, une entreprise peut diversifier son portefeuille en allouant différents bonds à divers projets selon leurs besoins et impacts potentiels. Le nombre de bonds détenus par une entreprise reflète son engagement social. Les fonds collectés sont utilisés pour financer des projets en accord avec les standards de qualité et d'impact établis par la RSE Market Place.
          </p>
        </>
      )
    },
    {
      question: "Quels sont les avantages pour une entreprise d'investir dans des Social Bonds ?",
      answer: (
        <>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Visibilité :</strong> Les entreprises augmentent leur visibilité et crédibilité en participant activement à des projets sociaux.
            </li>
            <li>
              <strong>Faible Risque :</strong> Investir dans des Social Bonds est considéré comme à faible risque car les projets sont bien évalués et les prestataires sont accrédités.
            </li>
            <li>
              <strong>Reconnaissance :</strong> Les entreprises obtiennent une reconnaissance pour leurs contributions via les rapports annuels et les RSE Awards.
            </li>
            <li>
              <strong>Impact Positif :</strong> Les investissements permettent de soutenir des causes sociales et environnementales significatives, contribuant à un impact positif durable.
            </li>
          </ul>
        </>
      )
    },
    {
      question: "Comment les performances des projets financés par des Social Bonds sont-elles évaluées ?",
      answer: (
        <>
          <p>
            Les performances des projets sont évaluées en fonction de leur <strong>impact social</strong> et de leur <strong>efficacité</strong>. Cela inclut des critères comme la qualité de la mise en œuvre, l'atteinte des objectifs sociaux, l'innovation, et la durabilité des résultats. La Fondation Entreprendre et la Fondation SARA jouent un rôle clé en surveillant et en régulant le processus, garantissant ainsi la transparence et l'intégrité de chaque projet financé.
          </p>
        </>
      )
    },
    {
      question: "Comment une entreprise peut-elle commencer à investir dans des Social Bonds ?",
      answer: (
        <>
          <p>
            Pour commencer à investir dans des Social Bonds, une entreprise doit d'abord <strong>identifier des projets</strong> alignés avec ses objectifs de RSE sur la RSE Market Place. Ensuite, elle peut acheter des Social Bonds correspondant à ces projets. Chaque bond acheté permet de financer une partie du projet choisi. Les entreprises peuvent suivre l'impact de leur investissement à travers les rapports fournis par la Fondation SARA et la Fondation Entreprendre, qui supervisent le processus de bout en bout.
          </p>
          <p>
            Pour plus d'informations ou pour démarrer, contactez-nous à <a href="mailto:fondationentreprendrerdc@gmail.com" className="text-[#3bcf93] hover:underline">fondationentreprendrerdc@gmail.com</a> ou appelez le +243 820 294 352.
          </p>
        </>
      )
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-area py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h5 className="text-lg font-semibold text-[#3bcf93] mb-2">FAQ</h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            As-tu des questions ?
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#3bcf93] mx-auto"></div>
        </div>
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <h4 className="text-base sm:text-lg md:text-xl">
                <button
                  className="py-8 px-4 sm:py-4 sm:px-6 text-left w-full flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex-1 pr-2 sm:pr-4">{item.question}</span>
                  <svg
                    className={`w-5 sm:w-6 h-5 sm:h-6 text-[#3bcf93] transform transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </h4>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 py-4 px-4 sm:px-6' : 'max-h-0'
                }`}
              >
                <div className="text-gray-600">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
