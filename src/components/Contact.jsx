import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/e1f82533-05b8-4440-84df-c945cc4d5c60" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-red-400'>Contacto</p>
                <p className='py-4'>//Envíe el formulario a continuación o envíeme un correo electrónico - xpuiig14@gmail.com</p>
                <p>//Teléfono: 671321190</p>
            </div>
            <input className=' p-2 bg-[#ccd6f6] text-black' type="text" placeholder='Escribe tu Nombre' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='Escribe tu Email' name='email'/>
            <textarea className='p-2 bg-[#ccd6f6] text-black' rows="10" placeholder='Escribe el Mensaje' name="message"></textarea>
            <button className='text-white border-2 hover:bg-red-400 hover:border-red-400 px-4 py-3 my-5 mx-auto flex items-center'>
                Enviar Email
            </button>
        </form>
    </div>
  )
}

export default Contact