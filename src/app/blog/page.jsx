'use client' 
import React from 'react'
import Image from 'next/image'
import next from '@/images/next.png'
import samuela from '@/images/samuela.png'
import Connect from '@/app/components/Connect'

const page = () => {
  return (
    <div className='mt-40 w-full'>
      <div className='grid md:grid-cols-2 grid-cols-1 md:w-[90%] mx-auto shadow-xl group rounded-2xl transition-scale duration-200 linear md:hover:scale-105 hover:scale-102 overflow-hidden'>
        <Image src={next} width={1000} height={1000} alt='next' />
        <div className="flex flex-col justify-between space-y-3 group-hover:bg-[#f9fafb] items-start p-5">
            <div className="flex flex-col space-y-5">
                <div className="flex justify-center items-center p-2 rounded-2xl bg-[#f9fafb] text-sm me-auto">Beta</div>
                <div className="pe-30">
                    <div className="md:text-4xl text-3xl font-bold text-[#191919]">🚀 Celia Beta Program Officially Launches</div>
                </div>
                <p className='text-[#8a8a8a]'>Your exclusive opportunity to get early access to the upcoming Celia App and direct contribute to the development of the Celia ecosystem</p>
            </div>
            <div className="flex items-center space-x-2">
                <Image src={samuela} width={1000} height={1000} alt='samuela' className='rounded-full w-5 h-5' />
                <p className='text-[#8a8a8a]'>Sameula @Celia</p>
                <div className="w-1 h-1 rounded-full bg-[#8a8a8a]"></div>
                <p className='text-[#8a8a8a]'>Mach 24, 2025</p>
            </div>
        </div>
      </div>
      <Connect />
    </div>
  )
}

export default page
