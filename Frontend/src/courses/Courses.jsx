// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/Course";
import Contact from "../components/Contact";

function Courses() {
   return (
    <>
      <Navbar />
      <div className="min-h-screen" >
        <Course />
      </div>
      <div className="min-h-screen" > 
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
