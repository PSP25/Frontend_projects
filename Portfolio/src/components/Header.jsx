// src/components/Header.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="bg-gray-800 text-white p-4">
//       <nav className="container mx-auto flex justify-between">
//         <h1 className="text-2xl font-bold">My Portfolio</h1>
//         <ul className="flex space-x-4">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/projects">Projects</Link></li>
//           <li><Link to="/education">Education</Link></li>
//           <li><Link to="/achievements">Achievements</Link></li>
//           <li><Link to="/profile">Profile</Link></li>
//           <li><Link to="/resume">Resume</Link></li>
//           <li><Link to="/skills">Skills</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white text-center">
      <h1 className="text-2xl font-bold">Priyanshu's Tech Portfolio</h1>
    </header>
  );
};

export default Header;

