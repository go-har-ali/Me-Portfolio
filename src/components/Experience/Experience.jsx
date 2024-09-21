import React, { useEffect, useState } from "react";
import experience from "../Data/experience.json";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    
  return (
    <>
      <div className="container experience-page" id="experience">
        <h1 className="page-title">
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={"Experience".split("")}
                idx={15}
            />
        </h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/Images/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h2>
                    <span style={{ color: "yellow" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h2>
                  <h3 style={{ color: "yellow" }}>{data.experiences[0]}</h3>
                </div>
              </div>
                
              <Loader type="pacman" />
              
            </>
            
          );
        })}
        
      </div>
    </>
  );
};

export default Experience;