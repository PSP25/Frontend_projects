import React from 'react';
import Layout from './Layout';

const Card = ({ title, description, link, linkText, imageUrl }) => {
  return (
    
    <div className="card bg-gray-200 shadow-md rounded-lg p-4 hover:bg-gray-300">
      {imageUrl && <img src={imageUrl} alt={title} className="w-16 h-16 mb-2 mx-auto" />}
      <h2 className="text-xl font-semibold underline text-center">{title}</h2>
      <p className="mt-2">{description}</p>
      {link && <a href={link} className="text-blue-500 hover:underline mt-2">{linkText}</a>}
    </div>
    
  );
};

export default Card;
