import React from 'react';
import TechnologyIcon from '../components/TechnologyIcon';
import reactIcon from '../assets/react.svg'
import jsIcon from '../assets/javascript.svg'; // Example icon
import cssIcon from '../assets/css.svg'; // Example icon
import htmlIcon from '../assets/html.svg'
import cppIcon from '../assets/c++.svg'
import vscode from '../assets/vscode.svg'
import c from '../assets/c.svg'
import postgre from '../assets/postgresql.svg'
import gitIcon from '../assets/git.svg'
const Technologies = () => {
  return (
    <div className="p-4 flex justify-center items-center h-full bg-gray-200">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">Technologies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TechnologyIcon
            icon={reactIcon}
            name="React"
            link="https://github.com/PSP25/React"
          />
          <TechnologyIcon
            icon={jsIcon}
            name="JavaScript"
            link="https://github.com/PSP25/javascript"
          />
          <TechnologyIcon
            icon={cppIcon}
            name="OOPS in C++"
            link="https://github.com/PSP25/DSA-CPP/tree/main/1.1Oops"
          />
          <TechnologyIcon
            icon={c}
            name="C"
            link="https://github.com/your-react-repo"
          />
          <TechnologyIcon
            icon={vscode}
            name="VSCode"
            link=""
          />
          <TechnologyIcon
            icon={postgre}
            name="Postgre"
            link="https://www.udemy.com/course/15-days-of-sql/?couponCode=KEEPLEARNING"
          />
          <TechnologyIcon
            icon={gitIcon}
            name="Git-Github"
            link="https://github.com/PSP25/javascript"
          />
          <TechnologyIcon
            icon={cssIcon}
            name="CSS & Tailwind"
            link="https://github.com/your-css-repo"
          />
          <TechnologyIcon
            icon={htmlIcon}
            name="HTML"
            link="https://github.com/your-react-repo"
          />
          {/* Add more TechnologyIcon components as needed */}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
