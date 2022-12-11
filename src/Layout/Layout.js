import React from 'react';
import ContactMe from '../Pages/ContactME/ContactMe';
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Navbar/Navbar';
import Project from '../Pages/Project/Project';
import Skills from '../Pages/Skills/Skills';


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Skills></Skills>
            <Project></Project>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Layout;