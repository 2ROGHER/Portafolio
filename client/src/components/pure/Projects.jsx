import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const Projects = () => {
    return (
      <div className="projects-container">
        <h1 className="project-title">Projects</h1>
        <p id="project-prgh">Things I’ve built so far</p>
        <Card />
      </div>
    );
};


Projects.propTypes = {

};


export default Projects;
