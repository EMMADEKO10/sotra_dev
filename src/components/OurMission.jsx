import { Button } from 'antd';
// import 'antd/dist/antd.css'; // Import des styles Ant Design
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function OurMission() {
  return (
    <div className="mission-area bg-gray py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Section Image */}
          <div className="animate__animated animate__fadeInLeft relative overflow-hidden rounded-lg shadow-lg">
            <img
              className="object-cover object-center w-full h-full"
              src="/sotradonsImage/38.png"
              alt="Thumb"
            />
            {/* Centrage du bouton play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://youtu.be/KgMJ3-RByMA?t=1434"
                className="popup-youtube light video-play-button"
              >
                <Button
                  type="primary"
                  shape="circle"
                  icon={<i className="fa fa-play text-black text-2xl"></i>}
                />
              </a>
            </div>
          </div>

          {/* Section Texte */}
          <div className="info animate__animated animate__fadeInRight">
            <h5 className="text-lg text-gray-600 font-medium mb-2">Notre Mission</h5>
            <h2 className="text-3xl font-bold mb-4">Faciliter la connexion entre grandes entreprises et initiatives sociales innovantes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre mission est de créer un pont entre les grandes entreprises et les initiatives sociales innovantes, favorisant un impact positif et durable dans notre société. Nous nous engageons à promouvoir des pratiques responsables et éthiques, tout en soutenant des projets qui contribuent au bien-être social et environnemental.
            </p>
            <h4 className="text-lg font-medium text-gray-600 mb-2">Nos Priorités Stratégiques</h4>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-gray-700">Promouvoir la protection des organismes de bienfaisance contre les abus et la mauvaise gestion.</li>
              <li className="text-gray-700">Aider les fiduciaires à gérer efficacement leurs organisations caritatives.</li>
              <li className="text-gray-700">Encourager la transparence et la responsabilisation au sein de notre réseau.</li>
            </ul>
            <NavLink to="/contact">
              <Button
                type="primary"
                size="large"
                className="btn-theme inline-block animate__animated animate__fadeInUp animate__delay-1s"
              >
                Rejoignez-nous
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
