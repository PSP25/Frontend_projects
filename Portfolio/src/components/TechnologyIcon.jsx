import React from 'react';

const TechnologyIcon = ({ icon, name, link }) => {
  return (
    <a href={link} className="tech-icon bg-white shadow-md rounded-lg p-4 hover:bg-gray-100 flex flex-col items-center">
      <img src={icon} alt={name} className="w-16 h-16 mb-2" />
      <h2 className="text-xl font-semibold">{name}</h2>
    </a>
  );
};

export default TechnologyIcon;
