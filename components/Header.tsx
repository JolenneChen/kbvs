"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ListIcon, XIcon } from '@phosphor-icons/react'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='sticky top-0 w-full z-50 h-20 border-1 border-[#FFB958] shadow-md shadow-[#FFB958] flex justify-between items-center'>
      <div className="flex items-center h-20 px-4 md:px-12 max-w-[1280px] ">
        <Link className='text-2xl font-extrabold text-[#FFB958]' href="#">
          TradingViaMini
        </Link>
      </div>
      <div className="justify-center items-center">
        <nav className="hidden md:grid grid-cols-4 gap-10 text-[#C6C6C9] ">
          <Link className='relative inline-block justify-self-center after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#FFB958] after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]' href="#Home">Home</Link>
          <Link className='relative inline-block justify-self-center after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#FFB958] after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]' href="#About">About Us</Link>
          <Link className='relative inline-block justify-self-center after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#FFB958]  after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]' href="#Contact">Contact Us</Link>
          <Link className='relative inline-block justify-self-center after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#FFB958] after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]' href="#Blog">Article Blog</Link>
        </nav>
      </div>
      <div className="hidden md:block">
        <div className="p-12">
          <Button className='bg-[#EB9A02] px-10 p-5 font-bold'>Join Now !</Button>
        </div>
      </div>

      <button
        className="md:hidden text-[#FFB958] "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
      </button>
      {isOpen && (

        <div className="absolute top-20 left-0 w-full  bg-black flex flex-col items-center md:hidden shadow-md  shadow-[#FFB958]">

          <Link href="#Home" className='border border-[#FFB958] w-full text-center py-3'>Home</Link>
          <Link href="#About" className='border border-[#FFB958] w-full text-center py-3'>About Us</Link>
          <Link href="#Contact" className='border border-[#FFB958] w-full text-center py-3'>Contact Us</Link>
          <Link href="#Blog" className='border border-[#FFB958] w-full text-center py-3'>Article Blog</Link>
          <div className=" border border-[#FFB958] w-full text-center">
            <Button className='bg-[#EB9A02] px-8 my-5'>
              Join Now !
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header