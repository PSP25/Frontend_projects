import React from "react";
import { Link,NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto py-4 px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
        <h2 className="text-lg font-semibold">Contact Details</h2>
          <p className="mt-2 text-sm">
            Phone:{" "}
            <a
              href="tel:+917682805347"
              className="text-blue-500 hover:underline"
            >
              +91 7682805347
            </a>
          </p>{" "}
          
          <p className="mt-2 text-sm">
            Email:{" "}
            <a
              href="mailto:priyanshupanda2019@gmail.com"
              className="text-blue-500 hover:underline"
            >
              priyanshupanda2019@gmail.com
            </a>
          </p>{" "}
          <p className="mt-2 text-sm">
            Alternate Mobile:{" "}
            <a
              href="tel:+919583903861"
              className="text-blue-500 hover:underline"
            >
              +91 9583903861
            </a>
          </p>{" "}
        </div>
        <div>
          {/* <h2 className="text-lg font-semibold">Important Links</h2> */}
          <ul className="mt-2 space-y-1 text-sm grid grid-cols-3">
            <li>
              <NavLink to="/" className="hover:underline cursor-pointer">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" className="hover:underline">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="hover:underline">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" className="hover:underline">
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/technologies" className="hover:underline">
                Technologies
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="hover:underline">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-2">
        <p className="text-sm">&copy; 2024 Priyanshu Sekhar Panda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
