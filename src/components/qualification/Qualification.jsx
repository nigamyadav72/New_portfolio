import React, { useState } from 'react'
import "./qualification.css"


const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);

  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState ===1 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"} onClick={()=> toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
          <div className={toggleState ===2 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"} onClick={()=> toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>
      </div>

      <div className="qualification__sections">
        <div className= {toggleState ===1 ? "qualification__content qualification__content-active": "qualification__content"}>
          {/* 1st entry: left */}
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Computer Engineering</h3>
              <span className="qualification__subtitle">IOE Purwanchal Campus</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>
                2021 - Present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div></div>
          </div>
          {/* 2nd entry: right */}
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Web Developement</h3>
              <span className="qualification__subtitle">IOE Purwanchal Campus</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>
                2021 - Present
              </div>
            </div>
          </div>
          {/* 3rd entry: left */}
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">High School</h3>
              <span className="qualification__subtitle">Rosy Buds BalBatika School, Lamahi-Dang</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>
                2019 - 2021
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div></div>
          </div>
          {/* 4th entry: right */}
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Lower School</h3>
              <span className="qualification__subtitle">Jaindra Boarding School, Lamahi-Dang</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>
                2007 - 2019
              </div>
            </div>
          </div>
        </div>

        {/* Experience Tab Example (repeat the same alternating pattern) */}
        <div className={toggleState ===2 ? "qualification__content qualification__content-active": "qualification__content"}>
          {/* 1st entry: left */}
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Full Stack Developer</h3>
              <span className="qualification__subtitle">Self</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>
                2021 - Present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div></div>
          </div>
          {/* 2nd entry: right */}

          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Web Developer</h3>
              <span className="qualification__subtitle">IOE Purwanchal Campus</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>
                2021 - Present
              </div>
            </div>
          </div>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Full Stack Developer</h3>
              <span className="qualification__subtitle">Self</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>
                2021 - Present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div></div>
          </div>
          {/* Add more entries as needed */}
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Web Developer</h3>
              <span className="qualification__subtitle">IOE Purwanchal Campus</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>
                2021 - Present
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Qualification
