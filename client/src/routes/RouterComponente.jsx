import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home.jsx";
import AboutPage from "../pages/about/AboutPage.jsx"
import TechStackPage from "../pages/techStack/TechStackPage.jsx";
import ProjectsPage from '../pages/projects/ProjectsPage.jsx';
import ContactPage from '../pages/contact/ContactPage';
const RouterComponente = () => {
    return (
        <Routes>
            <Route exact path='/home' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path="/tech-stack" element={<TechStackPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
    );
}

export default RouterComponente;
