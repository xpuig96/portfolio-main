import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 p-4'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-2xl font-bold inline border-b-4 border-red-400'>
                    Sobre mi
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-2xl font-bold'>
                        <p>Hola, Soy Xavi, encantado de conocerte.</p>
                    </div>
                    <div>
                        <p>
                            Soy un desarrollador web y tengo mucha pasión por mi trabajo. 
                            Me fascina todo lo relacionado con el Front-End, crear webs para clientes, 
                            apps de movil y cosas ligadas con la parte visible de la programación.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default About