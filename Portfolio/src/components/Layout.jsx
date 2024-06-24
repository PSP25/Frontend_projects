import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
    <div className="flex flex-col min-h-screen ">
     <Header/>
     <main className="flex-grow overflow-y-auto bg-yellow-50">
     <Outlet/>
     </main>
     <Footer/>
    </div>
    </>
  );
};

export default Layout;
{/* <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-y-auto">
        {/* {children} */}
    //     <Outlet />
    //   </main>
    //   <Footer />
    // </div> */}