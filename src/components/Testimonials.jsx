import React from 'react';
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Testimonials = () => {
  const testimonials = [
    {
      content: "En tant que partenaire stratégique de la RSE Market Place, nous avons été impressionnés par l'engagement envers l'innovation sociale et la transparence. La plateforme a facilité des collaborations fructueuses et des investissements à fort impact pour notre organisation.",
      name: "Al Kitenge",
      role: "Partenaire stratégique",
      image: "https://al-legacy.com/wp-content/uploads/2023/02/al_kitenge_profile.jpg"
    },
    {
      content: "Mon expérience avec Sotradons a été enrichissante. J'ai eu l'opportunité de contribuer à des initiatives qui font une réelle différence dans nos communautés. La transparence et l'intégrité sont au cœur de chaque projet soutenu par la RSE Market Place.",
      name: "Sara Ntela",
      role: "Partenaire",
      image: "https://i.pinimg.com/564x/89/47/27/8947270c4a54fad54ca0f1233502db30.jpg"
    },
    {
      content: "La RSE Market Place nous a permis de diversifier nos investissements socialement responsables de manière efficace. Les Social Bonds ont été un outil précieux pour soutenir des projets prometteurs, tout en respectant des standards élevés de qualité et d'impact.",
      name: "Christelle Haridi",
      role: "Directeur financier",
      image: "/path-to-image/christelle-haridi.png"
    }
  ];

  const items = testimonials.map((testimonial, index) => (
    <div key={index} className="mx-4">
      <div className="bg-white shadow-lg rounded-xl p-8 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div>
          <svg className="w-10 h-10 text-[#3bcf93] mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-gray-600 mb-6 line-clamp-4">{testimonial.content}</p>
        </div>
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4 object-cover" src={testimonial.image} alt={testimonial.name} />
          <div>
            <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="testimonials-area py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-lg font-semibold text-[#3bcf93] mb-2">Témoignages</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ce que les gens disent à propos de la RSE Market Place
          </h2>
          <div className="w-20 h-1 bg-[#3bcf93] mx-auto"></div>
        </div>
        <Carousel
          mouseTracking
          items={items}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
          }}
          infinite
          autoPlay
          autoPlayInterval={5000}
          animationDuration={1000}
          disableButtonsControls
        />
      </div>
    </section>
  );
};

export default Testimonials;