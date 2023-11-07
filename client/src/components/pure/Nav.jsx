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
        <ul>
          <li className="item-list">
            <div className="home">
              <Link to="/home" className="nav-link">
                home
              </Link>
            </div>
          </li>
          <li className="item-list">
            <div className="about">
              <Link to="/about" className="nav-link">
                about
              </Link>
            </div>
          </li>
          <li className="item-list">
            <div className="tech-stack">
              <Link to="/tech-stack" className="nav-link">
                tech stack
              </Link>
            </div>
          </li>
          <li className="item-list">
            <div className="projects">
              <Link to="/projects" className="nav-link">
                works
              </Link>
            </div>
          </li>
          <li className="item-list">
            <div className="contact">
              <Link to="/contact" className="nav-link">
                contact
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
