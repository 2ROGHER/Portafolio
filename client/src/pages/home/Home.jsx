import React from 'react';
import NavContainer from "../../components/container/NavContainer";
import PresentationContainer from '../../components/container/PresentationContainer';
import TechStackContainer from '../../components/container/TechStackContainer';
import ProjectsContainer from '../../components/container/ProjectsContainer';
import FooterPage from '../footer/FooterPage';

const Home = () => {
    return (
        <div>
            <NavContainer/>
            <PresentationContainer/>
            <TechStackContainer/>
            <ProjectsContainer/>
            <FooterPage/>
        </div>
    );
}

export default Home;
