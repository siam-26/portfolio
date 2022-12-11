import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-secondary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Skills</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-semibold text-white pl-0 md:pl-48 lg:pl-[110px]">Sayed Abu Ahmad</a>
                </div>
                <div className="navbar-end hidden lg:flex pr-16">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='text-white'>Home</a></li>
                        <li><a className='text-white'>About</a></li>
                        <li><a className='text-white'>Skills</a></li>
                        <li><a className='text-white'>Projects</a></li>
                        <li><a className='text-white'>Contact</a></li>
                    </ul>
                </div>
                <div className='pl-16 md:pl-60 lg:pr-[125px]'>
                    <a className="btn">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;