import React from "react";
import PropTypes from "prop-types";
import "../../styles/Presentation/Presentation.css";
import profilePhoto  from '../../assets/img/profile_photo.jpg'
const name = "Roger Mestanza";

const Presentation = () => {
  return (
    <div className="presentation-container">
      <div className="pre-col-1">
          <h1>
            Hi World 👋,
            <br /> my name is <div id="name">{name}</div> <br /> I build things
            for web
          </h1>
      </div>
      <div className="pre-col-2">
        <div className="prof-photo-container">
          <img src={profilePhoto} alt="profile-photo" />
        </div>
      </div>
    </div>
  );
};

Presentation.propTypes = {};

export default Presentation;
