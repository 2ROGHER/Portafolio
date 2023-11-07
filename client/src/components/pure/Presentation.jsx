import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import "../../styles/Presentation/Presentation.css";

const Presentation = ({ text, writeLetters, photo }) => {
  useEffect(()=> {
    writeLetters();
  }, []);

  return (
    <div className="presentation-container">
      <div className="pre-col-1">
        <h1 id="letters"></h1>
        
      </div>
      <div className="pre-col-2">
        <div className="prof-photo-container">
          <img src={photo} alt="profile-photo" />
        </div>
      </div>
    </div>
  );
};

Presentation.propTypes = {
  text: PropTypes.string.isRequired,
  writeLetters: PropTypes.func,
  photo: PropTypes.object
  
};

export default Presentation;
