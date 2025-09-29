'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';

const SocialsNav = ({icons}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [socialActive, setSocialActive] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const socialsRef = useRef(null)

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    useEffect(() => {
        const handleResize = () => {
            if(typeof window !== 'undefined'){
                setWindowWidth(window.innerWidth)
            }
        }
        
    }, [])

    
    useGSAP(() => {
        const socialArray = gsap.utils.toArray('.social');
        if(socialActive && windowWidth < 720) {
            gsap.to(socialArray, {
                opacity: 1, 
                translateY: 0,
                duration: .5,
                stagger: {
                    from: 'top',
                    each: 0.05
                },
                ease: 'expo.in',
            })
        } else{
            gsap.to(socialArray, {
                opacity: 0, 
                translateY: 20,
                duration: .5,
                stagger: {
                    from: 'bottom',
                    each: 0.05
                },
                ease: 'expo.in',
            })
        }
    }, {
        scope: socialsRef, 
        dependencies: [socialActive]
    })

    return (
        <div data-prevent-lenis className='fixed md:left-1/2 left-[85%] flex justify-center md:-translate-x-1/2 flex-col w-auto md:bottom-10 bottom-5 md:bg-[#171717] md:p-3 rounded-xl z-40 transition-all duration-300 linear' 
                    onMouseLeave={handleMouseLeave} >
            <div ref={socialsRef} className="flex md:flex-row flex-col items-center  md:space-y-0 space-y-2">
                {icons.map((icon, index) => (
                    <Link href={icon.link} key={index} className="relative">

                        <div className={`absolute rounded-md bg-[#262626] text-neutral-500 -top-1 md:block hidden -left-2 transition-all duration-200 ease-in-out text-[13px] py-1 md:px-2 ${hoveredIndex === index ? '-translate-y-20 opacity-100  delay-100' : '-translate-y-15 opacity-0'}`}>{icon.name}</div>
                        <div 
                            onMouseOver={() => handleMouseEnter(index)}
                            className={`flex justify-center items-center md:w-12 md:h-12 md:p-0 p-1 social md:hidden rounded-full bg-[#262626] transition-mx transition-translate-y cursor-pointer relative transition-scale duration-300 linear 
                                ${hoveredIndex === index ? 'md:scale-[2] md:z-10 md:mx-6 md:-translate-y-5' : ''} 
                                ${hoveredIndex === index - 1 || hoveredIndex === index + 1 ? 'md:scale-[1.5] md:mx-6 md:-translate-y-3' : 'md:mx-2'}`}
                        >
                            {icon.icon}
                        </div>
                        <div 
                            onMouseOver={() => handleMouseEnter(index)}
                            className={`md:flex hidden justify-center items-center md:w-12 md:h-12 md:p-0 p-1 rounded-full bg-[#262626] transition-mx transition-translate-y cursor-pointer relative transition-scale duration-300 linear 
                                ${hoveredIndex === index ? 'md:scale-[2] md:z-10 md:mx-6 md:-translate-y-5' : ''} 
                                ${hoveredIndex === index - 1 || hoveredIndex === index + 1 ? 'md:scale-[1.5] md:mx-6 md:-translate-y-3' : 'md:mx-2'}`}
                        >
                            {icon.icon}
                        </div>
                    </Link>
                ))}
            </div>
            <div onClick={() => setSocialActive(!socialActive)}
                className={`flex justify-center items-center md:w-12 md:h-12 md:p-0 md:hidden addHeight p-1 my-2 rounded-full bg-[#262626] transition-mx transition-translate-y cursor-pointer relative transition-scale duration-300 linear 
                `}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-layout-navbar-collapse h-5 w-5 mx-auto text-neutral-500 dark:text-neutral-400"><path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M4 9h16"></path><path d="M10 16l2 -2l2 2"></path></svg>
            </div>
        </div>
    )
}

export default SocialsNav;
