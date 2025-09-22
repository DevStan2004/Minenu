'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import minenuLogo from '@/images/minenuLogo.png'

const Navbar = ({activeScrollProp}) => {
  const [activeNav, setActiveNav] = useState(false);
  const navRef = useRef(null)
  const pathname = usePathname();


  return (
    <div className={`${pathname === '/whitepaper' || pathname === '/learn-more' ? 'hidden' : 'flex'} ${activeScrollProp ? 'md:w-[70%] w-[80%] top-5 shadow-md' : 'md:w-full w-[95%] top-0'} fixed -translate-x-1/2 left-1/2 justify-center flex-col rounded-3xl z-40 bg-white`}>
      <div className={`items-center w-full justify-between space-x-5 md:p-5 p-2 transition-w duration-500 linear ${pathname === '/whitepaper' || pathname === '/learn-more' ? 'hidden' : 'flex'} `}>
        <Image src={minenuLogo} width={1000} height={1000} alt='minenu' className='md:w-15 w-10' />
        <div className={`flex justify-between items-center ${activeScrollProp ? 'w-[80%]' : 'md:w-[50%]'} transition-w duration-200`}>
            <ul className="md:flex space-x-5 items-center mx-auto hidden">
              <li><Link href='/' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">Home</Link></li>
              <li><Link href='#features' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">Products</Link></li>
              <li><Link href='/whitepaper' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">WhitePaper</Link></li>
            </ul>
        </div>
        <div className={`flex space-x-5`}>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <p className="text-[#191919] text-sm">us English</p>
              <FaChevronDown className="text-[#191919] text-sm" />
            </div>
            <Link href='/learn-more' className={`border border-[#737373] rounded-lg px-2 text-black text-[13px] justify-center items-center ${activeScrollProp ? 'hidden' : 'md:flex hidden'}`}>Learn More</Link>
            <button className={`rounded-lg py-1 px-2 text-white font-semibold bg-gradient-to-t from-black to-[#737373] text-[15px] ${activeScrollProp ? 'hidden' : 'md:block hidden'}`}>Contact Us</button>
            <Menu onClick={() => setActiveNav(!activeNav)} size={40} className='md:hidden' />
        </div>
      </div>
      <div ref={navRef} className='w-full rounded-2xl bg-white md:hidden transition-height duration-200 relative z-80 overflow-hidden' style={{
          height: activeNav ? `${navRef.current?.scrollHeight}px` : '0px'
        }}>
        <ul className={` p-5 flex flex-col space-y-5`} >
          <li><Link href='/' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">Home</Link></li>
          <li><Link href='#features' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">Products</Link></li>
          <li><Link href='/whitepaper' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">WhitePaper</Link></li>
          <li><Link href='/beta' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">Beta</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
