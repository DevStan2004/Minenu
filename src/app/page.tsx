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
import { link } from "fs";
import { Icon } from "@iconify/react";

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
      name: 'X(Twitter)',
      link: 'https://x.com/nucleus_core'
    },
    {
      icon: <Icon icon="simple-icons:tiktok" style={{ fontSize: "34px" }} />,
      name: 'Tiktok',
      link: 'https://www.tiktok.com/@nucleus_core?_t=zs-9069obgnvxq&_r=1'
    },
    {
      icon: <Icon icon="simple-icons:telegram" style={{ fontSize: "34px" }} />,
      name: 'Telegram channel tg',
      link: 'https://t.me/nucleus_core'
    },
    {
      icon: <Icon icon="mdi:google-play" style={{ fontSize: "34px" }} />,
      name: 'App',
      link: 'https://play.google.com/store/apps/details?id=com.minenu.nu_app'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-facebook md:w-10 w-5 md:h-10 text-white"><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg>,
      name: 'Facebook',
      link: 'https://www.facebook.com/share/17Mx2TBJ99/'
    },
//     {
//       icon: <svg 
//   xmlns="http://www.w3.org/2000/svg" 
//   viewBox="0 0 24 24" 
//   fill="none" 
//   stroke="currentColor" 
//   strokeWidth="1" 
//   strokeLinecap="round" 
//   strokeLinejoin="round" 
//   className="tabler-icon tabler-icon-brand-google-play md:w-10 w-5 md:h-10 text-white"
// >
//   <path d="M3 4l13 8L3 20V4z" />
//   <path d="M14 12l7 4V8l-7 4z" />
// </svg>,
//       name: 'Instagram',
//       link: ''
//     },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-youtube md:w-10 w-5 md:h-10 text-white dark:text-neutral-300"><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path><path d="M10 9l5 3l-5 3z"></path></svg>,
      name: 'Youtube',
      link: 'https://www.youtube.com/@nucleus_core'
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
      <TonInfo />
      
      <Feature />
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
      <Tonfeatures />
      <FAQS />
      <Connect />
      <SocialsNav icons={icons} />
    </div>
  );
}
