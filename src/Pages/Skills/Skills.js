import React from 'react';
import skillImg from '../../Assets/skills.gif';

const Skills = () => {

    return (
        <div id='skills'>
            <h1 className='text-4xl text-primary font-bold text-center mt-12 lg:mt-44 mb-10'>My Expertise Area</h1>
            <div className="hero bg-white">
                <div className="hero-content flex-col-reverse
                md:flex-row lg:flex-row">
                    <img src={skillImg} className="h-0 md:h-[400px] lg:h-[400px] w-full md:w-1/2 lg:w-1/2 rounded-lg pr-0 lg:pr-24 pt-4 lg:pt-0" alt='' />
                    <div className='grid grid-cols-1 gap-12'>
                        <div>
                            <h1 className="text-3xl font-bold mb-8"><i>Expertise</i></h1>
                            <div className='grid grid-cols-3 gap-4'>

                                <p className=' px-0 font-accent'>HTML5</p>
                                <p className=' px-0 font-accent'>CSS3</p>
                                <p className=' px-0 font-accent'>JavaScript</p>
                                <p className=' px-0 font-accent'>Bootstrap</p>
                                <p className=' px-0 font-accent'>Tailwind CSS</p>
                                <p className=' px-0 font-accent'>DaisyUI</p>
                                <p className=' px-0 font-accent'>SemanticUI</p>
                                <p className=' px-0 font-accent'>MaterialUI</p>
                                <p className=' px-0 font-accent'>React JS</p>
                                <p className=' px-0 font-accent'>React Bootstrap</p>
                                <p className=' px-0 font-accent'>React Query</p>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold mb-8 "><i>Comfortable</i></h1>
                            <div>
                                <div className='grid grid-cols-3 gap-6'>

                                    <p className=' px-0 font-accent'>Node js</p>
                                    <p className=' px-0 font-accent'>Express js</p>
                                    <p className=' px-0 font-accent'>MongoDb</p>
                                    <p className=' px-0 font-accent'>Firebase</p>
                                    <p className=' px-0 font-accent'>C++</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;