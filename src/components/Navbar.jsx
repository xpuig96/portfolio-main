import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300' >
  
      {/* menu */}
        <ul className='hidden md:flex' >
          <li>
            <Link to="home" smooth={true} offset={50} duration={500}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              Sobre mi
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Experiencia
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>

      {/* Menu Bars */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}   
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
             Inicio
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
            Experiencia
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
            Contacto
          </Link>
        </li>  
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0' style={{fontWeight: 'bold'}}>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-700'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/xavi-puig-9b7470206/' target='_blank'>
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gray-800'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/xpuig96' target='_blank'>
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-red-700'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjsgNHglTWtsZkNHXjfMwNhXsfrJrZJJhJHhQfPllCzVhcmFscvRzTQQLZkcbTJvWfrCpl' target='_blank'>
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar