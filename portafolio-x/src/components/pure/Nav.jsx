import React from "react";
import PropTypes from "prop-types";
import "../../styles/Nav/Nav.css";
import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import instagram from '../../assets/svg/instagram.svg';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-box">
      <div className="logo">logo</div>
      <div className="info-container">
        <div className="home"><Link to='/home'>Home</Link></div>
        <div className="about">About</div>
        <div className="tech-stack">Tech Stack</div>
        <div className="projects">Projects</div>
        <div className="contact"></div>
        <div className="social-container">
          <div className="github"><img src={github} alt="icon-github" /></div>
          <div className="instagram"><img src={instagram} alt="icon-instagram"></img></div>
          <div className="linkedin"><img src={linkedin} alt="icon-linkedin" /></div>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
