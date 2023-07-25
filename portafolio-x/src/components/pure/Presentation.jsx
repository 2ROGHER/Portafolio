import React from "react";
import PropTypes from "prop-types";
import "../../styles/Presentation/Presentation.css";

const name = "Roger Mestanza";

const Presentation = () => {
  return (
    <div className="presentation-container">
      <div className="pre-col-1">
        <div>
          Hi World 👋,
          <br /> my name is <div id="name">{name}</div> <br/> I build things for web!.
        </div>
      </div>
      <div className="pre-col-2">
        <img src="" alt="" />
      </div>
    </div>
  );
};

Presentation.propTypes = {};

export default Presentation;
