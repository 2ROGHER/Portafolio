import React from "react";
import PropTypes from "prop-types";
import "../../styles/Nav/Nav.css";
import github from "../../assets/svg/github.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import instagram from "../../assets/svg/instagram.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-box">
      <div className="logo">logo</div>
      <div className="info-container">
        <div className="home">
          <Link to="/home">Home</Link>
        </div>
        <div className="about">
          <Link to="/about">About</Link>
        </div>
        <div className="tech-stack">
          <Link to="/tech-stack">Tech Stack</Link>
        </div>
        <div className="projects">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="contact">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="social-container">
        <div className="github">
          <Link to="https://github.com/2ROGHER">
            <img src={github} alt="icon-github" />
          </Link>
        </div>
        <div className="instagram">
          <Link to="https://www.instagram.com/roger_mestanza/">
            <img src={instagram} alt="icon-instagram"></img>
          </Link>
        </div>
        <div className="linkedin">
          <Link to="www.linkedin.com/in/roger-mestanza-martinez-70368a181">
            <img src={linkedin} alt="icon-linkedin" />
          </Link>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
