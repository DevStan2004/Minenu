'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

const Navbar = ({activeScrollProp}) => {
  const [activeNav, setActiveNav] = useState(false);
  const navRef = useRef(null)
  const pathname = usePathname();


  return (
    <div className={`${pathname === '/whitepaper' || pathname === '/learn-more' ? 'hidden' : 'flex'} ${activeScrollProp ? 'md:w-[70%] w-[80%] top-5 shadow-md' : 'md:w-full w-[95%] top-0'} fixed -translate-x-1/2 left-1/2 justify-center flex-col rounded-3xl z-40 bg-white`}>
      <div className={`items-center w-full justify-between space-x-5 md:p-5 p-2 transition-w duration-500 linear ${pathname === '/whitepaper' || pathname === '/learn-more' ? 'hidden' : 'flex'} `}>
        <div className={`flex justify-between items-center ${activeScrollProp ? 'w-[80%]' : 'md:w-[50%]'} transition-w duration-200`}>
            <svg className={`${activeScrollProp ? 'hidden' : 'block'} flex-shrink-0`} height="20" viewBox="0 0 716 170" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M196.594 0.523926C212.059 0.523926 224.083 13.98 222.35 29.348L221.462 37.226L217.618 72.7719C217.534 73.4859 216.988 73.9489 216.252 73.9489H177.575C176.377 73.9489 175.243 72.7509 175.348 71.6169L178.836 39.5579C178.962 38.4239 177.827 37.226 176.609 37.226H96.5683C95.8323 37.226 95.2653 37.688 95.2023 38.403L91.3373 73.9489L89.2153 93.5919C89.1523 94.3059 88.6063 94.7679 87.8493 94.7679H46.6313L48.8793 73.9489L52.8493 37.226L54.3273 23.6409C55.7583 10.4879 66.8643 0.523926 80.0943 0.523926H196.594Z" fill="black"></path><path d="M157.348 168.57H53.3964C45.5584 168.57 39.4474 161.781 40.2684 153.986L42.6184 131.679H127.197C127.932 131.679 128.478 131.196 128.562 130.503L132.302 95.923C132.386 95.23 132.932 94.7681 133.668 94.7681H172.47C173.689 94.7681 174.823 95.966 174.697 97.1L168.082 158.925C167.495 164.41 162.865 168.57 157.348 168.57Z" fill="black"></path><path d="M46.6233 94.7627L42.6183 131.673H2.23128C1.02328 131.673 -0.114716 130.478 0.00928438 129.339L3.63528 95.9297C3.71128 95.2297 4.25828 94.7617 5.00028 94.7617L46.6233 94.7627Z" fill="black"></path><path d="M279.2 169.095C266.794 169.095 257.084 166.082 250.335 160.138C243.55 154.169 239.831 145.795 239.279 135.249C239.195 133.586 239.23 131.129 239.384 127.944L247.589 33.794C248.517 23.269 252.398 14.913 259.116 8.95697C265.82 3.01597 275.108 0 286.726 0C318.762 0 343.163 0.76301 359.253 2.26001C360.628 2.39001 361.861 3.04697 362.726 4.11597C363.584 5.17797 363.97 6.51 363.812 7.867L361.474 27.803C361.179 30.341 359.027 32.257 356.468 32.257H295.96C291.745 32.257 288.796 33.044 287.192 34.595C285.564 36.17 284.562 39.274 284.214 43.819L282.302 67.105H343.71C345.099 67.105 346.441 67.689 347.391 68.705C348.34 69.721 348.829 71.096 348.737 72.484L347.229 95.208C347.05 97.848 344.842 99.915 342.198 99.915H279.806L277.067 126.249C276.958 126.998 276.94 128.024 277.011 129.371C277.155 132.106 277.932 134.04 279.321 135.115C280.801 136.261 283.392 136.841 287.023 136.841H346.48C349.215 136.841 351.475 139.066 351.521 141.798L351.862 161.963C351.904 164.596 349.988 166.79 347.397 167.071C339.083 167.967 329.88 168.53 320.043 168.737C308.958 168.972 295.216 169.095 279.2 169.095Z" fill="black"></path><path d="M412.379 169.095C401.566 169.095 392.714 166.247 386.069 160.633C379.369 154.987 375.705 147.011 375.175 136.921C375.01 133.761 375.048 131.331 375.291 129.493L385.753 5.33484C385.971 2.74384 388.179 0.71582 390.773 0.71582H417.993C419.406 0.71582 420.763 1.31379 421.716 2.35779C422.665 3.39879 423.14 4.80079 423.013 6.20679L412.379 125.271C412.263 126.058 412.249 127.085 412.319 128.414C412.456 131.044 413.219 132.889 414.65 134.06C416.123 135.273 418.71 135.885 422.331 135.885H477.26C480.013 135.885 482.224 138.04 482.298 140.793L482.86 161.872C482.93 164.526 480.926 166.787 478.297 167.022C462.952 168.395 440.777 169.095 412.379 169.095Z" fill="black"></path><path d="M507.563 168.381C506.153 168.381 504.796 167.783 503.844 166.743C502.895 165.702 502.42 164.3 502.543 162.897L516.44 5.31384C516.668 2.69484 518.827 0.71582 521.46 0.71582H550.768C552.178 0.71582 553.535 1.31382 554.487 2.35382C555.436 3.39482 555.911 4.79683 555.788 6.19983L541.895 163.783C541.666 166.402 539.508 168.381 536.875 168.381H507.563Z" fill="black"></path><path d="M681.455 168.381C679.015 168.381 676.927 166.637 676.495 164.236L669.496 125.39H614.873L600.653 165.041C599.936 167.038 598.03 168.381 595.907 168.381H565.748C564.082 168.381 562.524 167.558 561.582 166.177C560.643 164.802 560.447 163.055 561.055 161.505L620.213 10.4678C621.25 7.37783 623.046 4.92079 625.535 3.23279C627.996 1.56279 630.921 0.71582 634.225 0.71582H668.613C671.967 0.71582 675.018 1.82982 677.686 4.03082C680.389 6.26282 681.936 9.03281 682.288 12.2708L715.192 162.261C715.522 163.759 715.157 165.305 714.197 166.501C713.234 167.696 711.803 168.382 710.27 168.382H681.455V168.381ZM663.635 93.6148L654.882 45.3968C654.284 42.3558 653.68 37.7298 653.026 31.2758C652.991 30.8858 652.667 30.5828 652.295 30.5828H648.959C648.643 30.5828 648.344 30.8148 648.249 31.1348C646.073 38.3378 644.579 43.1298 643.798 45.3718L626.34 93.6138L663.635 93.6148Z" fill="black"></path></svg>
            <svg className={`${activeScrollProp ? 'block' : 'hidden'} flex-shrink-0`} height="20" viewBox="0 0 716 170" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M196.594 0.523926C212.059 0.523926 224.083 13.98 222.35 29.348L221.462 37.226L217.618 72.7719C217.534 73.4859 216.988 73.9489 216.252 73.9489H177.575C176.377 73.9489 175.243 72.7509 175.348 71.6169L178.836 39.5579C178.962 38.4239 177.827 37.226 176.609 37.226H96.5683C95.8323 37.226 95.2653 37.688 95.2023 38.403L91.3373 73.9489L89.2153 93.5919C89.1523 94.3059 88.6063 94.7679 87.8493 94.7679H46.6313L48.8793 73.9489L52.8493 37.226L54.3273 23.6409C55.7583 10.4879 66.8643 0.523926 80.0943 0.523926H196.594Z" fill="black"></path><path d="M157.348 168.57H53.3964C45.5584 168.57 39.4474 161.781 40.2684 153.986L42.6184 131.679H127.197C127.932 131.679 128.478 131.196 128.562 130.503L132.302 95.923C132.386 95.23 132.932 94.7681 133.668 94.7681H172.47C173.689 94.7681 174.823 95.966 174.697 97.1L168.082 158.925C167.495 164.41 162.865 168.57 157.348 168.57Z" fill="black"></path><path d="M46.6233 94.7627L42.6183 131.673H2.23128C1.02328 131.673 -0.114716 130.478 0.00928438 129.339L3.63528 95.9297C3.71128 95.2297 4.25828 94.7617 5.00028 94.7617L46.6233 94.7627Z" fill="black"></path></svg>
            <ul className="md:flex space-x-5 items-center mx-auto hidden">
              <li><Link href='/' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">Home</Link></li>
              <li><Link href='#features' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">Products</Link></li>
              <li><Link href='/whitepaper' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">WhitePaper</Link></li>
            </ul>
        </div>
        <div className={`flex space-x-5`}>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <p className="text-[#191919] text-sm">us English</p>
              <FaChevronDown className="text-[#191919] text-sm" />
            </div>
            <Link href='/learn-more' className={`border border-[#737373] rounded-lg px-2 text-black text-[13px] justify-center items-center ${activeScrollProp ? 'hidden' : 'md:flex hidden'}`}>Learn More</Link>
            <button className={`rounded-lg py-1 px-2 text-white font-semibold bg-gradient-to-t from-black to-[#737373] text-[15px] ${activeScrollProp ? 'hidden' : 'md:block hidden'}`}>Contact Us</button>
            <Menu onClick={() => setActiveNav(!activeNav)} size={40} className='md:hidden' />
        </div>
      </div>
      <div ref={navRef} className='w-full rounded-2xl bg-white md:hidden transition-height duration-200 relative z-80 overflow-hidden' style={{
          height: activeNav ? `${navRef.current?.scrollHeight}px` : '0px'
        }}>
        <ul className={` p-5 flex flex-col space-y-5`} >
          <li><Link href='/' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">Home</Link></li>
          <li><Link href='#features' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">Products</Link></li>
          <li><Link href='/whitepaper' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">WhitePaper</Link></li>
          <li><Link href='/beta' className="no-underline text-[#191919] text-sm hover:bg-white hover:shadow rounded-xl py-1 px-2">Beta</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
