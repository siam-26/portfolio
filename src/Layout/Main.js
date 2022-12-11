import React from 'react';
import ContactMe from '../Pages/ContactME/ContactMe';
import Header from '../Pages/Header/Header';
import Project from '../Pages/Project/Project';
import Skills from '../Pages/Skills/Skills';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Skills></Skills>
            <Project></Project>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Main;