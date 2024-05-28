// import React from 'react'
import HeaderTop from '../../components/HeaderTop'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Components_AllPages/Breadcrumb'
import BlogAllPages from '../../components/Components_AllPages/BlogAllPages'
import Footer from '../../components/Footer'
import { useState } from 'react'
import PropTypes from 'prop-types';
// import Table from '../../components/Components_AllPages/TableProjet'
// import { Sidebar } from '../dashBoardSponsor/index'

const AllProjets = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const projects = [
    {
      id: 1,
      nom: 'Projet A',
      description: 'Description A',
      montant: 1000,
      duree: '6 mois'
    },
    {
      id: 2,
      nom: 'Projet B',
      description: 'Description B',
      montant: 2000,
      duree: '12 mois'
    },
    // Ajoutez plus de projets ici
  ];

  const handleSearch = ({ searchTerm, minAmount, maxAmount, specificAmount }) => {
    let results = projects;

    if (searchTerm) {
      results = results.filter(project =>
        project.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (specificAmount) {
      results = results.filter(project => project.montant == specificAmount);
    }

    if (minAmount && maxAmount) {
      results = results.filter(project =>
        project.montant >= minAmount && project.montant <= maxAmount
      );
    }

    setFilteredProjects(results);
  };

  const handleSort = (field, order) => {
    const sortedProjects = [...filteredProjects].sort((a, b) => {
      if (order === 'asc') {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
    setFilteredProjects(sortedProjects);
  };

  return (
    <div>
      <Header />
      <HeaderTop />
      <Breadcrumb />
      <div className='flex flex-row mb-10'>
        <div className='w-[25%]'>
          <SearchAndFilter onSearch={handleSearch} onSort={handleSort} />
        </div>
        <div className='flex-1 m-10'>
          <BlogAllPages projects={filteredProjects.length ? filteredProjects : projects} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AllProjets;
// -------------------------------------------------------------



const SearchAndFilter = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [specificAmount, setSpecificAmount] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearch = () => {
    onSearch({ searchTerm, minAmount, maxAmount, specificAmount });
  };

  const handleSort = (field) => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
    onSort(field, order);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Rechercher par mot-clé</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Rechercher par montant spécifique</label>
        <input
          type="number"
          value={specificAmount}
          onChange={(e) => setSpecificAmount(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Rechercher par tranche de montant</label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={minAmount}
            onChange={(e) => setMinAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxAmount}
            onChange={(e) => setMaxAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Rechercher
      </button>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Trier par</label>
        <div className="space-y-2">
          <button
            onClick={() => handleSort('nom')}
            className="w-full bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200"
          >
            Nom {sortField === 'nom' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
          <button
            onClick={() => handleSort('duree')}
            className="w-full bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200"
          >
            Durée {sortField === 'duree' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
          <button
            onClick={() => handleSort('montant')}
            className="w-full bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200"
          >
            Montant {sortField === 'montant' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
        </div>
      </div>
    </div>
  );
};




SearchAndFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};







































// function AllItems() {
//   return (
//     <>
//       <div className="  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

//         <div className="mt-8  lg:hidden">
//           <button
//             className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
//           >
//             <span className="text-sm font-medium"> Filters & Sorting </span>

//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="size-4 rtl:rotate-180"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//             </svg>
//           </button>
//         </div>

//         <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
//           <div className="hidden space-y-4 lg:block">
//             <div>
//               <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>

//               <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm">
//                 <option>Sort By</option>
//                 <option value="Title, DESC">Title, DESC</option>
//                 <option value="Title, ASC">Title, ASC</option>
//                 <option value="Price, DESC">Price, DESC</option>
//                 <option value="Price, ASC">Price, ASC</option>
//               </select>
//             </div>

//             <div>
//               <p className=" text-xs font-medium text-gray-700">Filters</p>

//               <div className="mt-1 space-y-2">
//                 <details
//                   className="overflow-hidden rounded border border-gray-300 "
//                 >
//                   <summary
//                     className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
//                   >
//                     <span className="text-sm font-medium"> Availability </span>

//                     <span className="transition group-open:-rotate-180">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="h-4 w-4"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                         />
//                       </svg>
//                     </span>
//                   </summary>

//                   <div className="border-t border-gray-200 bg-white">
//                     <header className="flex items-center justify-between p-4">
//                       <span className="text-sm text-gray-700"> 0 Selected </span>

//                       <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
//                         Reset
//                       </button>
//                     </header>

//                     <ul className="space-y-1 border-t border-gray-200 p-4">
//                       <li>
//                         <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             id="FilterInStock"
//                             className="size-5 rounded border-gray-300"
//                           />

//                           <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
//                         </label>
//                       </li>

//                       <li>
//                         <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             id="FilterPreOrder"
//                             className="size-5 rounded border-gray-300"
//                           />

//                           <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
//                         </label>
//                       </li>

//                       <li>
//                         <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             id="FilterOutOfStock"
//                             className="size-5 rounded border-gray-300"
//                           />

//                           <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
//                         </label>
//                       </li>
//                     </ul>
//                   </div>
//                 </details>

//                 <details
//                   className="overflow-hidden rounded border border-gray-300 "
//                 >
//                   <summary
//                     className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
//                   >
//                     <span className="text-sm font-medium"> Price </span>

//                     <span className="transition group-open:-rotate-180">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="h-4 w-4"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                         />
//                       </svg>
//                     </span>
//                   </summary>

//                   <div className="border-t border-gray-200 bg-white">
//                     <header className="flex items-center justify-between p-4">
//                       <span className="text-sm text-gray-700"> The highest price is $600 </span>

//                       <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
//                         Reset
//                       </button>
//                     </header>

//                     <div className="border-t border-gray-200 p-4">
//                       <div className="flex justify-between gap-4">
//                         <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
//                           <span className="text-sm text-gray-600">$</span>

//                           <input
//                             type="number"
//                             id="FilterPriceFrom"
//                             placeholder="From"
//                             className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
//                           />
//                         </label>

//                         <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
//                           <span className="text-sm text-gray-600">$</span>

//                           <input
//                             type="number"
//                             id="FilterPriceTo"
//                             placeholder="To"
//                             className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
//                           />
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </details>

//                 <details
//                   className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
//                 >
//                   <summary
//                     className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
//                   >
//                     <span className="text-sm font-medium"> Colors </span>

//                     <span className="transition group-open:-rotate-180">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="h-4 w-4"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                         />
//                       </svg>
//                     </span>
//                   </summary>

//                   <div className="border-t border-gray-200 bg-white">
//                     <header className="flex items-center justify-between p-4">
//                       <span className="text-sm text-gray-700"> 0 Selected </span>

//                       <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
//                         Reset
//                       </button>
//                     </header>

//                     <ul className="space-y-1 border-t border-gray-200 p-4">
//                       <li>
//                         <label htmlFor="FilterRed" className="inline-flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             id="FilterRed"
//                             className="size-5 rounded border-gray-300"
//                           />

//                           <span className="text-sm font-medium text-gray-700"> Red </span>
//                         </label>
//                       </li>

//                       <li>
//                         <label htmlFor="FilterBlue" className="inline-flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             id="FilterBlue"
//                             className="size-5 rounded border-gray-300"
//                           />

//                           <span className="text-sm font-medium text-gray-700"> Blue </span>
//                         </label>
//                       </li>

//                       <li>
//                         <label htmlFor="FilterGreen" className="inline-flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             id="FilterGreen"
//                             className="size-5 rounded border-gray-300"
//                           />

//                           <span className="text-sm font-medium text-gray-700"> Green </span>
//                         </label>
//                       </li>

//                       <li>
//                         <label htmlFor="FilterOrange" className="inline-flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             id="FilterOrange"
//                             className="size-5 rounded border-gray-300"
//                           />

//                           <span className="text-sm font-medium text-gray-700"> Orange </span>
//                         </label>
//                       </li>

//                       <li>
//                         <label htmlFor="FilterPurple" className="inline-flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             id="FilterPurple"
//                             className="size-5 rounded border-gray-300"
//                           />

//                           <span className="text-sm font-medium text-gray-700"> Purple </span>
//                         </label>
//                       </li>

//                       <li>
//                         <label htmlFor="FilterTeal" className="inline-flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             id="FilterTeal"
//                             className="size-5 rounded border-gray-300"
//                           />

//                           <span className="text-sm font-medium text-gray-700"> Teal </span>
//                         </label>
//                       </li>
//                     </ul>
//                   </div>
//                 </details>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }


