import { Progress, Button } from 'antd';
import 'animate.css';
import { NavLink } from 'react-router-dom';
import SbIcon from './Social Bonds/SbIcon';

export default function AboutArea() {
  return (
    <div className="about-area bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Section des causes populaires */}
          <div className="popular-causes">
            <h4 className="text-2xl font-bold mb-6">
              <i className="fas fa-bolt mr-2"></i> Causes populaires
            </h4>
            <div className="flex flex-col space-y-8">
              <CauseItem
                image="/Mission/l’éducation (2).jpg"
                category="Education"
                title="Donner l’éducation en République Démocratique du Congo"
                raised={6230}
                goal={8400}
                percent={87}
              />
              <CauseItem
                image="/Mission/l’eau pour tous (2).jpg"
                category="Water"
                title="De l’eau pour tous les enfants"
                raised={970}
                goal={1800}
                percent={55}
              />
              <CauseItem
                image="/Mission/Nourriture saine (2).jpg"
                category="Food"
                title="Nourriture saine"
                raised={2400}
                goal={4300}
                percent={77}
              />
            </div>
          </div>

          {/* Contenu de la section d'informations */}
          <div className="info lg:pl-8">
            <h5 className="text-lg font-bold mb-4">Qui sommes-nous</h5>
            <h2 className="text-4xl font-bold text-blur mb-4">À propos</h2>
            <h2 className="text-4xl font-bold area-title mb-8">
              La RSE Market Place by Gouvernix
            </h2>
            <p className="mb-4 leading-relaxed">
              Notre plateforme est conçue comme un marché innovant où les grandes entreprises peuvent investir dans des projets socialement viables, favorisant le développement durable et la transformation sociale.
            </p>
            <p className="mb-8 leading-relaxed">
              Nous visons à combler le manque de financements pour des projets sociaux en République Démocratique du Congo en facilitant les collaborations entre les sponsors et les prestataires sociaux via notre plateforme dédiée.
            </p>
            <ul className="flex space-x-8 mb-8">
              <InfoItem count="16K" label="Plantes protégées" />
              <InfoItem count="2M Ton" label="Eau économisés" />
              <InfoItem count="7K Sqmi." label="Ocean Protégé" />
            </ul>
            <NavLink to="/about">
              <Button
                type="primary"
                size="large"
                className="btn-theme inline-block animate__animated animate__fadeInUp animate__delay-1s"
              >
                En savoir plus
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant pour les items de cause
function CauseItem({ image, category, title, raised, goal, percent }) {
  return (
    <NavLink to="/allprojets">
      <div className="flex space-x-6 animate__animated animate__fadeIn">
        <div className="w-1/3">
          <img src={image} alt="Thumb" className="rounded-lg" />
        </div>
        <div className="w-2/3">
          <span className="block text-sm text-gray-500">{category}</span>
          <h4 className="text-lg font-bold mb-2">
            <a href="#" className="hover:text-blue-600">
              {title}
            </a>
          </h4>
          <div className="progress-box">
            <p>
            Collecté : {raised}<SbIcon  color="#52c41a" /> <span className="float-right">Objectif : {goal}<SbIcon color="#ff9800" /></span>
            </p>
            <Progress percent={percent} showInfo={false} />
            <span className="block text-sm mt-2">Collecte de fonds : {percent}%</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

// Composant pour les items d'informations
function InfoItem({ count, label }) {
  return (
    <li className="text-center animate__animated animate__fadeInUp">
      <h5 className="text-2xl font-bold">{count}</h5>
      <span>{label}</span>
    </li>
  );
}
