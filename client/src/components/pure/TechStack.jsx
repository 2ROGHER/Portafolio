import React, { useState } from "react";
import { PropTypes } from "react";
import "../../styles/TechStack/TechStack.css";
var i = 0;
let x = 100;


const TechStack = ({ data, handleScrollLeft, handleScrollRigth }) => {
  return (
    <div className="tech-stack-container">
      <div className="skills-title">
        <h2 id="base-title">My Tech Stack Skills</h2>
        <p> Technologies I’ve been working with recently</p>
        <button onClick={handleScrollLeft} className="s-btn">left</button>
        <div className="skills-container" >
          {data.map(({ id, name, url }) => {
            return (
              <div className="img-container">
                <img
                  src={url}
                  alt={name}
                  style={{ height: "150px" }}
                  key={id}
                />
              </div>
            );
          })}
        </div>
        <button onClick={handleScrollRigth} className="s-btn">right</button>
      </div>
      <div className="tech-stack-list">{}</div>
    </div>
  );
};



TechStack.propTypes = {
  // handleScrollLeft: PropTypes.fun.isRequired,
  // handleScrollRigth: PropTypes.fun.isRequired,
};



export default TechStack;
