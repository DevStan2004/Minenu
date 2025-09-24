'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useRef } from 'react'
import leanMoreLogo from '@/images/minenuLogo.png'
import leanMoreLogoGray from '@/images/leanMoreLogoGray.png'
import leanMoreLogoGreen from '@/images/leanMoreLogoGreen.png'
import leanMoreLogoOrange from '@/images/leanMoreLogoOrange.png'
import leanMoreLogoPurple from '@/images/leanMoreLogoPurple.png'
import cyberJumpBackground from '@/images/cyberJumpBackground.png'
import cyberJump from '@/images/cyberJump.png'
import verifiedicon from '@/images/verifiedicon.png'
import { Globe, Linkedin, Youtube, Instagram, Twitter, ArrowRight, ChevronDown, Trophy } from 'lucide-react'
import { PiTelegramLogoFill } from 'react-icons/pi'

const Wallet = () => {
    const [active, setActive] = useState(false);
    const cyberJumpRef = useRef(null);
    const buttonRef = useRef(null);
  return (
    <div data-prevent-lenis className='p-5 mx-auto md:w-[50rem] py-20'>
      <div className="w-full rounded-2xl bg-[#fbfbfb] shadow border-[0.01px] border-[#e4e4e7] flex flex-col items-start space-y-3 relative z-1 p-3">
        <Image src={leanMoreLogo} className='shadow border-2 border-white w-20 h-20 rounded-xl' width={1000} height={1000} alt='lean more logo' />
        <div className="flex items-center space-x-3">
            <span className='text-2xl font-semibold'>Minenu</span>
            <Image src={verifiedicon} width={1000} height={1000} alt='verified icon' className='w-6 h-6' />
        </div>
        <p className="font-light">Innovating the Future of Web3 for Everyone 🌍 Products: @MinenuAcademy @MinenuBlockchain @MinenuWallet @MinenuPayApp | Help: @Minenu_HelpDesk</p>
        <div className="rounded-md border border-[#e4e4e7] text-[13px] bg-[#f4f4f5]">https://Minenu.com</div>
      </div>
      <div className="flex justify-center items center p-5 w-full">
        <div className="flex items-center md:space-x-5 space-x-1">
            <div className='rounded-full w-14 h-14 hover:w-35 hover:bg-[#78e0d1] group transition-all duration-500 ease-in-out p-2 border flex-shrink-0 flex items-center overflow-hidden relative justify-between cursor-pointer shadow border-[#e4e4e7]'>
                <Globe size='1.5rem' className='flex-shrink-0 me-3 translate-x-[7px] group-hover:translate-x-[0px] transition-translate transition-text  duration-200 group-hover:text-white' strokeWidth={1} />
                <p className="font-semibold group-hover:text-white transition-text transition-translate duration-200 delay-100 ease-in-out -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0">Twitter</p>
            </div>
            <div className='rounded-full w-14 h-14 hover:w-35 hover:bg-[#191919] group transition-all duration-500 ease-in-out p-2 border flex-shrink-0 flex items-center overflow-hidden relative justify-between cursor-pointer shadow border-[#e4e4e7]'>
                <Twitter size='1.5rem' className='flex-shrink-0 me-3 translate-x-[7px] ease-in-out group-hover:translate-x-[0px] transition-translate transition-text  duration-200 group-hover:text-white' strokeWidth={1} />
                <p className="font-semibold group-hover:text-white transition-text transition-translate duration-200 delay-100 ease-in-out -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0">Twitter</p>
            </div>
            <div className='rounded-full w-14 h-14 hover:w-35 hover:bg-blue-600 group transition-all duration-500 ease-in-out p-2 border flex-shrink-0 flex items-center overflow-hidden relative justify-between cursor-pointer shadow border-[#e4e4e7]'>
                <PiTelegramLogoFill size='1.5rem' className='flex-shrink-0 me-3 translate-x-[7px] ease-in-out group-hover:translate-x-[0px] transition-translate transition-text  duration-200 group-hover:text-white' strokeWidth={1} />
                <p className="font-semibold group-hover:text-white transition-text transition-translate duration-200 delay-100 ease-in-out -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0">Telegram</p>
            </div>
            <div className='rounded-full w-14 h-14 hover:w-35 hover:bg-blue-700 group transition-all duration-500 ease-in-out p-2 border flex-shrink-0 flex items-center overflow-hidden relative justify-between cursor-pointer shadow border-[#e4e4e7]'>
                <Linkedin size='1.5rem' className='flex-shrink-0 me-3 translate-x-[7px] ease-in-out group-hover:translate-x-[0px] transition-translate transition-text  duration-200 group-hover:text-white' strokeWidth={1} />
                <p className="font-semibold group-hover:text-white transition-text transition-translate duration-200 delay-100 ease-in-out -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0">Linkedin</p>
            </div>
            <div className='rounded-full w-14 h-14 hover:w-35 hover:bg-red-500 group transition-all duration-500 ease-in-out p-2 border flex-shrink-0 flex items-center overflow-hidden relative justify-between cursor-pointer shadow border-[#e4e4e7]'>
                <Youtube size='1.5rem' className='flex-shrink-0 me-3 translate-x-[7px] ease-in-out group-hover:translate-x-[0px] transition-translate transition-text  duration-200 group-hover:text-white' strokeWidth={1} />
                <p className="font-semibold group-hover:text-white transition-text transition-translate duration-200 delay-100 ease-in-out -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0">Youtube</p>
            </div>
            <div className='rounded-full w-14 h-14 hover:w-35 hover:bg-pink-500 group transition-all duration-500 ease-in-out p-2 border flex-shrink-0 flex items-center overflow-hidden relative justify-between cursor-pointer shadow border-[#e4e4e7]'>
                <Instagram size='1.5rem' className='flex-shrink-0 me-3 translate-x-[7px] ease-in-out group-hover:translate-x-[0px] transition-translate transition-text  duration-200 group-hover:text-white' strokeWidth={1} />
                <p className="font-semibold group-hover:text-white transition-text transition-translate duration-200 delay-100 ease-in-out -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0">Instagram</p>
            </div>
        </div>
      </div>
      <div className="flex flex-col space-y-5 w-full">
        <div className="border border-[#e4e4e7] p-4 rounded-3xl cursor-pointer hover:shadow-md hover:-translate-y-1 transition-translate hover:skew-2 transition-transform transition-shadow duration-200 flex justify-between items-center">
            <Image src={leanMoreLogo} className='shadow border-2 border-white w-10 h-10 rounded-lg' width={1000} height={1000} alt='lean more logo' />
            <p className="md:text-lg">Minenu Group | Innovating the Future of Web3</p>
            <ArrowRight className='text-[#e4e4e4] -rotate-45' />
        </div>
        <div className="border border-[#e4e4e7] p-4 rounded-3xl cursor-pointer hover:shadow-md hover:-translate-y-1 transition-translate hover:skew-2 transition-transform transition-shadow duration-200 flex justify-between items-center">
            <Image src={leanMoreLogoGray} className='shadow border-2 border-white w-10 h-10 rounded-lg' width={1000} height={1000} alt='lean more logo' />
            <p className="md:text-lg">Minenu Support | Here for You, Anytime.</p>
            <ArrowRight className='text-[#e4e4e4] -rotate-45' />
        </div>
        <div className="border border-[#e4e4e7] p-4 rounded-3xl cursor-pointer hover:shadow-md hover:-translate-y-1 transition-translate hover:skew-2 transition-transform transition-shadow duration-200 flex justify-between items-center">
            <Image src={leanMoreLogoGreen} className='shadow border-2 border-white w-10 h-10 rounded-lg' width={1000} height={1000} alt='lean more logo' />
            <p className="md:text-lg">Minenu Beta | Be the first to test upcoming apps</p>
            <ArrowRight className='text-[#e4e4e4] -rotate-45' />
        </div>
        <div className="border border-[#e4e4e7] p-4 rounded-3xl cursor-pointer hover:shadow-md hover:-translate-y-1 transition-translate hover:skew-2 transition-transform transition-shadow duration-200 flex justify-between items-center">
            <Image src={leanMoreLogoOrange} className='shadow border-2 border-white w-10 h-10 rounded-lg' width={1000} height={1000} alt='lean more logo' />
            <p className="md:text-lg">Minenu Web3 Wallet | Own Your Keys, Own Your Crypto</p>
            <ArrowRight className='text-[#e4e4e4] -rotate-45' />
        </div>
        <div className="border border-[#e4e4e7] p-4 rounded-3xl cursor-pointer hover:shadow-md hover:-translate-y-1 transition-translate hover:skew-2 transition-transform transition-shadow duration-200 flex justify-between items-center">
            <Image src={leanMoreLogoPurple} className='shadow border-2 border-white w-10 h-10 rounded-lg' width={1000} height={1000} alt='lean more logo' />
            <p className="md:text-lg">Your gateway to effortless online Crypto payments</p>
            <ArrowRight className='text-[#e4e4e4] -rotate-45' />
        </div>
        <div onClick={() => setActive(!active)} className={`border border-[#e4e4e7] p-4 rounded-3xl cursor-pointer hover:shadow-md hover:-translate-y-1 transition-translate transition-transform transition-shadow duration-200 flex justify-between items-center flex-col overflow-hidden ${active ? 'gap-3' : ''}`}>
            <div className="flex justify-between items-center w-full">
                <Image src={cyberJump} className='shadow border-2 border-white w-10 h-10 rounded-lg' width={1000} height={1000} alt='lean more logo' />
                <p className="text-lg">Cyber Jump</p>
                <ChevronDown className='text-[#e4e4e4]' />
            </div>
            <div ref={cyberJumpRef} className={`flex flex-col gap-2 w-full bg-white overflow-hidden rounded-xl ${active ? 'border border-[#e4e4e7]' : ''}`}
                style={{
                    height: active ? `20rem` : '0px',
                    transitionProperty: 'height',
                    transitionDuration: '0.2s', 
                    transitionTimingFunction: 'linear'
                }}
            >
                <Image src={cyberJumpBackground} alt='cyber jump background image' width={1000} height={1000} unoptimized className='w-full' />
            </div>
            <button ref={buttonRef} className='bg-[#faad14] hover:bg-[#faad14df] cursor-pointer w-full rounded-md font-semibold overflow-hidden' 
                style={{
                    height: active ? `${buttonRef.current?.scrollHeight}px` : '0px',
                    transitionProperty: 'height',
                    transitionDuration: active ? '0.2s' : '0.01s', 
                    transitionDelay: active ? '0.2s' : '0s',
                    transitionTimingFunction: 'linear'
                }}
            > <p className='text-white py-1 text-sm flex items-center justify-center gap-2' ><Trophy strokeWidth={1} /> View Leaderboard</p></button>
        </div>
      </div>
    </div>
  )
}

export default Wallet
