// import { Link } from 'react-router-dom';
// src/components/Header.jsx
// import React from 'react';

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
    
import React from "react";
import { Link,NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white text-center">
      <div className="flex items-center justify-between">
        <a className="text-2xl font-bold" href="/">Priyanshu's Tech Portfolio</a>
        <nav className="bg-gray-800 p-4 text-white">
          <ul className="flex space-x-4">
            <li>
            <NavLink
                    to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4
                                         pl-3 duration-200
                                         ${
                                           isActive
                                             ? "text-blue-300 underline"
                                             : "text-gray-100"
                                             
                                         }
                                           border-b
                                           border-gray-100
                                           hover:bg-gray-50 
                                            lg:hover:bg-transparent 
                                           lg:border-0
                                            hover:text-blue-500 
                                            lg:p-0`
                  }
                >
              About
              </NavLink>
            </li>
            <li>
            <NavLink
                    to="/education"
                  className={({ isActive }) =>
                    `block py-2 pr-4
                                         pl-3 duration-200
                                         ${
                                           isActive
                                             ? "text-blue-300 underline"
                                             : "text-gray-100"
                                             
                                         }
                                           border-b
                                           border-gray-100
                                           hover:bg-gray-50 
                                            lg:hover:bg-transparent 
                                           lg:border-0
                                            hover:text-blue-500 
                                            lg:p-0`
                  }
                >
              Education
              </NavLink>

            </li>
            <li>
            <NavLink
                    to="/profile"
                  className={({ isActive }) =>
                    `block py-2 pr-4
                                         pl-3 duration-200
                                         ${
                                           isActive
                                             ? "text-blue-300 underline"
                                             : "text-gray-100"
                                             
                                         }
                                           border-b
                                           border-gray-100
                                           hover:bg-gray-50 
                                            lg:hover:bg-transparent 
                                           lg:border-0
                                            hover:text-blue-500 
                                            lg:p-0`
                  }
                >
              Profile
              </NavLink>

            </li>
            <li>
            <NavLink
                    to="/resume"
                  className={({ isActive }) =>
                    `block py-2 pr-4
                                         pl-3 duration-200
                                         ${
                                           isActive
                                             ? "text-blue-300 underline"
                                             : "text-gray-100"
                                             
                                         }
                                           border-b
                                           border-gray-100
                                           hover:bg-gray-50 
                                            lg:hover:bg-transparent 
                                           lg:border-0
                                            hover:text-blue-500 
                                            lg:p-0`
                  }
                >
             Resume
              </NavLink>

            </li>
            <li>
            <NavLink
                    to="/technologies"
                  className={({ isActive }) =>
                    `block py-2 pr-4
                                         pl-3 duration-200
                                         ${
                                           isActive
                                             ? "text-blue-300 underline"
                                             : "text-gray-100"
                                             
                                         }
                                           border-b
                                           border-gray-100
                                           hover:bg-gray-50 
                                            lg:hover:bg-transparent 
                                           lg:border-0
                                            hover:text-blue-500 
                                            lg:p-0`
                  }
                >
              Technologies
              </NavLink>

            </li>
            <li>
            <NavLink
                    to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4
                                         pl-3 duration-200
                                         ${
                                           isActive
                                             ? "text-blue-300 underline"
                                             : "text-gray-100"
                                             
                                         }
                                           border-b
                                           border-gray-100
                                           hover:bg-gray-50 
                                            lg:hover:bg-transparent 
                                           lg:border-0
                                            hover:text-blue-500 
                                            lg:p-0`
                  }
                >
              Projects
              </NavLink>

            </li>
            <li>
            <NavLink
                    to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4
                                         pl-3 duration-200
                                         ${
                                           isActive
                                             ? "text-blue-300 underline"
                                             : "text-gray-100"
                                             
                                         }
                                           border-b
                                           border-gray-100
                                           hover:bg-gray-50 
                                            lg:hover:bg-transparent 
                                           lg:border-0
                                            hover:text-blue-500 
                                            lg:p-0`
                  }
                >
              Contact
              </NavLink>
            </li>
            {/* <li>
            <NavLink
                    to="/achievements"
                  className={({ isActive }) =>
                    `block py-2 pr-4
                                         pl-3 duration-200
                                         ${
                                           isActive
                                             ? "text-blue-300 underline"
                                             : "text-gray-100"
                                             
                                         }
                                           border-b
                                           border-gray-100
                                           hover:bg-gray-50 
                                            lg:hover:bg-transparent 
                                           lg:border-0
                                            hover:text-blue-500 
                                            lg:p-0`
                  }
                >
              Achievements
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
