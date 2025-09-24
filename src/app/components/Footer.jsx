'use client'
import React from 'react'
import Image from 'next/image'
import android from '@/images/android.png'
import ios from '@/images/ios.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import minenuLogo from '@/images/minenuLogo.png'

const Footer = () => {
    const pathname = usePathname();
  return (
    <div className={`flex-col justify-between md:w-[90%] md:rounded-3xl bg-[#000] md:px-10 px-5 md:py-20 mx-auto my-20 ${pathname === '/learn-more' || pathname === '/whitepaper' ? 'hidden' : 'flex'}`}>
        <div className="flex md:flex-row flex-col gap-10 justify-between w-full">
            <div className="flex flex-col space-y-5 md:w-1/3">
                <h6 className='text-2xl font-bold'>Minenu</h6>
                <p className="">First Native Blockchain for the Next Generation of Decentralized Apps. Start mining Nucleus Core cryptocurrency today with lightweight architecture built for mobile hardware.</p>
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
                        <Link href='/privacy'>Privacy Policy</Link>
                        <Link href='/terms'>Terms of Service</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/whitepaper'>WhitePaper</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex space-x-15 justify-center md:mt-20 md:my-0 my-5 items-center ">
            <p className="text-[15px]">minenu</p>
            <div className="flex space-x-5 justify-center">
                <Image src={minenuLogo} width={1000} height={1000} alt='minenu' className='md:w-15 w-10' />
            </div>
        </div>
    </div>
  )
}

export default Footer
