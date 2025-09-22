'use client'
import React, { useState, useEffect, useRef } from 'react'
import Navbar from '@/app/components/Navbar'
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const NavbarWrapper = ({children}) => {
  const [activeScroll, setActiveScroll] = useState(false);

  const navWrapperRef = useRef(null);
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top -10%',
        onEnter: () => setActiveScroll(true),
        onEnterBack: () => setActiveScroll(false),
      }
    })
  })

  return (
    <div className='w-full overflow-x-hidden' ref={navWrapperRef}>
        <Navbar activeScrollProp={activeScroll} />
        {children}
    </div>
  )
}

export default NavbarWrapper
