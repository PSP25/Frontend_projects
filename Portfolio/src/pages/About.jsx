import React from 'react';
import profilePic from '../assets/profile-pic.jpg';

const About = () => {
  return (
    <div className="p-4 bg-yellow-50">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/5 mb-4 md:mb-0 md:pr-6">
          <img
            src={profilePic}
            alt="Profile"
            className="w-48 h-80 md:w-56 md:h-96 rounded-3xl object-cover object-center shadow-lg mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-3/4 md:pl-6">
          <h1 className="text-3xl font-bold mb-2">About Priyanshu</h1>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="pl-2">
            <p className="text-lg leading-relaxed">
              👋 Meet Priyanshu Sekhar Panda, a Prefinal year Computer Science & Engineering UG student at NIT Rourkela, driven by a passion for innovation in software development. Priyanshu is proficient in C++, JavaScript, and an array of development tools, specializing in crafting dynamic applications.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              🖥️ <strong>Development Skills:</strong> Priyanshu's portfolio features 20+ basic and intermediate projects across various technology concepts like <strong>JavaScript</strong>, <strong>React</strong>, <strong>Redux-toolkit</strong>, and <strong>Tailwind CSS</strong>, showcasing their versatility and depth in developing robust digital solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              💻 <strong>Programming and Problem-Solving Skills:</strong> Priyanshu excels in programming and problem-solving, particularly in C++ and Data Structures and Algorithms (DSA). This expertise enables them to effectively tackle complex challenges, demonstrating a strong analytical mindset and optimizing code efficiency.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              🤝 <strong>Soft Skills and Leadership:</strong> Priyanshu's background as an Event Management Coordinator has finely tuned their leadership and collaborative skills. They excel in both individual and team environments, leveraging their experience to enhance event experiences through innovative solutions that streamline planning processes and elevate attendee engagement.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              📚 <strong>Academics & More:</strong> Priyanshu maintains an impressive CGPA of 8.83, complemented by coursework in Data Structures and Algorithm (DSA), Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems (OS), and Computer Networks (CN) from prestigious platforms.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              💼 <strong>Why Connect with Priyanshu?</strong> Priyanshu is constantly on the lookout to collaborate on projects or dive into roles that challenge their programming and analytical skills. Passionate about leveraging technology to innovate and enhance user experiences, Priyanshu is eager to connect with fellow tech enthusiasts and professionals to explore new opportunities and bring exceptional ideas to life.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              📩 Let's connect with Priyanshu and explore how you can collaborate on exciting projects or roles!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
