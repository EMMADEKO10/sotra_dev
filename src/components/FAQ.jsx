import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Qu'est-ce que la RSE Market Place by Gouvernix propose aux grandes entreprises ?",
      answer: (
        <>
          <p>
            La RSE Market Place by Gouvernix offre aux grandes entreprises un marché innovant pour investir dans des projets socialement viables. Cela favorise le développement durable et la transformation sociale en facilitant les collaborations entre les entreprises et les prestataires sociaux.
          </p>
        </>
      )
    },
    {
      question: "Comment la Fondation SARA assure-t-elle l'intégrité du processus de sélection des projets ?",
      answer: (
        <>
          <p>
            La Fondation SARA agit en tant qu'opérateur en évaluant rigoureusement les projets soumis par les prestataires sociaux. Elle garantit que seuls les projets de haute qualité et à fort impact sont présentés aux sponsors via la RSE Market Place.
          </p>
        </>
      )
    },
    {
      question: "Quels sont les objectifs à court terme de la RSE Market Place by Gouvernix ?",
      answer: (
        <>
          <p>
            À court terme, la RSE Market Place vise à établir une plateforme robuste pour la soumission, l'évaluation et le financement des projets sociaux. Elle organise également des événements périodiques pour sensibiliser et mobiliser les entreprises et les acteurs de la RSE.
          </p>
        </>
      )
    },
    {
      question: "Comment la RSE Market Place encourage-t-elle l'innovation sociale ?",
      answer: (
        <>
          <p>
            La RSE Market Place aspire à devenir le principal hub d'innovation sociale, en encourageant les entreprises à soutenir des projets innovants ayant un impact positif et durable sur la société et l'environnement.
          </p>
        </>
      )
    },
    {
      question: "Quels sont les critères de performance utilisés pour évaluer l'impact des projets financés ?",
      answer: (
        <>
          <p>
            Les projets sont évalués selon leur impact social, leur durabilité, leur capacité à atteindre les objectifs fixés, ainsi que leur degré d'innovation. Cette évaluation est essentielle pour maximiser la contribution des projets soutenus au bien-être communautaire et environnemental.
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
