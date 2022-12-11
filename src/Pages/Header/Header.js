import React from 'react';
import headerImg from '../../Assets/headerimg.webp';

const Header = () => {
    return (
        <div>
            <div className="hero pt-10 bg-white">
                <div className="hero-content flex-col-reverse md:flex-row-reverse lg:flex-row-reverse">
                    <img src={headerImg} className=" rounded-lg shadow-2xl" alt='' />
                    <div className='w-full  lg:w-1/2 mr-0 md:mr-24 lg:mr-24'>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold w-full">Hi! I'm <i>Sayed Abu Ahmad</i></h1>
                        <br />
                        <h1 className="text-2xl font-bold w-full  lg:w-1/2">Front-End Developer</h1>
                        <p className="py-6 w-full text-justify">To achieve a successful career through dedication, discipline and honesty with an opportunity
                            to work with people in an environment of excellence where I might get best possibilities to practice the
                            knowledge that I have acquired and gain a lot.</p>
                        <button className="btn btn-primary">My Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;