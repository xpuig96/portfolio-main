import React from 'react'
import { FaGithub } from 'react-icons/fa'
import ExampleImg from '../assets/projects/example.jpg'
import ExampleImg2 from '../assets/projects/example2.jpeg'
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className='mt-20'>
                <p className='text-3xl font-bold inline border-b-4 border-red-400 '>
                    Portfolio
                </p>
                <p className='py-6'>//Echa un vistazo a todos mis proyectos:</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item 1 */}
                <div 
                style={{backgroundImage: `url(${ExampleImg2})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Nombre del Proyecto
                        </span>
                        <div className='pt-8 text-center'>
                            {/* Poner link del codigo en el href */}
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-auto bg-white text-gray-700 font-bold text-lg flex'>
                                <FaGithub className='mr-2' size={30}/> 
                                Codigo
                                </button> 
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item 2 */}
                <div 
                style={{backgroundImage: `url(${ExampleImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Nombre del Proyecto
                        </span>
                        <div className='pt-8 text-center'>
                            {/* Poner link del codigo en el href */}
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-auto bg-white text-gray-700 font-bold text-lg flex'>
                                <FaGithub className='mr-2' size={30}/> 
                                Codigo
                                </button> 
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        
        </div>
    </div>
  )
}

export default Work