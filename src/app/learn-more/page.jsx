'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import LearnMoreBackgroundComponent from '../components/LearnMoreBackgroundComponent'
import Wallet from '../components/Wallet'
import linke from '@/images/linke.svg'
import LearnMoreNav from '../components/LearnMoreNav'
import { BsWindowSidebar } from 'react-icons/bs'
import LenisProvider from '@/app/components/LenisProvider'

const page = () => {
    const [active, setActive] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollYEvent = () => {
            if(containerRef.current.scrollTop > 10) {
                setActive(true)
            } else{
                setActive(false)
            }
        }
        const scrollContainer = containerRef.current;
        if(scrollContainer) {
            scrollContainer.addEventListener('scroll', scrollYEvent)
        }
        
        return () => {
            if(scrollContainer) {
                scrollContainer.removeEventListener('scroll', scrollYEvent);
            }
        }
    }, [])

    //  useEffect(() => {
    //     const scrollYEvent = () => {
    //         console.log(window.scrollY)
    //         if(window.scrollY > 10) {
    //             setActive(true)
    //         } else {
    //             setActive(false)
    //         }
    //     }
    //     window.addEventListener('scroll', scrollYEvent)
        
    //     return () => {
    //         window.removeEventListener('scroll', scrollYEvent);
    //     }
    // }, [])

  return (
    <div data-lenis-prevent ref={containerRef} className='relative bg-[#fbfbfb] overflow-y-scroll h-screen w-full'>
        <LearnMoreNav active={active} />
        <LearnMoreBackgroundComponent />
        <Wallet />
        <div className="flex justify-center gap-3 pb-20">
            <p className='text-sm text-[#b8a5b9] font-light'>Powered by</p>
            <Image src={linke} width={1000} height={1000} unoptimized alt='linke' className='w-20' />
        </div>
    </div>
  )
}

export default page
