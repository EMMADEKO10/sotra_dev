import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero section skeleton */}
      <div className="bg-gray-300 h-64 w-full mb-8 rounded-lg"></div>
      
      {/* Content sections skeleton */}
      {[...Array(3)].map((_, sectionIndex) => (
        <div key={sectionIndex} className="mb-12">
          <div className="bg-gray-300 h-8 w-1/4 mb-4 rounded"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, cardIndex) => (
              <div key={cardIndex} className="bg-gray-300 h-48 rounded-lg"></div>
            ))}
          </div>
        </div>
      ))}
      
      {/* CTA section skeleton */}
      <div className="bg-gray-300 h-32 w-full rounded-lg"></div>
    </div>
  );
};

export default SkeletonLoader;