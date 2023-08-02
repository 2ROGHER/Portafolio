import React, { useState } from "react";
import { PropTypes } from "react";
import "../../styles/TechStack/TechStack.css";
const TechStack = ({ data }) => {

  return (
    <div className="tech-stack-container">
      <div className="skills-title">
        <h2 id="base-title">My Tech Stack Skills</h2>
        <p> Technologies I’ve been working with recently</p>
        <div className="skills-container">
          {data.map(({ id, name, url }) => {
            return (
              <img src={url} alt={name} style={{ height: "100px" }} key={id} />
            );
          })}
        </div>
      </div>
      <div className="tech-stack-list">{}</div>
    </div>
  );
};

TechStack.propTypes = {
  data: PropTypes.object.isRequired,
};
export default TechStack;
