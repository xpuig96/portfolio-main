import React, { useContext } from "react";
import { TranslationContext } from './TranslationContext';

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Angular from '../assets/angular.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Java from '../assets/java.png'
import Netbeans from '../assets/netbeans.png'
import Virtualbox from '../assets/virtualbox.png'
import VegasPro from '../assets/vegaspro.png'
import Photoshop from '../assets/photoshop.png'

const Skills = () => {

    const { language, handleLanguageChange, t } = useContext(TranslationContext);

  return (
    <div name='skills' className='w-full md:h-screen bg-[#0a192f]  text-gray-300 flex justify-center items-center p-14'>
        <div className='max-w-[1000px] mx-auto p-4 flex-col  w-full h-full'>
            <div className='mt-20'>
                <p className='text-3xl font-bold inline border-b-4 border-red-400'>{t.skills}</p>
                <p className='py-4'>{t.descriptionSkills}</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="HTML icon" />
                    <p>Javascript</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p>React</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
                    <p>Github</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Angular} alt="HTML icon" />
                    <p>Angular</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p>Tailwind</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                    <p>Java</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Netbeans} alt="HTML icon" />
                    <p>Netbeans IDE</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Virtualbox} alt="HTML icon" />
                    <p>Virtualbox</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={VegasPro} alt="HTML icon" />
                    <p>Vegas Pro</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Photoshop} alt="HTML icon" />
                    <p>Photoshop</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills