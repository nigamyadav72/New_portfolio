import React, { useState } from "react";
import "./services.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);

  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">


        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>
          <span className="services__button" onClick={()=>
            toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 1 ? "services__modal active-modal":"services__modal"}>
            <div className="service__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Frontend Development</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Frontend Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Backend Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>
          <span onClick={()=>toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "services__modal active-modal":"services__modal"}>
            <div className="service__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Backend Development</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Frontend Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Backend Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Full Stack <br /> Developer
            </h3>
          </div>
          <span onClick={()=>toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services__modal active-modal":"services__modal"}>
            <div className="service__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Ecommerce Development</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Frontend Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Backend Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Services;
