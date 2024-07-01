{/* Section Breadcrumb avec effet parallaxe */}
<div
className="breadcrumb-area relative text-center shadow-lg p-12 bg-cover bg-center"
style={{
  backgroundImage: "url(/sotradonsImage/35.jpg)",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}}
>
<div className="absolute inset-0 bg-black opacity-40"></div>
<div className="relative container mx-auto z-10">
  <div className="breadcrumb-items">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Contactez-nous
    </h2>
    <nav className="text-white">
      <a href="/" className="hover:underline">Accueil</a> &gt; <span>Contactez-nous</span>
    </nav>
  </div>
</div>
</div>

bg-gray-100 py-12
bg-gray-100 py-16

import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

// Dans le rendu, juste avant le Footer
<BackTop>
        <div className="flex items-center justify-center w-12 h-12 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 active:bg-primary-700 transition-all duration-300 ease-in-out animate-bounce">
          <ArrowUpOutlined className="text-xl" />
        </div>
      </BackTop>

{/* <div className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                type="primary"
                shape="round"
                size="large"
                className="bg-[#3bcf93] border-none hover:bg-[#2eaf7a] transition-colors duration-300"
              >
                Adhérez à la charte
              </Button>
            </motion.div>
          </div> */}



          const chartePoints = [
            {
              title: "ENGAGEMENT ENVERS LA MISSION",
              content: "Les membres de SOTRADONS s'engagent à soutenir la mission de l'organisation, qui vise à promouvoir la solidarité, la transparence et les dons pour des causes humanitaires.",
              icon: "🎯"
            },
            {
              title: "PERFORMANCE AU TRAVAIL",
              content: "Les membres doivent faire preuve de dévouement, de professionnalisme et de compétence dans l'exécution de leurs responsabilités, contribuant ainsi à la réussite des initiatives de SOTRADONS.",
              icon: "💼"
            },
            {
              title: "INTÉGRITÉ PERSONNELLE",
              content: "L'intégrité personnelle est cruciale. Les membres doivent agir de manière honnête, éthique et respectueuse dans toutes leurs interactions au sein de l'organisation et avec les parties prenantes externes.",
              icon: "🤝"
            },
            {
              title: "FINANCIÈRE TRANSPARENCE",
              content: "Les membres doivent garantir une transparence totale dans la gestion des fonds et des ressources, en fournissant des rapports financiers clairs et réguliers conformes aux normes éthiques et légales.",
              icon: "💰"
            },
            {
              title: "RESPECT DE LA DIVERSITÉ",
              content: "SOTRADONS valorise la diversité. Les membres doivent respecter et promouvoir l'inclusion, en reconnaissant et en appréciant les différences culturelles, sociales et individuelles.",
              icon: "🌈"
            },
            {
              title: "RESPONSABILITÉ ENVIRONNEMENTALE",
              content: "Les membres s'engagent à minimiser leur impact environnemental et à adopter des pratiques responsables, contribuant ainsi à la durabilité des initiatives de SOTRADONS.",
              icon: "🌿"
            },
            {
              title: "COLLABORATION ET ESPRIT D'ÉQUIPE",
              content: "La collaboration est essentielle. Les membres doivent travailler de manière coopérative avec leurs collègues, partenaires et bénévoles pour maximiser l'impact positif des actions de SOTRADONS.",
              icon: "🤗"
            },
            {
              title: "COMMUNICATION TRANSPARENTE",
              content: "La communication ouverte et transparente est encouragée. Les membres doivent partager des informations de manière régulière et honnête avec l'équipe, les partenaires et les donateurs.",
              icon: "📢"
            },
            {
              title: "APPRENTISSAGE CONTINU",
              content: "Les membres doivent chercher à améliorer constamment leurs compétences et connaissances, restant informés sur les meilleures pratiques dans le domaine de la solidarité et des actions humanitaires.",
              icon: "📚"
            },
            {
              title: "ÉVALUATION ET ADAPTATION",
              content: "Les membres doivent participer activement aux processus d'évaluation et d'amélioration continue, contribuant ainsi à l'efficacité globale de SOTRADONS.",
              icon: "📊"
            },
          ];


          <div className="min-h-screen bg-slate-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md relative">