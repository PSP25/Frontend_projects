import React from 'react';
// import Card from '../components/Card';
import ProjectCard from '../components/ProjectCard';
import pyfy from '../assets/music_play.jpg'
import weatherApp from '../assets/weatherapp.jpg';
import flappyBird from '../assets/flappybird.webp';
import todo from '../assets/todo.jpg'
import simon from '../assets/simongame.webp'
const Projects = () => {
  return (
    <div className="p-4 bg-yellow-50">
      <h1 className="text-3xl font-bold text-center underline">Projects</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <Card
          title="PYfy Music Player"
          description="Tech: JavaScript,CSS, HTML"
          link="https://github.com/your-project-repo"
          linkText="GitHub Repo"
          imageUrl={pyfy} // Replace with actual image path
        />
        <Card
          title="Project 2"
          description="Technologies used: React, Node.js"
          link="https://github.com/your-project-repo"
          linkText="GitHub Repo"
          imageUrl="path/to/project-image.png" // Replace with actual image path
        />
        <Card
          title="Project 3"
          description="Technologies used: React, Node.js"
          link="https://github.com/your-project-repo"
          linkText="GitHub Repo"
          imageUrl="path/to/project-image.png" // Replace with actual image path
        /> */}
        {/* Repeat for other projects */}
        <ProjectCard
          title="PYfy Music Player"
          description="Tech: {JavaScript, CSS, HTML}"
          link="https://spotifypersonal.freewebhostmost.com/"
          linkText="Project Link"
          imageUrl={pyfy} // Replace with actual image path
        />
        <ProjectCard
          title="CityWeatherVue"
          description="Tech: {JS, API Integration}"
          link="https://psp25.github.io/Weather-App/"
          linkText="Project Link"
          imageUrl={weatherApp} // Replace with actual image path
        />
        <ProjectCard
          title="Flappy Bird Game"
          description="Tech: {JS-DOM Manipulation}"
          link="https://psp25.github.io/project/"
          linkText="Project Link"
          imageUrl={flappyBird} // Replace with actual image path
        />
        <ProjectCard
          title="Todo_Application"
          description="Tech: {JS, Locale Storage}"
          link="https://psp25.github.io/To_Do-List-App/"
          linkText="Project Link"
          imageUrl={todo} // Replace with actual image path
        />
        <ProjectCard
          title="Simon Game"
          description="Tech: {JS, CSS, HTML}"
          link="https://psp25.github.io/simon-game/"
          linkText="Project Link"
          imageUrl={simon} // Replace with actual image path
        />
      </div>
    </div>
  );
};

export default Projects;

