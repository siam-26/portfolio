import React from 'react';

import headerImg from '../../Assets/headerimg.webp';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Header = () => {
    return (
        <div>
            <div className="hero pt-10 bg-white">
                <div className="hero-content flex-col-reverse md:flex-row-reverse lg:flex-row-reverse">
                    <img src={headerImg} className=" rounded-lg " alt='' />
                    <div className='w-full  lg:w-1/2 mr-0 md:mr-24 lg:mr-24'>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold w-full">Hi! I'm <i>Sayed Abu Ahmad</i></h1>
                        <br />
                        <h1 className="text-2xl font-bold w-full  lg:w-1/2">Front-End Developer</h1>
                        <p className="py-6 w-full text-justify">To achieve a successful career through dedication, discipline and honesty with an opportunity
                            to work with people in an environment of excellence where I might get best possibilities to practice the
                            knowledge that I have acquired and gain a lot.</p>
                        <div className='flex mb-5'>
                            <a href="https://www.linkedin.com/in/sayed-siam"><BsLinkedin className='text-2xl text-primary rounded-full bg-white ' /></a>
                            <a href="https://github.com/siam-26"><BsGithub className='text-2xl text-primary ml-2 rounded-full bg-white' /></a>

                        </div>

                        <button className="btn btn-primary">My Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;