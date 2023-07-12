import React, { useContext } from "react";
import { TranslationContext } from './TranslationContext';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profileImage from '../assets/logo1.jpg';
import {Link} from 'react-scroll';

const Home = () => {
  
  const { language, handleLanguageChange, t } = useContext(TranslationContext);

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex flex-col md:flex-row md:items-center mt-10'>
          <div className='md:order-2 md: mb-10 mt-4 md:mb-0 w-full h-full'>
            <img src={profileImage} alt='Profile Image' className='flex rounded-full w-90 h-70'/>
          </div>
          <div className='justify-center md:text-left text-justify mr-10'>
            <p className='text-red-400'>{t.hellohome}</p>
            <h1 className='text-3xl sm:text-2xl font-bold text-[#ccd6f6]'>{t.name}</h1>
            <h2 className='text-1xl sm:text-2xl font-bold text-[#8892b0]'>{t.dev}</h2>
            <div className='py-3 max-w'>
              <Link to="work" smooth={true} offset={50} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-400 hover:border-red-400'>
                    {t.lookPor} 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-2'/>
                    </span>
                </button>
              </Link>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


