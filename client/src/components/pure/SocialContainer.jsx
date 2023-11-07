import React from 'react';
import PropTypes from 'prop-types';
import github from "../../assets/svg/github.svg";
import instagram from '../../assets/svg/instagram.svg';
import linkedin from '../../assets/svg/link.svg';
import { Link } from 'react-router-dom';
/**
 * 
 * 
 */
const SocialContainer = () => {
    return (
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
    );
};


SocialContainer.propTypes = {

};


export default SocialContainer;
