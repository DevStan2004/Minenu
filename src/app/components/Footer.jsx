'use client'
import React from 'react'
import Image from 'next/image'
import android from '@/images/android.png'
import ios from '@/images/ios.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname();
  return (
    <div className={`flex-col justify-between md:w-[90%] md:rounded-3xl bg-[#f9fafb] md:px-10 px-5 md:py-20 mx-auto my-20 ${pathname === '/learn-more' || pathname === '/whitepaper' ? 'hidden' : 'flex'}`}>
        <div className="flex md:flex-row flex-col gap-10 justify-between w-full">
            <div className="flex flex-col space-y-5 md:w-1/3">
                <h6 className='text-2xl font-bold'>CELIA</h6>
                <p className="md:text-2xl text-lg">Innovating the Future of Web3 for Everyone</p>
                <div className="flex space-x-5 items-center">
                    <Link href='' className="w-[40%]">
                    <Image src={android} width={1000} height={1000} alt='andoid' className="w-full" />
                    </Link>
                    <Link href='' className="w-[40%]">
                    <Image src={ios} width={1000} height={1000} alt='ios' className="w-full" />
                    </Link>
                </div>
            </div>
            <div className="flex space-x-20">
                <div className="flex flex-col space-y-5">
                    <p className="font-semibold">Socials</p>
                    <div className="flex flex-col space-y-3">
                        <Link href=''>Facebook</Link>
                        <Link href=''>Instagram</Link>
                        <Link href=''>Youtube</Link>
                        <Link href=''>X</Link>
                        <Link href=''>Linkedin</Link>
                        <Link href=''>GitHub</Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-5">
                    <p className="font-semibold">Legal</p>
                    <div className="flex flex-col space-y-3">
                        <Link href=''>Privacy Policy</Link>
                        <Link href=''>Terms of Service</Link>
                        <Link href=''>Blog</Link>
                        <Link href=''>WhitePaper</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex space-x-15 justify-center md:mt-20 md:my-0 my-5">
            <p className="text-[15px]">celia.ltd</p>
            <div className="flex space-x-5 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-x h-full w-full text-black"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin h-full w-full text-black"><path d="M8 11v5"></path><path d="M8 8v.01"></path><path d="M12 16v-5"></path><path d="M16 16v-3a2 2 0 1 0 -4 0"></path><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github h-full w-full text-black"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-link h-full w-full text-black"><path d="M9 15l6 -6"></path><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-facebook h-full w-full text-black"><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-instagram h-full w-full text-black"><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M16.5 7.5v.01"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-instagram h-full w-full text-black"><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M16.5 7.5v.01"></path></svg>
            </div>
        </div>
    </div>
  )
}

export default Footer
