import React, { useContext } from "react";
import { TranslationContext } from './TranslationContext';

const About = () => {

    const { language, handleLanguageChange, t } = useContext(TranslationContext);
    

return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 p-4'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-2xl font-bold inline border-b-4 border-red-400'>
                    {t.about}
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-2xl font-bold'>
                        <p>{t.description}</p>
                    </div>
                    <div>
                        <p>
                        {t.frontend}
                        </p>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default About