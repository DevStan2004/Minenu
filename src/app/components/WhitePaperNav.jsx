'use client'
import React, {useEffect, useRef, useState} from 'react'
import { ChevronRight, EllipsisVertical, Menu } from 'lucide-react'
import Image from 'next/image'
import whitepaper from '@/images/whitepaper.svg'
import { Search, FileText, X } from 'lucide-react'

const WhitePaperNav = ({indexConnectedData, sideNavProp, setSideNavProp, collectedData, setCollectedData, setCollectIndex, collectIndex}) => {
  const [mobileActive, setMobileActive] = useState(false);
  const [collectInputValue, setCollectInputValue] = useState('');
  const [collectedFilteredData, setCollectedFilteredData] = useState([])
  const [ellipsisActive, setEllipsisActive] = useState(false)
  const mobileActiveRef = useRef(null)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setCollectInputValue(value)
    const filteredData = collectedData.filter(data => data.title && typeof data.title === 'string' && data.title.toLowerCase().includes(value.toLowerCase()));
    setCollectedFilteredData(filteredData)

  }

  const handleGoToIndexPage = (index) => {
    setCollectIndex(index)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Correctly check for the Escape key
      if (e.key === 'Escape') {
        console.log('Escape key pressed, closing modal');
        setMobileActive(false);
        setCollectInputValue(''); // Set state to show visual feedback
      }
    };

    // const handleClick = (e) => {
    //   if(mobileActiveRef.current && !mobileActiveRef.current.contains(e.target)) {
    //     setMobileActive(false)
    //   }
    // }

    window.addEventListener('keydown', handleKeyDown);
    // window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className={`flex flex-col space-x-3 md:px-10 px-2 w-full bg-[#070709a4] border-b border-[#f9fafb16] z-[999] fixed ${mobileActive ? 'backdrop-blur-none' : 'backdrop-blur-sm'}`}>
        <div className="flex justify-between items-center py-4 border-b border-[#f9fafb16] w-full">
            <Image src={whitepaper} width={1000} height={1000} alt='whitepaper' className='w-43' />
            <div className="flex gap-2 items-center md:hidden">
              <Search onClick={() => setMobileActive(true)} className='flex-shrink-0 text-[#8a8a8a]' strokeWidth={1} size='1.2rem' />
              <EllipsisVertical onClick={() => setEllipsisActive(!ellipsisActive)} className='flex-shrink-0 md:hidden block text-[#8a8a8a]' strokeWidth={1} size='1.2rem' />
            </div>
            <div onClick={() => setMobileActive(true)} className={`border py-1.5 px-3 md:flex hidden rounded-2xl cursor-pointer text-[#8a8a8a] border-[#f9fafb16] bg-[#070709a4] items-center gap-2 w-1/3 ${mobileActive ? 'border-white' : 'border-[#8a8a8a]'}`}>
              <Search className='flex-shrink-0' strokeWidth={1} size='1.2rem' />
              <div className='text-[#8a8a8a] placeholder-[#8a8a8a] flex-grow flex-shrink-0 '>

              </div>
              <span className=''>Ctl+k</span>
            </div>
            <div ref={mobileActiveRef} className={`h-auto absolute left-1/2 -translate-1/2 top-20 border border-[#f9fafb16] p-2 rounded-xl md:w-1/2 w-[90%] z-[101] ${mobileActive ? 'block' : 'hidden'}`}>
              <label htmlFor="search" className='border py-1.5 px-3 rounded-2xl text-[#8a8a8a] border-[#f9fafb16] bg-[#070709a4] flex items-center gap-2'>
                <Search className='flex-shrink-0' strokeWidth={1} size='1.2rem' />
                <input onChange={handleInputChange}  value={collectInputValue} type="text" id="search" placeholder='Search...' className='text-[#8a8a8a] placeholder-[#8a8a8a] flex-grow outline-none border-none' />
              </label>
              <div className="flex flex-col space-y-3 my-2">
                <p className='text-[#8a8a8a] text-sm'>Recent Searches</p>
                <div className="flex flex-col space-y-3">
                  {collectInputValue.length > 0 && collectedFilteredData.length > 0 ? (
                    <>
                      {collectedFilteredData.map((data, index) => (
                        <div onClick={() => {handleGoToIndexPage(data.id); setMobileActive(false); setCollectInputValue('')}} key={data.id} className="flex items-center justify-between hover:bg-[#ffffff0d] px-2 py-2 rounded-xl cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <FileText className='text-[#8a8a8a] flex-shrink-0' strokeWidth={1} size={15} />
                            <div className="flex flex-col">
                              <p className="text-[11px] text-[#8a8a8a] flex items-center gap-1">{data.typeIntro} <ChevronRight className='text-[#8a8a8a] md:hidden block' size={18} strokeWidth={1} /> {data.title}</p>
                              <p className="text-white">{data.title}</p>
                              <p className="text-[13px] text-[#8a8a8a]">{data.content && data.content.split(' ').slice(0, 5).join(' ')}</p>
                            </div>
                          </div>
                          <ChevronRight className='text-[#8a8a8a] block flex-shrink-0' size={18} strokeWidth={1} />
                        </div>
                      ))}
                    </>
                  ) : (
                    <p className='text-[#dddddd]'>No data collected yet</p>
                  )}
                </div>
              </div>
            </div>
            <div className={`w-full absolute top-0 left-0 z-[100] justify-start items-center flex-col h-screen md:p-10 p-3 ${mobileActive ? 'backdrop-blur-sm flex' : 'backdrop-blur-none hidden'}`}>
            </div>
            <p className='text-[#8a8a8a] font-semibold md:block hidden'>Support</p>
        </div> 
        <div className={`rounded-md p-5 bg-[#0e0e10] flex justify-between items-center space-x-20 w-auto h-auto absolute top-3 right-2 ${ellipsisActive ? 'flex' : 'hidden'}`}>
          <p className="text-sm text-[#8a8a8a]">Support</p>
          <X onClick={() => setEllipsisActive(false)} className='text-[#8a8a8a] cursor-pointer' strokeWidth={1} />
        </div>  
        <div className="py-4 md:border-b-2 md:border-white me-auto md:block flex items-center space-x-3">
            <p className="text-[#dddddd] text-sm md:block hidden">WhitePaper 3.0</p>
            <Menu onClick={() => setSideNavProp(!sideNavProp)} className='text-[#8a8a8a] md:hidden block' />
            <p className="text-[#8a8a8a] text-sm md:hidden block">{indexConnectedData.typeIntro}</p>
            <ChevronRight className='text-[#8a8a8a] md:hidden block' size={18} strokeWidth={1} />
            <p className="text-[#dddddd] md:hidden block">{indexConnectedData.title}</p>
        </div>      
    </div>
  )
}

export default WhitePaperNav
