// import React from 'react'
import HeaderTop from "../../components/HeaderTop"
import Header from "../../components/Header"
import Breadcrumb from "../../components/Components_AllPages/Breadcrumb"
import Footer from "../../components/Footer"

import { useParams } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: 'Lasting out end article express fortune demands own charmed',
        imgSrc: 'assets/img/media/Photo _ Neil Palmer (CIAT) Flickr CC.jpeg', 
        tags: ['Poor', 'Health'],
        date: '05 Dec, 2020',
        author: 'Park Lee',
        description: 'Detailed description of the project...',
    },
    {
        id: 2,
        title: 'Surprise steepest recurred landlord mr wandered',
        imgSrc: 'assets/img/media/medium-shot-woman-posing-outdoors.jpg',
        tags: ['Education', 'Donate'],
        date: '26 Sep, 2020',
        author: 'Park Lee',
        description: 'Detailed description of the project...',
    },
    // Ajoutez plus de projets ici si nécessaire
];


export default function Sponsorise() {
  return (
    <div>
          <HeaderTop />
          <Header />
          <Breadcrumb />
          <div className='flex flex-row mb-10'>
              {/* <Sidebar /> */}
              {/* <AllItems /> */}
              <div className='w-[25%]'></div>
              <div className='m-10'>
                  <ProjectDetails />
                  
              </div>


          </div>
          {/* <AllItems /> */}
          <Footer />

    </div>
  )
}




export function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find(proj => proj.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <img src={project.imgSrc} alt="Project" className="w-full mb-4" />
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-col">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                    Montant à payer
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount"
                    type="number"
                    placeholder="Entrez le montant"
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                    type="button"
                >
                    Financer
                </button>
            </div>
        </div>
    );
}

