'use client'

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Feature from '@/app/components/Features'
import FAQS from '@/app/components/FAQS'
import Connect from '@/app/components/Connect'
import Footer from '@/app/components/Footer'
import SocialsNav from '@/app/components/SocialsNav'
import Lenis from 'lenis';
import gsap from 'gsap';
import Tonfeatures from '@/app/components/TonFeatures'
import TonInfo from '@/app/components/TonInfo'
export default function Home() {

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

  const icons = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-x md:w-10 w-5 md:h-10 text-white"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>,
      name: 'X(Twitter)'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin md:w-10 w-5 md:h-10 text-white"><path d="M8 11v5"></path><path d="M8 8v.01"></path><path d="M12 16v-5"></path><path d="M16 16v-3a2 2 0 1 0 -4 0"></path><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path></svg>,
      name: 'Linkedin'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github md:w-10 w-5 md:h-10 text-white"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>,
      name: 'Github'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-link md:w-10 w-5 md:h-10 text-white"><path d="M9 15l6 -6"></path><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path></svg>,
      name: 'Quick Links'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-facebook md:w-10 w-5 md:h-10 text-white"><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg>,
      name: 'Facebook'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-instagram md:w-10 w-5 md:h-10 text-white"><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M16.5 7.5v.01"></path></svg>,
      name: 'Instagram'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-youtube md:w-10 w-5 md:h-10 text-white dark:text-neutral-300"><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path><path d="M10 9l5 3l-5 3z"></path></svg>,
      name: 'Youtube'
    }
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentContainer = containerRef.current;
    if(!currentContainer) {
      return
    } 

    const handleScroll = () => {
      console.log('this is it')
    }

    currentContainer.addEventListener('scroll', handleScroll)

  }, [])
  return (
    <div ref={containerRef}>
      <Hero />
      <div className="flex flex-col mt-20">
        <div className="flex justify-center flex-col md:space-y-5 space-y-3 mb-9">
          <h3 className='text-center text-4xl font-bold'>Standing Strong on <span className="text-[#ea922c]">1M+</span> Nucleans</h3>
          <p className='text-center'>Together building the next generation ecosystem.</p>
        </div>
        <div className="flex md:flex-row flex-col items-center md:w-[80%] mx-auto md:space-x-5 gap-2 w-full md:p-0 p-2">
          <div className="hover:shadow-xl border border-[#e4e4e4] overflow-hidden rounded-xl transition-shadow duration-100 flex-grow w-full">
            <div
              className="relative p-4 shadow-[inset_0_0_1000px_#ffffff]"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            >
              <div className="flex flex-col space-x-5">
                <h1 className="text-4xl text-[#ea922c] font-bold mb-4">+1M</h1>
                <p className="text-black text-sm">
                  Global Users
                </p>
              </div>
            </div>
          </div>
          <div className="hover:shadow-xl border border-[#e4e4e4] overflow-hidden rounded-xl transition-shadow duration-100 flex-grow w-full">
            <div
              className="relative p-4 shadow-[inset_0_0_1000px_#ffffff]"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            >
              <div className="flex flex-col space-x-5">
                <h1 className="text-4xl font-bold mb-4 text-[#ea922c]">+179</h1>
                <p className="text-black text-sm">
                  Countries Presence
                </p>
              </div>
            </div>
          </div>
          <div className="hover:shadow-xl border border-[#e4e4e4] overflow-hidden rounded-xl transition-shadow duration-100 flex-grow w-full">
            <div
              className="relative p-4 shadow-[inset_0_0_1000px_#ffffff]"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            >
              <div className="flex flex-col space-x-5">
                <h1 className="text-4xl font-bold mb-4 text-[#ea922c]">500K</h1>
                <p className="text-black text-sm">
                   Downloads
                </p>
              </div>
            </div>
          </div>
          <div className="hover:shadow-xl border border-[#e4e4e4] overflow-hidden rounded-xl transition-shadow duration-100 flex-grow w-full">
            <div
              className="relative p-4 shadow-[inset_0_0_1000px_#ffffff]"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            >
              <div className="flex flex-col space-x-5">
                <h1 className="text-4xl font-bold mb-4 text-[#ea922c]">+1M</h1>
                <p className="text-black text-sm">
                  Social Followings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature />
      <TonInfo />
      <Tonfeatures />
      <FAQS />
      <Connect />
      <SocialsNav icons={icons} />
    </div>
  );
}
