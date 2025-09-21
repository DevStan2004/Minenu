'use client'
import React, { useRef } from 'react'
import { Plus } from 'lucide-react'

const FAQContents = ({item, accordionProp, setAccordionProp}) => {
    const activeAccordion = accordionProp === item.id;
    const contentRef = useRef(null)
    const handleClick = () => {
        setAccordionProp(activeAccordion ? null : item.id)
    }

    const dynamicHeight = activeAccordion ? `${contentRef.current?.scrollHeight}px` : '65px'
  return (
    <div key={item.id} ref={contentRef} onClick={() => handleClick(item.id)} className="rounded-xl p-5 overflow-hidden transition-height duration-200 shadow-xl shadow-gray-600 bg-gradient-to-t cursor-pointer from-[#f9fafb] via-white to-[#f9fafb] flex flex-col space-y-3" style={{
        height: dynamicHeight
    }}>
    <div className="flex space-x-3 items-center">
        <Plus className={`${activeAccordion ? 'rotate-45' : ''} transition-transform duration200`} color='#ff6f31' size='1.5rem' strokeWidth={1} />
        <p className='md:text-xl text-sm'>{item.question}</p>
    </div>
     <p className={`text-[#575f6d] transition-translate duration-200 text-sm linear ${activeAccordion ? 'translate-y-0' : 'translate-y-10'}`}>{item.answer}</p>
    </div>
  )
}

export default FAQContents
