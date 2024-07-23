/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

export default function App() {

  const [authUser,setAuthUser] = useAuth()
  console.log(authUser)

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={ authUser? <Courses />:<Navigate to="/signup"  /> } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
