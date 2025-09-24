'use client'

import React, { useRef, useState, useEffect } from 'react'
import FAQContents from '@/app/components/FAQContents'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const FAQS = () => {
  const itemData = [
    {
      id: '1',
      question: 'Why should I choose the Minenu platform for my Web3 needs?',
      answer: 'Minenu offers cutting-edge Web3 technology, ensuring seamless operation and secure financial transactions tailored to your need.'
    },
    {
      id: '2',
      question: 'How do I get started with Minenu?',
      answer: 'Visit the Minenu website or download the Minenu App from your App store and sign up to get started.'
    },
    {
      id: '3',
      question: 'What cryptocurrencies does Minenu support?',
      answer: 'Minenu supports the Minenu token as well as BNB and other BNB enabled cryptocurrencies.'
    },
    {
      id: '4',
      question: 'What is Minenu?',
      answer: 'Minenu is a next-generation Web3 ecosystem desined to make digital assets easy to use, send, earn, and build with. Powered by Minenu Token (Minenu), the platform is more than just a cryptocurrency—it\'s an open network for users, gamers, and developers to interact with block chain in a seamless way.'
    },
  ];

  const [accordion, setAccordion] = useState(null)

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.scrubcontainer', 
        start: 'top bottom', 
        end: 'bottom bottom', 
        scrub: true,
      }
    }).to('.scrubcontainer', {
      y: 0, 
      opacity: 1,
      ease: 'expo.inOut'
    })
  })

  return (
    <div className='flex flex-col space-y-10 md:mt-40 mt-10 mb-20 items-center md:w-[70%] p-2 mx-auto scrubcontainer opacity-0 translate-y-40'>
      <h5 className='text-4xl text-[#fff] font-semibold'><span className='text-[#ea922c]'>Asked</span> Questions</h5>
      <div className="flex flex-col space-y-5 bg-[#000] rounded-xl md:p-5 shadow-lg w-full">
        {itemData.map((item) => (
          <FAQContents key={item.id} accordionProp={accordion} setAccordionProp={setAccordion} item={item} />
        ))}
      </div>
    </div>
  )
}

export default FAQS
