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
    
    
    useEffect(() => {
        // 1. Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
    
        // 2. Sync Lenis and GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
    
        // Clean up the instances when the component unmounts
        return () => {
          lenis.destroy();
          ScrollTrigger.killAll(); // Important for cleaning up GSAP animations
        };
    }, []);

  return (
    <div onClick={() => console.log('this is it')} ref={navWrapperRef}>
        <Navbar activeScrollProp={activeScroll} />
        {children}
    </div>
  )
}

export default NavbarWrapper
