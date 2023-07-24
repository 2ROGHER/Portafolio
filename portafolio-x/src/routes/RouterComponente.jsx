import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home.jsx";
const RouterComponente = () => {
    return (
        <Routes>
            <Route exact path='/home' element={<Home/>}/>
        </Routes>
    );
}

export default RouterComponente;
