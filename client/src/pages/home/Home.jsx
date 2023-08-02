import React from 'react';
import NavContainer from '../../components/container/NavContainer';
import PresentationContainer from '../../components/container/PresentationContainer';
import TechStackContainer from '../../components/container/TechStackContainer';
import ProjectsContainer from '../../components/container/ProjectsContainer';

const Home = () => {
    return (
        <div>
            <NavContainer/>
            <PresentationContainer/>
            <TechStackContainer/>
            <ProjectsContainer/>
        </div>
    );
}

export default Home;
