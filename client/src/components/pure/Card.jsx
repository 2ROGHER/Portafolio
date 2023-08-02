import React from "react";
import { PropTypes } from "react";
import "../../styles/Card/Card.css";
const Card = () => {
  return (
    <div className="card-container">
     <div><img src="#" alt="name"/></div>
     <div className="desc-container">
        
     </div>
     <div></div>
    </div>
  );
};
Card.propTypes = {
  // projectsData: PropTypes.object.isRequerid,
};
export default Card;
