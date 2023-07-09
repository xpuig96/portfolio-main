import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profileImage from '../assets/logo1.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex flex-col md:flex-row md:items-center mt-10'>
          <div className='md:order-2 md: mb-10 mt-4 md:mb-0 w-full h-full'>
            <img src={profileImage} alt='Profile Image' className='flex rounded-full w-90 h-70'/>
          </div>
          <div className='justify-center md:text-left text-justify mr-10'>
            <p className='text-red-400'>Hola, mi nombre es</p>
            <h1 className='text-3xl sm:text-2xl font-bold text-[#ccd6f6]'>Xavi Puig Navarro</h1>
            <h2 className='text-1xl sm:text-2xl font-bold text-[#8892b0]'>Desarrollador Web</h2>
            <div className='py-3 max-w'>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-400 hover:border-red-400'>
                    Ver Portfolio 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-2'/>
                    </span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


