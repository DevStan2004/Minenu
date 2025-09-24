'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import leanMoreLogo from '@/images/minenuLogo.png'

const LearnMoreNav = ({active}) => {
  return (
    <div className={`w-full py-3 flex justify-center items-center transition-bg duration-200 linear fixed z-20 ${active ? 'bg-white' : ''}`} >
      <div className="w-[50rem] flex justify-between px-5">
        <Image src={leanMoreLogo} className={`shadow border-2 border-white transition-opacity duration-200 linear w-10 h-10 rounded-xl ${active ? 'opacity-100' : 'opacity-0'}`} width={1000} height={1000} alt='lean more logo' />
        <button className="rounded-lg text-[#e4e4e7] text-sm bg-[#27272a] border-t border-[#e4e4e74e] transition-bg duration-200 hover:bg-[#3d3d41] px-3 cursor-pointer">Connect Wallet</button>
      </div>
    </div>
  )
}

export default LearnMoreNav
