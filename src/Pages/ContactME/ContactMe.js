import React from 'react';

const ContactMe = () => {
    return (
        <div>
            <h1 className='text-4xl text-primary font-bold text-center mt-12 md:mt-44 lg:mt-44 mb-10'>Contact Me</h1>
            <div className='grid lg:grid-cols-2 lg:ml-96 px-8 md:px-0x lg:px-0'>
                <div className=''>
                    <input type="text" placeholder="Name" className="input input-bordered w-full  bg-base-200 mb-8" />
                    <br />
                    <input type="text" placeholder="Email" className="input input-bordered w-full bg-base-200  mb-8" />

                    <br />
                    <textarea className="textarea input-bordered w-full h-48  bg-base-200" placeholder="Message"></textarea>
                </div>


            </div>

            <div className='ml-9 lg:ml-[380px] mt-5'>
                <button className="btn btn-primary font-bold">Send Message</button>
            </div>
        </div>
    );
};

export default ContactMe;