import React from 'react';
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Navbar/Navbar';
import Skills from '../Pages/Skills/Skills';


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Skills></Skills>
        </div>
    );
};

export default Layout;