import React from 'react';
import { Outlet } from 'react-router-dom';
import Blog from '../Pages/Blog/Blog';
import ContactMe from '../Pages/ContactME/ContactMe';
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Navbar/Navbar';
import Project from '../Pages/Project/Project';
import Skills from '../Pages/Skills/Skills';


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Layout;