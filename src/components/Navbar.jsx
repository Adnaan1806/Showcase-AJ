import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <p className='font-bold text-3xl hover:text-pink-600 cursor-pointer'>AJ</p>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin className='hover:translate-y-2 hover:shadow-[0_0_17px_5px_theme(colors.pink.600)] transition-all duration-200 cursor-pointer'/>
            <FaGithub className='hover:translate-y-2 hover:shadow-[0_0_17px_5px_theme(colors.pink.600)] transition-all duration-200 cursor-pointer'/>
            <FaInstagram className='hover:translate-y-2 hover:shadow-[0_0_17px_5px_theme(colors.pink.600)] transition-all duration-200 cursor-pointer'/>
            <FaSquareXTwitter className='hover:translate-y-2 hover:shadow-[0_0_17px_5px_theme(colors.pink.600)] transition-all duration-200 cursor-pointer'/>
        </div>
    </nav>
  )
}

export default Navbar