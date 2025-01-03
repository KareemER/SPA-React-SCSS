import React, { useEffect } from "react";
import image from "../../../src/assets/ava.svg";

export default function Home() {
  
  useEffect(() => {
    console.log("HomeComponentDidMount");
    document.title = 'Home';
  }, [])

  useEffect(() => {
    return () => {
      console.log("HomeComponentWillUnMount");
    }
  }, [])
  
  
  return (
    <>
      <section className="home d-flex justify-content-center align-items-center flex-column text-white text-center">
        <img src={image} width={250} alt="happy developer image" className="mb-3" />
        <h2 className="text-uppercase fw-bolder fs-1 text-white pt-4 mb-3">start framework</h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 bg-white"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3 bg-white"></div>
        </div>
        <p className=" text-capitalize">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </section>
    </>
  );
}
