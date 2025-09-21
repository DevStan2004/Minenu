import React from 'react'
import Image from 'next/image'
import learnMoreBackground from '@/images/learnMoreBackground.jpg'

const LearnMoreBackgroundComponent = () => {
  return (
    <div className='w-full h-[12rem] absolute top-0 left-0'>
      <Image src={learnMoreBackground} width={1000} unoptimized height={1000} className='w-full h-full object-cover object-center' alt='lean more background' />
    </div>
  )
}

export default LearnMoreBackgroundComponent
