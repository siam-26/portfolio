import React from 'react';
import './Project.css';
import furniture from '../../Assets/furniture.webp';
import news from '../../Assets/news.jpg';
import gym from '../../Assets/gym.webp';

const Project = () => {
    return (
        <div>
            <h1 className='text-4xl text-primary font-bold text-center mt-12 md:mt-44 lg:mt-44 mb-10'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-32'>
                <div class="container">
                    <img src={furniture} className='image w-full h-72 px-6 md:px-0 lg:px-0' alt="" />
                    <div class="overlay">
                        <div class="text"><a className='font-bold' href="https://hmas-furniture.web.app/"><i>Resale Furniture</i></a></div>
                    </div>
                </div>

                <div class="container">
                    <img src={gym} className='image w-full h-72 px-6 md:px-0 lg:px-0' alt="" />
                    <div class="overlay">
                        <div class="text"><a className='font-bold' href="https://prismatic-medovik-c168ad.netlify.app/"><i>Ultra-Active-Club</i></a></div>
                    </div>
                </div>

                <div class="container">
                    <img src={news} className='image px-6 md:px-0 lg:px-0 lg:w-full h-72' alt="" />
                    <div class="overlay">
                        <div class="text"><a className='font-bold' href="https://coders-info-bd.web.app/"><i>Learning Platform</i></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;