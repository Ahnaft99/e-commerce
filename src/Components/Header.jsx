import React from 'react'
import logo from '../assets/Logo.png'
import Container from './Container'

const Header = () => {
  return (
    <>
    <div className='w-full bg-[#FFFFFF] items-center'>
    <Container>
        <div className='w-full flex py-4'>
        <div className='w-1/2'>
        <img src={logo} alt="" />
        </div>
        <div className='w-1/2'>
        <ul className='flex gap-4'>
            <li className='text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold transition-transform duration-150 ease-in-out cursor-pointer'>Home</li>
            <li className='text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold transition-transform duration-150 ease-in-out cursor-pointer'>Shop</li>
            <li className='text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold transition-transform duration-150 ease-in-out cursor-pointer'>About</li>
            <li className='text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold transition-transform duration-150 ease-in-out cursor-pointer'>Contact</li>
            <li className='text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold transition-transform duration-150 ease-in-out cursor-pointer'>Journal</li>
        </ul>
        </div>
        </div>
    </Container>
    </div>
  
    </>
  )
}

export default Header