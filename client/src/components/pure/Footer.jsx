import React from "react";
import PropTypes from "prop-types";
import "../../styles/Footer/Footer.css";
import SocialContainer from "./SocialContainer";
const Footer = ({ name }) => {
  return (
    <div className="ft-box">
      
      <div className="row-1">
        <div className="logo">Here is the logo</div>
        <div className="ft-tel">
          <a href="tel:+51974673145">+51974673145</a>
        </div>
        <div className="ft-email">
          <a href="mailto:U18302073@utp.edu.pe">U18302073@utp.edu.pe</a>
        </div>
      </div>
      <div className="row-2">
        <SocialContainer />
        <div className="ft-description">
          <p>Designed by {name} with love and caffe</p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Footer;
