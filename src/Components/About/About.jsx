import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    console.log("AboutComponentDidMount");
    document.title = 'About';
  }, []);

  useEffect(() => {
    return () => {
      console.log("AboutComponentWillUnMount");
    };
  }, []);

  return (
    <>
      <section className="about p-5 text-white d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-uppercase text-center fs-1 mb-3 fw-bolder">about component</h2>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="line me-3 bg-white"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3 bg-white"></div>
        </div>
        <div className="container">
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="col-md-6 pe-md-5">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
