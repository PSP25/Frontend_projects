import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar/>
      <main className="flex-grow overflow-y-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

