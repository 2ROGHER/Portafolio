import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import "../../styles/Projects/Projects.css";

const Projects = ({ data }) => {
    return (
      <div className="pjts-container">
        <h1 className="pjts-title">This is my all Projects ideas</h1>
        <p id="pjts-prgh">Things I’ve built so far</p>
        <Card data={data}/>
      </div>
    );
};


Projects.propTypes = {
     data: PropTypes.object.isRequired,
};


export default Projects;
