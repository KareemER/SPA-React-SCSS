import React, { useEffect } from "react";
import image1 from "../../../src/assets/poert1.png";
import image2 from "../../../src/assets/port2.png";
import image3 from "../../../src/assets/port3.png";
import './portfolio.component.scss'

export default function Portfolio() {
  useEffect(() => {
    console.log("PortfolioComponentDidMount");
    document.title = 'Portfolio';
  }, []);

  useEffect(() => {
    return () => {
      console.log("PortfolioComponentWillUnMount");
    };
  }, []);


  return (
    <>
      <section className="portfolio mb-4 dark-color">
        <div className="pt-4">
          <div className="text-center pt-4">
            <h2 className=" text-uppercase mb-3 fs-1 fw-bolder">
              portfolio component
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="dark-line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="dark-line ms-3"></div>
            </div>
          </div>
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div>
                  <button type="button" className="btn p-0 border-0" data-bs-toggle="modal" data-bs-target="#Modal1">
                  <div className="position-relative rounded-3 overflow-hidden">
                    <img src={image1} className="w-100 rounded-3" alt="Hut image" />
                    <div className="additionalLayer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
                  </button>
                <div className="modal fade" id="Modal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                        <img src={image1} width={600} height={433} alt="slider" />
                  </div>
                </div>
              </div>
            </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <button type="button" className="btn p-0 border-0" data-bs-toggle="modal" data-bs-target="#Modal2">
                  <div className="position-relative rounded-3 overflow-hidden">
                    <img src={image2} className="w-100 rounded-3" alt="ChocoCake image" />
                    <div className="additionalLayer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
                  </button>
                <div className="modal fade" id="Modal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                        <img src={image2} width={600} height={433} alt="slider" />
                  </div>
                </div>
              </div>
            </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <button type="button" className="btn p-0 border-0" data-bs-toggle="modal" data-bs-target="#Modal3">
                  <div className="position-relative rounded-3 overflow-hidden">
                    <img src={image3} className="w-100 rounded-3" alt="Circus image" />
                    <div className="additionalLayer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
                  </button>
                <div className="modal fade" id="Modal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                        <img src={image3} width={600} height={433} alt="slider" />
                  </div>
                </div>
              </div>
            </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <button type="button" className="btn p-0 border-0" data-bs-toggle="modal" data-bs-target="#Modal4">
                  <div className="position-relative rounded-3 overflow-hidden">
                    <img src={image1} className="w-100 rounded-3" alt="Hut image" />
                    <div className="additionalLayer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
                  </button>
                <div className="modal fade" id="Modal4" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                        <img src={image1} width={600} height={433} alt="slider" />
                  </div>
                </div>
              </div>
            </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <button type="button" className="btn p-0 border-0" data-bs-toggle="modal" data-bs-target="#Modal5">
                  <div className="position-relative rounded-3 overflow-hidden">
                    <img src={image2} className="w-100 rounded-3" alt="ChocoCake image" />
                    <div className="additionalLayer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
                  </button>
                <div className="modal fade" id="Modal5" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                        <img src={image2} width={600} height={433} alt="slider" />
                  </div>
                </div>
              </div>
            </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <button type="button" className="btn p-0 border-0" data-bs-toggle="modal" data-bs-target="#Modal6">
                  <div className="position-relative rounded-3 overflow-hidden">
                    <img src={image3} className="w-100 rounded-3" alt="Circus image" />
                    <div className="additionalLayer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
                  </button>
                <div className="modal fade" id="Modal6" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                        <img src={image3} width={600} height={433} alt="slider" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
