import React from 'react'
import WhitePaperHero from '../components/WhitePaperHero'
import LenisProvider from '@/app/components/LenisProvider'

const page = () => {
  return (
    <div data-lenis-prevent className='bg-[#0e0e10] h-screen overflow-y-scroll z-40 relative'>
      <WhitePaperHero />
    </div>
  )
}

export default page
