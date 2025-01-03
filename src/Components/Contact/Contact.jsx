import React, { useEffect } from "react";
import './contact.component.scss'

export default function Contact() {
  useEffect(() => {
    console.log("ContactComponentDidMount");
    document.title = 'Contact';
  }, []);

  useEffect(() => {
    return () => {
      console.log("ContactComponentWillUnMount");
    };
  }, []);

  return (
    <>
      <section className="contact mb-5 dark-color">
        <div className="container pt-3">
          <div className="text-center pt-4">
            <h2 className=" text-uppercase mb-3 fs-1 fw-bolder">
              contact section
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="me-3 dark-line"></div>
              <i className="fa-solid fa-star"></i>
              <div className="ms-3 dark-line"></div>
            </div>
          </div>
          <form action="submit" className="w-50 p-3 mx-auto mt-5">
            <label htmlFor="userName" className="position-relative top-0 form-label"></label>
            <input type="text" id="userName" placeholder="userName" className="form-control border-0 border-bottom py-3 position-relative"/>
            <label htmlFor="userAge" className="position-relative top-0 form-label"></label>
            <input type="text" id="userAge" placeholder="userAge" className="form-control border-0 border-bottom py-3 position-relative"/>
            <label htmlFor="userEmail" className="position-relative top-0 form-label"></label>
            <input type="text" id="userEmail" placeholder="userEmail" className="form-control border-0 border-bottom py-3 position-relative"/>
            <label htmlFor="userPassword" className="position-relative top-0 form-label"></label>
            <input type="text" id="userPassword" placeholder="userPassword" className="form-control border-0 border-bottom py-3 position-relative"/>
            <button className="btn mt-4 text-white button-color">send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
