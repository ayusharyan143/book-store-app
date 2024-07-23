/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import {Link} from "react-router-dom";
import axios from "axios";

function Course() {

  const [book , setBook] = useState([]);
  useEffect(()=>{
    const getBook = async ()=>{

      try
      {
        const res  = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      }
      catch(error)
      {
        console.log("Error: " , error)
      }
    };

    getBook();
    
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
          We're Delighted to Have You {" "}
            <span className="text-pink-500"> Here!  :)</span>
          </h1>

          <p className="mt-12">
          Unlock the magic of books and expand your horizons with our carefully curated collection. <br /> Whether you're seeking adventure, romance, or self-improvement, we have something special just for you.
          </p>

          <Link to="/">
            <button className="btn btn-outline btn-success m-8"> Back </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
