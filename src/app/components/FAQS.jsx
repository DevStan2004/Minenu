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
      question: 'User-Friendly Ecosystem',
      answer: 'Nucleus Core makes blockchain accessible to everyone, from developers to entrepreneurs, with intuitive tools for creating tokens, deploying smart contracts, and launching decentralized applications (dApps) without complex coding.'
    },
    {
      id: '2',
      question: 'Fast and Scalable Transactions',
      answer: 'Its blockchain infrastructure ensures high-speed transactions with minimal delays, supporting large-scale applications and growing ecosystems efficiently.'
    },
    {
      id: '3',
      question: 'Low Fees',
      answer: 'Transactions on Nucleus Core are cost-effective, allowing users to transfer assets, swap tokens, or interact with dApps without excessive fees—a crucial factor for businesses and individuals.'
    },
    {
      id: '4',
      question: 'Secure and Transparent',
      answer: 'Built with cutting-edge security protocols, Nucleus Core provides transparency and immutability, giving users confidence that their assets and data are safe.'
    },
    {
      id: '5',
      question: 'Decentralized Finance (DeFi) Ready',
      answer: 'The platform supports DeFi applications, enabling users to provide liquidity, stake, earn yields, and participate in decentralized financial systems seamlessly.'
    },
     {
      id: '6',
      question: 'Token Creation Made Simple',
      answer: 'With tools that allow anyone to create their own cryptocurrency in just a few clicks, Nucleus Core empowers entrepreneurs, communities, and creators to launch digital assets quickly and easily.'
    },
     {
      id: '7',
      question: 'Global Reach',
      answer: 'By enabling borderless transactions, Nucleus Core allows businesses and individuals to access global markets without intermediaries, expanding trade, remittances, and commerce opportunities.'
    },
     {
      id: '8',
      question: 'Innovation-Driven',
      answer: 'continuously develops next-gen solutions—like cross-chain bridges, NFT support, and advanced dApp integrations—positioning users at the forefront of Web3 innovation.'
    },
     {
      id: '9',
      question: 'Community and Developer Support',
      answer: 'A strong, growing community of developers and users provides collaboration, resources, and mentorship, ensuring that anyone entering Web3 can find guidance and support.'
    },
     {
      id: '10',
      question: 'Sustainable Growth',
      answer: 'The platform emphasizes long-term sustainability and scalability, making it ideal for projects aiming to grow steadily without being hindered by technical limitations or network congestion.'
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
      <h5 className='text-4xl text-[#fff] font-semibold'><span className='text-[#ea922c]'>Asked </span> Questions</h5>
      <div className="flex flex-col space-y-5 bg-[#000] rounded-xl md:p-5 shadow-lg w-full">
        {itemData.map((item) => (
          <FAQContents key={item.id} accordionProp={accordion} setAccordionProp={setAccordion} item={item} />
        ))}
      </div>
    </div>
  )
}

export default FAQS
