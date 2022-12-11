import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar lg:text-white bg-secondary fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='#about'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-semibold text-white pl-0 md:pl-48 lg:pl-[110px]">Sayed Abu Ahmad</a>
                </div>
                <div className="navbar-end hidden lg:flex pr-16">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#about'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>


                        <li><Link to='/blog' className='text-white'>Blog</Link></li>
                    </ul>
                </div>
                <div className='pl-16 md:pl-60 lg:pr-[125px]'>
                    <a href="https://drive.google.com/file/d/19Zr41-wrgaIvnqi-vG1aCcgbYuKCiHe9/view"><button className="btn btn-black">My Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;