import React, { useEffect, useState } from "react";
import skills from "../Data/skills.json";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.css';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 100);

        return () => clearTimeout(timer);
    });

  return (
    <>
      <div className="container skills-page" id="skills">
        <h1 className="page-title">
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={"Tech Stack".split("")}
                idx={15}
            />
        </h1>
        <div className="items">
          {skills.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
              >
                <img src={`/assets/Images/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;