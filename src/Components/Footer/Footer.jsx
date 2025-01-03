import React from "react";
import './footer.component.scss'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="card-group p-4 m-4 text-white text-center">
          <div className="card bg-transparent border-0 text-white">
            <div className="card-body">
              <h3 className="text-uppercase">location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="card bg-transparent border-0 text-white">
            <div className="card-body">
              <h3 className="text-uppercase">around the web</h3>
              <div className="icons">
                <i className="fa-brands fa-facebook mx-1 icon"></i>
                <i className="fa-brands fa-twitter mx-1 icon"></i>
                <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                <i className="fa-solid fa-globe mx-1 icon"></i>
              </div>
            </div>
          </div>
          <div className="card bg-transparent border-0 text-white">
            <div className="card-body">
              <h3 className="text-uppercase">about freelancer</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="p w-100 m-0">
          <p className="text-white  text-center">
            Copyright © Your Website 2021
          </p>
        </div>
      </div>
    </>
  );
}
