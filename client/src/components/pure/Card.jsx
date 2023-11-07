import React from "react";
import { PropTypes } from "react";
import "../../styles/Card/Card.css";
import github from "../../assets/svg/github.svg";
import link from "../../assets/svg/link.svg";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card-container">
      {data.map(({ name, title, description, image, techstack }) => {
        return (
          <div className="card-bd">
            <div className="cd-image">
              <img src={image} alt={name} />
            </div>
            <div className="cd-name">
              <p>{name}</p>
            </div>
            {/* <div className="cd-title">
              <p>{title}</p>
            </div> */}
            <div className="cd-description">
              <p>{description}</p>
            </div>
            <h4 className="tech-stack-title">Tech Stack</h4>
            <ul className="cd-stack-container">
              {techstack.map((i, index) => {
                return <li key={index}>{i}</li>;
              })}
            </ul>
            <div className="cd-footer">
              <div>
                <img src={link} alt="link-icon" />
                <Link to="#">Live Preview</Link>
              </div>
              <div>
                <img src={github} alt="github-icon" />
                <Link to="#">View Code</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
Card.propTypes = {
  // data: PropTypes.object.isRequired,
};
export default Card;
