import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Education from './pages/Education';
import Profile from './pages/Profile';
import Resume from './pages/Resume';
import Technologies from './pages/Technologies';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import Layout from './components/Layout';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
          <Route exact path='' element={<About/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/technologies" element={<Technologies/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/achievements" element={<Achievements/>} />
    </Route>
  )
)

const App = () => {
  return (
    // <Router>
      // <Layout>
      //   <Routes>
      //     <Route exact path='/' element={<About/>} />
      //     <Route path="/education" element={<Education/>} />
      //     <Route path="/profile" element={<Profile/>} />
      //     <Route path="/resume" element={<Resume/>} />
      //     <Route path="/technologies" element={<Technologies/>} />
      //     <Route path="/projects" element={<Projects/>} />
      //     <Route path="/contact" element={<Contact/>} />
      //     <Route path="/achievements" element={<Achievements/>} />
      //     </Routes>
      // </Layout>
    // </Router>
    <RouterProvider router={router}/>
  );
};

export default App;

