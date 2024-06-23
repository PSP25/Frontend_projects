import React from 'react';

const ProjectCard = ({ title, description, link, linkText, imageUrl }) => {
  return (
    <div className="bg-gray-300 shadow-md rounded-lg overflow-hidden">
      {/* Top section for image */}
      <div className="relative h-48">
        {imageUrl && <img src={imageUrl} alt={title} className="object-cover w-full h-full" />}
      </div>
      
      {/* Bottom section for text content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold  text-center mb-4">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        {link && <a href={link} className="block text-blue-500 hover:underline">{linkText}</a>}
      </div>
    </div>
  );
};

export default ProjectCard;

