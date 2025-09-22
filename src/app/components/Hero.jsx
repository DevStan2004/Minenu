'use client'
import React, { useEffect, useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import CeliaScreen from '@/images/celiaScreen.png'
import milestoneScreen from '@/images/milestoneScreen.jpg'
import verifyScreen from '@/images/verifyScreen.jpg'
import android from '@/images/android.png'
import ios from '@/images/ios.png'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Hero = () => {
    const [time, setTime] = useState(null);
    const containerRef = useRef(null);
    const ran = useRef(false)

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hour = date.getHours();
            const min = date.getMinutes();
            const collectTime = `${hour}:${min}`;
            
            setTime(collectTime)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useGSAP(() => {
        const splitTextInstances = []
        const titles = gsap.utils.toArray('.title');
        const textSplit = new SplitText('.title', {type: 'chars, words'});
        
        gsap.from('.text-image', {
            opacity: 0,
            duration: .8,
            ease: 'power3.in'
        })
        const mainTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top', 
                scrub: true
            }
        })
        mainTimeline.to('.stake', {
            top: 200,
            duration: 1,
            ease: 'expo.out'
        }).to('.substake', {
            top: 15,
            duration: 10,
            ease: 'expo.out'
        }, '<').to(textSplit.chars, {
            y: 100, 
            duration: 3,
            stagger: 0.06,
            ease: 'expo.out'
        }, '<').to('.text-image', {
            opacity: 0, 
            duration: 3,
            stagger: .06,
            ease: 'expo.out'
        }, '<')
        
        return () => {
            splitTextInstances.forEach(title => title.revert())
            mainTimeline.kill()
        }
    }, {scope: containerRef})
    
  return (
    <div ref={containerRef} className="flex flex-col items-center hero bg-gradient-to-t from-[#fafafa] mx-auto overflow-hidden rounded-b-4xl w-full">
        <div className="flex flex-col lg:w-[58%] md:w-[70%] w-full flex-grow flex-shrink-0 justify-center h-[40rem] md:mt-17 md:-mb-40 -mb-100 relative z-20">
          <h1 className="lg:text-7xl md:text-5xl text-[3rem] tracking-tight text-[#273243] font-semibold text-center title md:pb-3 md:-pb-0 -pb-3 ">Neucleus Core</h1>
          <h1 className="lg:text-7xl md:text-5xl text-[3rem] tracking-tight text-[#273243] font-semibold text-center title md:pb-3 md:-pb-0 -pb-3 "><span className="text-[#ff2815]">Chain</span></h1>
          <p className="text-center text-[#6c656a] md:px-10 md:py-5 py-3 px-6 text-image">First Native Blockchain for the Next Generation of Decentralized Apps. Start mining Nucleus Core cryptocurrency today with lightweight architecture built for mobile hardware.</p>
          <div className="flex space-x-4 justify-center items-center text-image">
            <Link href='' className="lg:w-[25%] md:w-[22%] w-[30%]">
              <Image src={android} width={1000} height={1000} alt='andoid' className="w-full h-full" />
            </Link>
            <Link href='' className="lg:w-[25%] md:w-[22%] w-[30%]">
              <Image src={ios} width={1000} height={1000} alt='ios' className="w-full h-full" />
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto relative h-full mb-10">
            <div className="overflow-hidden absolute md:-bottom-10 -bottom-60 z-1 w-full h-full animate-scale">
                <div className="w-[60rem] h-[60rem] rounded-full border-r-2 border-s-2  border-white absolute left-1/2 -translate-x-1/2 -top-50"></div>
            </div>
            <div className="absolute z-2 rounded-[3rem] w-[22rem] left-1/2 -translate-x-1/2 md:translate-y-0 translate-y-40 stake bg-[#171717] p-5 flex flex-col top-30 animate-screen">
                <div className="flex flex-col space-y-3 absolute -left-1 top-20">
                    <div className="w-1 h-15 bg-[#171717]"></div>
                    <div className="w-1 h-15 bg-[#171717]"></div>
                </div>
                <div className="flex justify-between items-center p-3">
                    <p className="text-white">{time}</p>
                    <div className="flex space-x-5">
                        <div className="flex justify-center items-center border border-[#e4e4e462] bg-gradient-to-t from-[#171717] to-[#e4e4e431] rounded-full w-3 h-3">
                            <div className="rounded-full w-1 h-1 border border-[#e4e4e41e]"></div>
                        </div>
                        <div className="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M19.2 1.72656C19.2 1.10524 18.7224 0.601562 18.1333 0.601562H17.0667C16.4776 0.601562 16 1.10524 16 1.72656V11.4766C16 12.0979 16.4776 12.6016 17.0667 12.6016H18.1333C18.7224 12.6016 19.2 12.0979 19.2 11.4766V1.72656ZM11.7659 3H12.8326C13.4217 3 13.8992 3.51577 13.8992 4.152V11.448C13.8992 12.0842 13.4217 12.6 12.8326 12.6H11.7659C11.1768 12.6 10.6992 12.0842 10.6992 11.448V4.152C10.6992 3.51577 11.1768 3 11.7659 3ZM7.43411 5.60156H6.36745C5.77834 5.60156 5.30078 6.1239 5.30078 6.76823V11.4349C5.30078 12.0792 5.77834 12.6016 6.36745 12.6016H7.43411C8.02322 12.6016 8.50078 12.0792 8.50078 11.4349V6.76823C8.50078 6.1239 8.02322 5.60156 7.43411 5.60156ZM2.13333 8H1.06667C0.477563 8 0 8.51487 0 9.15V11.45C0 12.0851 0.477563 12.6 1.06667 12.6H2.13333C2.72244 12.6 3.2 12.0851 3.2 11.45V9.15C3.2 8.51487 2.72244 8 2.13333 8Z" fill="white"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.27052 3.11983C11.7576 3.11993 14.1496 4.02494 15.9521 5.6478C16.0879 5.77309 16.3048 5.77151 16.4385 5.64426L17.736 4.40419C17.8037 4.33964 17.8414 4.25222 17.8409 4.16125C17.8403 4.07029 17.8015 3.98328 17.733 3.9195C13.002 -0.374207 5.53829 -0.374207 0.807275 3.9195C0.738743 3.98324 0.699859 4.07021 0.699227 4.16118C0.698595 4.25214 0.736267 4.3396 0.803908 4.40419L2.10177 5.64426C2.23537 5.7717 2.45249 5.77328 2.58814 5.6478C4.39088 4.02483 6.78317 3.11982 9.27052 3.11983ZM9.26717 7.26377C10.6245 7.26369 11.9334 7.76595 12.9395 8.67297C13.0756 8.80169 13.2899 8.7989 13.4226 8.66668L14.7099 7.3718C14.7777 7.30388 14.8153 7.21174 14.8143 7.116C14.8133 7.02025 14.7738 6.92889 14.7047 6.86236C11.6408 4.02505 6.8961 4.02505 3.83227 6.86236C3.76306 6.92889 3.72357 7.0203 3.72266 7.11607C3.72176 7.21185 3.7595 7.30398 3.82744 7.3718L5.11435 8.66668C5.247 8.7989 5.46136 8.80169 5.59745 8.67297C6.6029 7.76655 7.91074 7.26433 9.26717 7.26377ZM11.7916 10.0035C11.7935 10.1069 11.7565 10.2066 11.6892 10.279L9.51249 12.6883C9.44868 12.7591 9.36169 12.799 9.27092 12.799C9.18015 12.799 9.09316 12.7591 9.02935 12.6883L6.85232 10.279C6.78507 10.2065 6.74808 10.1068 6.75007 10.0034C6.75206 9.90002 6.79287 9.8021 6.86286 9.73279C8.25296 8.44324 10.2889 8.44324 11.679 9.73279C11.7489 9.80216 11.7897 9.90011 11.7916 10.0035Z" fill="white"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="14" viewBox="0 0 28 14" fill="none"><rect opacity="0.35" x="0.699219" y="0.601562" width="24" height="12" rx="3.8" fill="white" stroke="#171717"></rect><path opacity="0.4" d="M26.0977 4.76953V8.76953C26.9024 8.43075 27.4257 7.64266 27.4257 6.76953C27.4257 5.8964 26.9024 5.10831 26.0977 4.76953Z" fill="white"></path><rect x="2" y="2.10156" width="21" height="9" rx="2.5" fill="white"></rect></svg>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center text-white w-full">
                    <Image src={CeliaScreen} alt='Minenu screen' width={1000} height={1000} className='w-full h-full' />
                </div>
            </div>
            <div className="absolute z-0 rounded-[3rem] md:w-[18rem] w-[15rem] left-60 bg-[#171717] substake p-5 flex-col md:flex hidden top-80 rotate-25 animate-verify">
                <div className="flex flex-col space-y-3 absolute -left-1 top-20">
                    <div className="w-1 h-15 bg-[#171717]"></div>
                    <div className="w-1 h-15 bg-[#171717]"></div>
                </div>
                <div className="flex justify-between items-center p-3">
                    <p className="text-white">{time}</p>
                    <div className="flex space-x-5">
                        <div className="flex justify-center items-center border border-[#e4e4e462] bg-gradient-to-t from-[#171717] to-[#e4e4e431] rounded-full w-3 h-3">
                            <div className="rounded-full w-1 h-1 border border-[#e4e4e41e]"></div>
                        </div>
                        <div className="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M19.2 1.72656C19.2 1.10524 18.7224 0.601562 18.1333 0.601562H17.0667C16.4776 0.601562 16 1.10524 16 1.72656V11.4766C16 12.0979 16.4776 12.6016 17.0667 12.6016H18.1333C18.7224 12.6016 19.2 12.0979 19.2 11.4766V1.72656ZM11.7659 3H12.8326C13.4217 3 13.8992 3.51577 13.8992 4.152V11.448C13.8992 12.0842 13.4217 12.6 12.8326 12.6H11.7659C11.1768 12.6 10.6992 12.0842 10.6992 11.448V4.152C10.6992 3.51577 11.1768 3 11.7659 3ZM7.43411 5.60156H6.36745C5.77834 5.60156 5.30078 6.1239 5.30078 6.76823V11.4349C5.30078 12.0792 5.77834 12.6016 6.36745 12.6016H7.43411C8.02322 12.6016 8.50078 12.0792 8.50078 11.4349V6.76823C8.50078 6.1239 8.02322 5.60156 7.43411 5.60156ZM2.13333 8H1.06667C0.477563 8 0 8.51487 0 9.15V11.45C0 12.0851 0.477563 12.6 1.06667 12.6H2.13333C2.72244 12.6 3.2 12.0851 3.2 11.45V9.15C3.2 8.51487 2.72244 8 2.13333 8Z" fill="white"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.27052 3.11983C11.7576 3.11993 14.1496 4.02494 15.9521 5.6478C16.0879 5.77309 16.3048 5.77151 16.4385 5.64426L17.736 4.40419C17.8037 4.33964 17.8414 4.25222 17.8409 4.16125C17.8403 4.07029 17.8015 3.98328 17.733 3.9195C13.002 -0.374207 5.53829 -0.374207 0.807275 3.9195C0.738743 3.98324 0.699859 4.07021 0.699227 4.16118C0.698595 4.25214 0.736267 4.3396 0.803908 4.40419L2.10177 5.64426C2.23537 5.7717 2.45249 5.77328 2.58814 5.6478C4.39088 4.02483 6.78317 3.11982 9.27052 3.11983ZM9.26717 7.26377C10.6245 7.26369 11.9334 7.76595 12.9395 8.67297C13.0756 8.80169 13.2899 8.7989 13.4226 8.66668L14.7099 7.3718C14.7777 7.30388 14.8153 7.21174 14.8143 7.116C14.8133 7.02025 14.7738 6.92889 14.7047 6.86236C11.6408 4.02505 6.8961 4.02505 3.83227 6.86236C3.76306 6.92889 3.72357 7.0203 3.72266 7.11607C3.72176 7.21185 3.7595 7.30398 3.82744 7.3718L5.11435 8.66668C5.247 8.7989 5.46136 8.80169 5.59745 8.67297C6.6029 7.76655 7.91074 7.26433 9.26717 7.26377ZM11.7916 10.0035C11.7935 10.1069 11.7565 10.2066 11.6892 10.279L9.51249 12.6883C9.44868 12.7591 9.36169 12.799 9.27092 12.799C9.18015 12.799 9.09316 12.7591 9.02935 12.6883L6.85232 10.279C6.78507 10.2065 6.74808 10.1068 6.75007 10.0034C6.75206 9.90002 6.79287 9.8021 6.86286 9.73279C8.25296 8.44324 10.2889 8.44324 11.679 9.73279C11.7489 9.80216 11.7897 9.90011 11.7916 10.0035Z" fill="white"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="14" viewBox="0 0 28 14" fill="none"><rect opacity="0.35" x="0.699219" y="0.601562" width="24" height="12" rx="3.8" fill="white" stroke="#171717"></rect><path opacity="0.4" d="M26.0977 4.76953V8.76953C26.9024 8.43075 27.4257 7.64266 27.4257 6.76953C27.4257 5.8964 26.9024 5.10831 26.0977 4.76953Z" fill="white"></path><rect x="2" y="2.10156" width="21" height="9" rx="2.5" fill="white"></rect></svg>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center text-white w-full">
                    <Image src={milestoneScreen} alt='milestone screen' width={1000} height={1000} className='w-full h-full' />
                </div>
            </div>
            <div className="absolute z-0 rounded-[3rem] md:w-[18rem] w-[15rem] substake right-60 bg-[#171717] p-5 md:flex hidden flex-col top-80 -rotate-25 animate-verify">
                <div className="flex flex-col space-y-3 absolute -left-1 top-20">
                    <div className="w-1 h-15 bg-[#171717]"></div>
                    <div className="w-1 h-15 bg-[#171717]"></div>
                </div>
                <div className="flex justify-between items-center p-3">
                    <p className="text-white">{time}</p>
                    <div className="flex space-x-5">
                        <div className="flex justify-center items-center border border-[#e4e4e462] bg-gradient-to-t from-[#171717] to-[#e4e4e431] rounded-full w-3 h-3">
                            <div className="rounded-full w-1 h-1 border border-[#e4e4e41e]"></div>
                        </div>
                        <div className="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M19.2 1.72656C19.2 1.10524 18.7224 0.601562 18.1333 0.601562H17.0667C16.4776 0.601562 16 1.10524 16 1.72656V11.4766C16 12.0979 16.4776 12.6016 17.0667 12.6016H18.1333C18.7224 12.6016 19.2 12.0979 19.2 11.4766V1.72656ZM11.7659 3H12.8326C13.4217 3 13.8992 3.51577 13.8992 4.152V11.448C13.8992 12.0842 13.4217 12.6 12.8326 12.6H11.7659C11.1768 12.6 10.6992 12.0842 10.6992 11.448V4.152C10.6992 3.51577 11.1768 3 11.7659 3ZM7.43411 5.60156H6.36745C5.77834 5.60156 5.30078 6.1239 5.30078 6.76823V11.4349C5.30078 12.0792 5.77834 12.6016 6.36745 12.6016H7.43411C8.02322 12.6016 8.50078 12.0792 8.50078 11.4349V6.76823C8.50078 6.1239 8.02322 5.60156 7.43411 5.60156ZM2.13333 8H1.06667C0.477563 8 0 8.51487 0 9.15V11.45C0 12.0851 0.477563 12.6 1.06667 12.6H2.13333C2.72244 12.6 3.2 12.0851 3.2 11.45V9.15C3.2 8.51487 2.72244 8 2.13333 8Z" fill="white"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.27052 3.11983C11.7576 3.11993 14.1496 4.02494 15.9521 5.6478C16.0879 5.77309 16.3048 5.77151 16.4385 5.64426L17.736 4.40419C17.8037 4.33964 17.8414 4.25222 17.8409 4.16125C17.8403 4.07029 17.8015 3.98328 17.733 3.9195C13.002 -0.374207 5.53829 -0.374207 0.807275 3.9195C0.738743 3.98324 0.699859 4.07021 0.699227 4.16118C0.698595 4.25214 0.736267 4.3396 0.803908 4.40419L2.10177 5.64426C2.23537 5.7717 2.45249 5.77328 2.58814 5.6478C4.39088 4.02483 6.78317 3.11982 9.27052 3.11983ZM9.26717 7.26377C10.6245 7.26369 11.9334 7.76595 12.9395 8.67297C13.0756 8.80169 13.2899 8.7989 13.4226 8.66668L14.7099 7.3718C14.7777 7.30388 14.8153 7.21174 14.8143 7.116C14.8133 7.02025 14.7738 6.92889 14.7047 6.86236C11.6408 4.02505 6.8961 4.02505 3.83227 6.86236C3.76306 6.92889 3.72357 7.0203 3.72266 7.11607C3.72176 7.21185 3.7595 7.30398 3.82744 7.3718L5.11435 8.66668C5.247 8.7989 5.46136 8.80169 5.59745 8.67297C6.6029 7.76655 7.91074 7.26433 9.26717 7.26377ZM11.7916 10.0035C11.7935 10.1069 11.7565 10.2066 11.6892 10.279L9.51249 12.6883C9.44868 12.7591 9.36169 12.799 9.27092 12.799C9.18015 12.799 9.09316 12.7591 9.02935 12.6883L6.85232 10.279C6.78507 10.2065 6.74808 10.1068 6.75007 10.0034C6.75206 9.90002 6.79287 9.8021 6.86286 9.73279C8.25296 8.44324 10.2889 8.44324 11.679 9.73279C11.7489 9.80216 11.7897 9.90011 11.7916 10.0035Z" fill="white"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="14" viewBox="0 0 28 14" fill="none"><rect opacity="0.35" x="0.699219" y="0.601562" width="24" height="12" rx="3.8" fill="white" stroke="#171717"></rect><path opacity="0.4" d="M26.0977 4.76953V8.76953C26.9024 8.43075 27.4257 7.64266 27.4257 6.76953C27.4257 5.8964 26.9024 5.10831 26.0977 4.76953Z" fill="white"></path><rect x="2" y="2.10156" width="21" height="9" rx="2.5" fill="white"></rect></svg>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center text-white w-full">
                    <Image src={verifyScreen} alt='verify screen' width={1000} height={1000} className='w-full h-full' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
