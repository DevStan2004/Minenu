'use client'

import React, {useEffect} from 'react'
import Image from 'next/image'
import { FaArrowLeft, FaYoutube, FaTwitter, FaFacebookMessenger, FaLinkedin, FaFacebook, FaLink, FaGithubAlt, FaInstagram } from 'react-icons/fa'
import { ArrowLeft, Youtube, Twitter, Facebook, MessageCircle, Linkedin, Link, Github, Instagram } from 'lucide-react'
import rafael from '@/images/rafael.png'
import kojo from '@/images/kojo.png'
import kofi from '@/images/kofi.png'
import lara from '@/images/lara.png'
import fatima from '@/images/fatima.png'
import background from '@/images/background.png'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import opt1 from "@/images/Nucleus1.png"
import opt2 from "@/images/Nucleus2.png"

gsap.registerPlugin(ScrollTrigger)

const Features = () => {

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.features',
        start: 'top 20%',
        end: 'bottom top', 
        scrub: true, 
        pin: true
      }
    }).to('.features', {
      clipPath: "circle(70.7% at center)",
      duration: 5,
      ease: 'power3.inOut'
    }).to('.hero-scale', {
      scale: 1,
      overflow: 'visible',
      translateY: 20,
      duration: 5,
      ease: 'power3.inOut'
    }, '<')
  })

  return (
    <section className="flex justify-center items-center md:my-30 features" id='features'>
      <div className='scale-200 flex flex-col space-y-5 hero-scale'>
         <div className="flex justify-center flex-col md:space-y-5 mb-9 md:p-0 p-2">
          <h3 className='text-center md:text-6xl text-4xl md:mx-0 mx-5 font-bold'>Features so good you <span className="text-[#ea922c]">Love us</span></h3>
          <p className='text-center md:px-0 px-5'>Mining NU Coin is free. All you need is an invitation from an existing trusted miner on the network.</p>
        </div>
        <div className="md:flex-row flex-col flex justify-center items-start md:w-[95%] w-full px-2 mx-auto md:space-x-5 space-y-3">
          <div className="shadow-lg shadow-white/20 rounded-xl w-full overflow-hidden flex-shrink-0 md:w-[80%] md:h-[35rem] h-[22rem] p-5 flex items-end bg-gradient-to-t from-white to-[#f9fafb] relative">
              <Image src={opt1} className='w-full md:h-full absolute top-0 left-0 object-fit'  alt='opt1'/>
          </div>
          <div className="shadow-lg shadow-white/20 rounded-xl md:h-[35rem] h-[22rem] p-5 flex items-end w-full flex-shrink-0 md:w-[70%] relative overflow-hidden">
              <Image src={opt2} className='w-full md:h-full absolute top-0 left-0' alt='opt1' />
          </div>
        </div>
        {/* <div className="md:flex-row flex-col flex justify-center items-center md:w-[95%] w-full px-2 mx-auto md:space-x-5 space-y-3">
          <div className="shadow-lg rounded-xl w-full overflow-hidden md:w-[70%] h-[25rem] p-5 flex items-end bg-gradient-to-t from-white to-[#f9fafb] relative">
            <div className="w-full h-full absolute top-0 left-0" style={{
                backgroundImage: `url(${background.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                maskImage: 'linear-gradient(to top, transparent 30%, black)'
            }}>
                <div className="flex flex-col space-y-2 items-center absolute left-[10%] top-[4%]">
                    <Image src={fatima} width={1000} height={1000} alt='fatima' className='w-12 h-12 rounded-full border-white border-2 shadow-lg contrast-150' />
                    <div className="rounded-lg text-white py-1 px-2 bg-[#3b4657] text-sm">Fatima</div>
                </div>
                <div className="flex flex-col space-y-2 items-center absolute left-[30%] top-[45%]">
                    <Image src={lara} width={1000} height={1000} alt='lara' className='w-12 h-12 rounded-full border-white border-2 shadow-lg contrast-150' />
                    <div className="rounded-lg text-white py-1 px-2 bg-[#3b4657] text-sm">Fatima</div>
                </div>
                <div className="flex flex-col space-y-2 items-center absolute left-[50%] top-[20%]">
                    <Image src={rafael} width={1000} height={1000} alt='rafael' className='w-12 h-12 rounded-full border-white border-2 shadow-lg contrast-100' />
                    <div className="rounded-lg text-white py-1 px-2 bg-[#3b4657] text-sm">Fatima</div>
                </div>
                <div className="flex flex-col space-y-2 items-center absolute left-[65%] top-[5%]">
                    <Image src={kojo} width={1000} height={1000} alt='kojo' className='w-12 h-12 rounded-full border-white border-2 shadow-lg contrast-120' />
                    <div className="rounded-lg text-white py-1 px-2 bg-[#3b4657] text-sm">Fatima</div>
                </div>
                <div className="flex flex-col space-y-2 items-center absolute left-[80%] top-[25%]">
                    <Image src={kofi} width={1000} height={1000} alt='kofi' className='w-12 h-12 rounded-full border-white border-2 shadow-lg contrast-120' />
                    <div className="rounded-lg text-white py-1 px-2 bg-[#3b4657] text-sm">Fatima</div>
                </div>
            </div>
            <div className="flex flex-col relative z-10">
              <h6 className="font-semibold text-black text-2xl">Minenu Circle</h6>
              <p className='text-[#191919] text-sm'>A community-driven news sharing platform powered by the Minenu Token, designed to enable users to contribute, share, and engage with the latest news and updates within the cosystem.</p>
            </div>
          </div>
          <div className="shadow-lg rounded-xl h-[25rem] p-5 flex items-end w-full md:w-[45%] relative bg-gradient-to-t from-white to-[#f9fafb]">
            <div className="w-full absolute left-1/2 -translate-x-1/2 top-0 flex justify-center items-center h-full" style={{
              maskImage: 'linear-gradient(to top, transparent 30%, black)'
            }}>
              <div className="shadow rounded-xl border border-[#e4e4e4] w-[70%] h-[80%] p-3 flex flex-col justify-between gap-3">
                <div className='flex gap-2 items-center'>
                  <div className='w-3 h-3 rounded-full bg-red-500 hover:bg-red-300 cursor-pointer'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-300 cursor-pointer'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500 hover:bg-green-300 cursor-pointer'></div>
                </div>
                <div className='flex gap-3 w-full items-end justify-center'>
                  <div className='w-8 h-[15rem] bg-[#191919] hover:bg-[#403f3f] rounded-full'></div>
                  <div className='w-8 h-[20rem] bg-[#191919] hover:bg-[#403f3f] rounded-full'></div>
                  <div className='w-8 h-[17rem] bg-[#191919] hover:bg-[#403f3f] rounded-full'></div>
                  <div className='w-8 h-[22rem] bg-[#191919] hover:bg-[#403f3f] rounded-full'></div>
                  <div className='w-8 h-[19rem] bg-[#191919] hover:bg-[#403f3f] rounded-full'></div>
                  <div className='w-8 h-[25rem] bg-[#fea95e] hover:bg-[#fea95ee1] rounded-full'></div>
                </div>
              </div>

            </div>
            <div className="rounded-md bg-[#191919] shadow-[inset_0_0_10px_rgba(255,255,255,0.4)] text-white py-1.5 px-5 absolute top-1/3 left-10 hover:bg-blue-900 hover:translate-x-1.5 transition-transform transition-bg duration-500 hover:cursor-none">Manu</div>
            <div className="rounded-md bg-[#191919] shadow-[inset_0_0_10px_rgba(255,255,255,0.4)] text-white py-1.5 px-5 absolute top-1/5 right-10 hover:bg-blue-900 hover:-translate-x-1.5 transition-transform transition-bg duration-500 hover:cursor-none">Kishore</div>
            <div className="flex flex-col">
              <h6 className="font-semibold text-black text-2xl">Mini Apps & Developer Innovation</h6>
              <p className='text-[#191919] text-sm'>Developers can build applications within the Minenu ecosystem, fully powered by Minenu</p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:w-[95%] w-full mx-auto md:space-x-5 space-y-3 p-2">
          <div className="shadow-lg rounded-xl h-[25rem] p-5 flex items-end w-full md:w-[45%] relative bg-gradient-to-t from-white to-[#f9fafb]">
            <div className="w-full absolute left-1/2 -translate-x-1/2 translate-y-2 top-0 flex justify-center items-center h-full" style={{
              maskImage: 'linear-gradient(to top, transparent 30%, black)'
            }}>
              <div className="flex justify-center items-center w-[24rem] h-[24rem] bg-[#fea95e] rounded-full relative">
                <div className="absolute top-0 h-full w-full  rounded-full rotation rotate-45">
                    <div className='absolute top-8 left-14 individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <Youtube strokeWidth={1} size='1rem' />
                    </div>
                    <div className='absolute bottom-8 left-14 individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <Instagram strokeWidth={1} size='1rem' />
                    </div>
                    <div className='absolute -right-6 top-1/2 -translate-1/2 individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <Twitter strokeWidth={1} size='1rem' />
                    </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 h-[18rem] w-[18rem] rounded-full minus-rotation">
                    <div className='absolute top-2 left-15 -individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <Twitter strokeWidth={1} size='1rem' />
                    </div>
                    <div className='absolute bottom-2 left-15 -individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <Linkedin strokeWidth={1} size='1rem' />
                    </div>
                    <div className='absolute -right-5 top-1/2 -translate-1/2 -individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <Github strokeWidth={1} size='1rem' className='rotate-180' />
                    </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 h-[12rem] w-[12rem] rounded-full rotation rotate-60">
                    <div className='absolute -top-2 left-15 individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <Link strokeWidth={1} size='1rem' />
                    </div>
                    <div className='absolute -bottom-2 left-15 individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <Facebook strokeWidth={1} size='1rem' />
                    </div>
                    <div className='absolute -right-6 top-1/2 -translate-1/2 individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <MessageCircle strokeWidth={1} size='1rem' />
                    </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 h-[6rem] w-[6rem] rounded-full minus-rotation rotate-60">
                    <div className='absolute -top-2 left-5 -individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <Linkedin strokeWidth={1} size='1rem' />
                    </div>
                    <div className='absolute -bottom-2 left-5 -individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <Github strokeWidth={1} size='1rem' />
                    </div>
                    <div className='absolute -right-6 top-1/2 -translate-1/2 -individual-rotation rounded-full text-white p-1 border-[0.01px] bg-[#3b4657]' >
                        <Instagram strokeWidth={1} size='1rem' />
                    </div>
                </div>
                <div className="flex justify-center items-center bg-white w-[18rem] h-[18rem] rounded-full">
                  <div className="flex justify-center items-center bg-[#fea95e] w-[12rem] h-[12rem] rounded-full">
                    <div className="flex justify-center items-center bg-white w-[6rem] h-[6rem] rounded-full">
                      <span className="text-xl font-bold">Minenu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h6 className="text-black text-2xl">Blockchain, On & Off Rams</h6>
              <p className='text-[#191919] text-sm'>Minenu offers a scalable Layer-1 blockchain platform with integrated features——including Crypto Swap, Onramp, and Offramp——that enable secure, seamless, and user-friendly management and exchange between cryptocurrencies and fiat currencies.</p>
            </div>
          </div>
          <div className="shadow-lg rounded-xl md:h-[25rem] h-[28rem] p-5 flex items-end w-full md:w-[70%] relative bg-[#f9fafb]">
            <div className="w-full absolute left-1/2 -translate-x-1/2 top-0 flex justify-center items-start pt-5 h-full overflow-hidden">
              <div className="rounded-xl border-x border-t border-[#e4e4e4] bg-white w-[90%] md:h-[75%] p-3 flex flex-col justify-between gap-3 overflow-hidden">
                <div className='flex gap-2 items-center'>
                  <div className='w-3 h-3 rounded-full bg-red-500 hover:scale-125 transition-scale duration-100 cursor-pointer'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500 hover:scale-125 transition-scale duration-100 cursor-pointer'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500 hover:scale-125 transition-scale duration-100 cursor-pointer'></div>
                </div>
                <div className="flex md:flex-row flex-col gap-5 flex-grow">
                    <div className="rounded-xl shadow bg-[#f9fafb] p-5 hover:scale-102 transition-scale duration-200 md:h-[15rem] translate-y-5">
                        <div className="flex items-center gap-3">
                            <div className="md:w-15 h-10 md:h-15 w-10 rounded-full border border-white relative">
                                <Image src={rafael} width={1000} height={1000} alt="rafael" className='w-full h-full rounded-full' />
                                <div className="w-3 h-3 absolute bg-green-500 rounded-full border border-white bottom-1 right-0"></div>
                            </div>
                            <div className="flex flex-col space-x-5">
                                <p className="text-[#bebcbc] text-sm">Newbie Trader</p>
                                <p className="font-semibold text-[#191919] text-xl" style={{
                                    maskImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.8) 2px, black)'
                                }}>Rafael Ortega</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl shadow bg-[#f9fafb] p-5 hover:scale-102 transition-scale duration-200 md:flex-grow md:h-[15rem] flex flex-col items-start translate-y-5">
                        <div className="flex justify-center items-center rounded-full border p-1 border-[#e4e4e4] cursor-pointer group hover:border-black hover:-translate-x-0.5 hover:scale-105 transition-border transition-translate transition-scale duration-200">
                            <ArrowLeft size='1rem' className='text-[#e4e4e4] group-hover:text-black transition-text duration-200' />
                        </div>
                        <div className="flex flex-col items-center w-full my-auto">
                            <h6 className='font-bold md:text-2xl'>Minenu</h6>
                            <p className='text-sm text-[#bebcbc]'>Join the Academy</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h6 className="text-black text-2xl">Minenu Academy</h6>
              <p className='text-[#191919] text-sm'>A "Learn to Earn" platform designed to provide users with the opportunity to acquire valluable cryptocurrency knowledge directly from professional traders.</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Features
