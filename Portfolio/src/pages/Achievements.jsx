// src/components/Achievements.jsx
import React from 'react';
import Card from '../components/Card';

const Achievements = () => {
  const achievements = [
    {
      title: 'Event Management',
      description: 'Organized multiple events at university level.',
      links: []
    },
    {
      title: 'Swimming',
      description: 'Achieved gold medal in district level swimming competition.',
      links: []
    },
    {
      title: 'Book Reading',
      description: 'Read over 50 books in the past year, focusing on technology and self-improvement.',
      links: []
    }
    // Add more achievements as needed
  ];

  return (
    
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Achievements and Extracurricular Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <Card key={index} title={achievement.title} description={achievement.description} links={achievement.links} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
