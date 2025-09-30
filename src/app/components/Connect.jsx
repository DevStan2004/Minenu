'use client'
import React from 'react'
import { useGSAP } from '@gsap/react'
import { Facebook, Instagram, Linkedin, Github,  } from 'lucide-react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Link from 'next/link'
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger, SplitText)


const Connect = () => {

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.connect', 
                start: 'top center', 
                end: 'bottom bottom',
                toggleActions: 'play none reverse none'
            }
        }).to('.translatethis', {
            translateY: 0,
            translateX: 0,
            opacity: 1,
            duration: .8,
            stagger: 0.08,
            ease: 'expo.inOut',
        })
    })

  return (
    <div className='flex flex-col md:space-y-20 space-y-5 md:w-[80%] w-full md:p-0 p-2 mx-auto items-center md:my-40 connect'>
        <div className="flex justify-between items-center w-[60%]">
            <div className="flex justify-center items-center translate-x-70 opacity-0 translatethis translate-y-50 p-2 bg-gradient-to-t from-white to-[#f9fafb] rounded-full dark:shadow-[inset_4px_20px_30px_#f1f1f1,0px_5px_16px_#f1f1f1]">
                <Link href={'https://www.facebook.com/share/17Mx2TBJ99/'}>
                <Facebook color='#155dfc' className='md:w-22 md:h-22 h-10 w-10' />
                </Link>
            </div>
            <div className="flex justify-center flex-shrink-0 items-center opacity-0 translatethis translate-y-50 p-2 bg-gradient-to-t from-white to-[#f9fafb] rounded-full dark:shadow-[inset_4px_20px_30px_#f1f1f1,0px_5px_16px_#f1f1f1]">
                <Link href={'https://x.com/nucleus_core'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-x w-10 h-10 md:w-22 md:h-22 p-1 text-black"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                </Link>
            </div>
            <div className="flex justify-center items-center p-2 bg-gradient-to-t translatethis opacity-0 -translate-x-70 translate-y-50 from-white to-[#f9fafb] rounded-full dark:shadow-[inset_4px_20px_30px_#f1f1f1,0px_5px_16px_#f1f1f1]">
                <Link href={'https://www.tiktok.com/@nucleus_core?_t=zs-9069obgnvxq&_r=1'}>
                <Icon icon="simple-icons:tiktok" color='#000' className='md:w-22 md:h-22 h-10 w-10' />
                </Link>
            </div>
        </div>
        <div className="w-full mx-auto flex justify-between items-center">
            <div className="flex justify-center items-center translate-x-125 p-2 opacity-0 translatethis bg-gradient-to-t from-white to-[#f9fafb] rounded-full dark:shadow-[inset_4px_20px_30px_#f1f1f1,0px_5px_16px_#f1f1f1]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-youtube md:w-11 w-20 md:h-10 text-white dark:text-neutral-300"><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path><path d="M10 9l5 3l-5 3z"></path></svg>
            </div>
            <div className="flex flex-col items-center text-center md:space-y-4 relative z-10 space-y-2">
                <h5 className='lg:text-5xl md:text-3xl text-[1.2rem] font-bold'>Connect with the <span className='text-[#ff6f31]'>Nucleus</span></h5>
                <h5 className='lg:text-5xl md:text-3xl text-[1.2rem] font-bold'>Community <span className='text-[#ff6f31]'>Everywhere</span></h5>
                <Link href="https://linktr.ee/nucleus_core" className='bg-gradient-to-t from-black to-[#a8a8a8] rounded-lg text-white font-semibold py-2 px-5'>Connect</Link>
            </div>
            <div className="flex justify-center items-center -translate-x-120 opacity-0 p-2 translatethis bg-gradient-to-t from-white to-[#f9fafb] rounded-full dark:shadow-[inset_4px_20px_30px_#f1f1f1,0px_5px_16px_#f1f1f1]">
                <Link href={'https://play.google.com/store/apps/details?id=com.minenu.nu_app'}>
                <Icon icon="mdi:google-play" style={{ fontSize: "34px", color:"green" }} />
                </Link>
            </div>
        </div>
        <div className="flex justify-between items-center w-[60%]">
            <div className="flex justify-center items-center translate-x-70 -translate-y-50 p-2 translatethis opacity-0 bg-gradient-to-t from-white to-[#f9fafb] rounded-full dark:shadow-[inset_4px_20px_30px_#f1f1f1,0px_5px_16px_#f1f1f1]">
                <Link href={'https://www.minenu.org/'}>
                <svg className="w-10 h-10 md:w-22 md:h-22 p-1" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none"><path d="M29.5988 17.706C31.5423 12.0185 39.4008 11.8463 41.7051 17.1893L41.9001 17.7093L44.5228 25.3792C45.1239 27.1383 46.0952 28.7479 47.3712 30.0996C48.6472 31.4513 50.1983 32.5137 51.9198 33.215L52.6251 33.4782L60.2951 36.0978C65.9826 38.0413 66.1548 45.8997 60.8151 48.204L60.2951 48.399L52.6251 51.0218C50.8655 51.6224 49.2552 52.5935 47.9029 53.8696C46.5506 55.1456 45.4877 56.6969 44.7861 58.4188L44.5228 59.1208L41.9033 66.794C39.9598 72.4815 32.1013 72.6537 29.8003 67.314L29.5988 66.794L26.9793 59.124C26.3787 57.3644 25.4075 55.7541 24.1315 54.4018C22.8554 53.0495 21.3041 51.9867 19.5823 51.285L18.8803 51.0218L11.2103 48.4022C5.51957 46.4587 5.34732 38.6003 10.6903 36.2992L11.2103 36.0978L18.8803 33.4782C20.6393 32.8772 22.249 31.9059 23.6007 30.6299C24.9524 29.3538 26.0148 27.8027 26.7161 26.0812L26.9793 25.3792L29.5988 17.706ZM61.7511 6.5C62.3591 6.5 62.9549 6.67055 63.4708 6.99228C63.9867 7.31401 64.402 7.77401 64.6696 8.32L64.8256 8.70025L65.9631 12.0348L69.3008 13.1723C69.9101 13.3793 70.4443 13.7625 70.8356 14.2734C71.2268 14.7843 71.4576 15.3999 71.4987 16.0421C71.5398 16.6843 71.3893 17.3242 71.0663 17.8808C70.7433 18.4374 70.2623 18.8856 69.6843 19.1685L69.3008 19.3245L65.9663 20.462L64.8288 23.7997C64.6214 24.4089 64.2379 24.9428 63.7268 25.3337C63.2157 25.7247 62.6001 25.9551 61.9579 25.9958C61.3157 26.0366 60.6759 25.8857 60.1195 25.5625C59.5631 25.2392 59.1152 24.7581 58.8326 24.18L58.6766 23.7997L57.5391 20.4653L54.2013 19.3278C53.592 19.1207 53.0579 18.7375 52.6666 18.2266C52.2753 17.7157 52.0445 17.1001 52.0034 16.4579C51.9623 15.8157 52.1129 15.1758 52.4359 14.6192C52.7589 14.0626 53.2398 13.6144 53.8178 13.3315L54.2013 13.1755L57.5358 12.038L58.6733 8.70025C58.8925 8.05813 59.3071 7.5007 59.859 7.10612C60.411 6.71154 61.0726 6.49959 61.7511 6.5Z" fill="white"></path><path d="M29.5988 17.706C31.5423 12.0185 39.4008 11.8463 41.7051 17.1893L41.9001 17.7093L44.5228 25.3792C45.1239 27.1383 46.0952 28.7479 47.3712 30.0996C48.6472 31.4513 50.1983 32.5137 51.9198 33.215L52.6251 33.4782L60.2951 36.0978C65.9826 38.0413 66.1548 45.8997 60.8151 48.204L60.2951 48.399L52.6251 51.0218C50.8655 51.6224 49.2552 52.5935 47.9029 53.8696C46.5506 55.1456 45.4877 56.6969 44.7861 58.4188L44.5228 59.1208L41.9033 66.794C39.9598 72.4815 32.1013 72.6537 29.8003 67.314L29.5988 66.794L26.9793 59.124C26.3787 57.3644 25.4075 55.7541 24.1315 54.4018C22.8554 53.0495 21.3041 51.9867 19.5823 51.285L18.8803 51.0218L11.2103 48.4022C5.51957 46.4587 5.34732 38.6003 10.6903 36.2992L11.2103 36.0978L18.8803 33.4782C20.6393 32.8772 22.249 31.9059 23.6007 30.6299C24.9524 29.3538 26.0148 27.8027 26.7161 26.0812L26.9793 25.3792L29.5988 17.706ZM61.7511 6.5C62.3591 6.5 62.9549 6.67055 63.4708 6.99228C63.9867 7.31401 64.402 7.77401 64.6696 8.32L64.8256 8.70025L65.9631 12.0348L69.3008 13.1723C69.9101 13.3793 70.4443 13.7625 70.8356 14.2734C71.2268 14.7843 71.4576 15.3999 71.4987 16.0421C71.5398 16.6843 71.3893 17.3242 71.0663 17.8808C70.7433 18.4374 70.2623 18.8856 69.6843 19.1685L69.3008 19.3245L65.9663 20.462L64.8288 23.7997C64.6214 24.4089 64.2379 24.9428 63.7268 25.3337C63.2157 25.7247 62.6001 25.9551 61.9579 25.9958C61.3157 26.0366 60.6759 25.8857 60.1195 25.5625C59.5631 25.2392 59.1152 24.7581 58.8326 24.18L58.6766 23.7997L57.5391 20.4653L54.2013 19.3278C53.592 19.1207 53.0579 18.7375 52.6666 18.2266C52.2753 17.7157 52.0445 17.1001 52.0034 16.4579C51.9623 15.8157 52.1129 15.1758 52.4359 14.6192C52.7589 14.0626 53.2398 13.6144 53.8178 13.3315L54.2013 13.1755L57.5358 12.038L58.6733 8.70025C58.8925 8.05813 59.3071 7.5007 59.859 7.10612C60.411 6.71154 61.0726 6.49959 61.7511 6.5Z" fill="url(#paint0_linear_966_2173)"></path><defs><linearGradient id="paint0_linear_966_2173" x1="39.1902" y1="18.0417" x2="38.7257" y2="71.1895" gradientUnits="userSpaceOnUse"><stop stopColor="#5E5E5E"></stop><stop offset="1"></stop></linearGradient></defs></svg>
                </Link>
            </div>
            <div className="flex justify-center items-center p-2 bg-gradient-to-t -translate-y-50 translatethis opacity-0 from-white to-[#f9fafb] rounded-full dark:shadow-[inset_4px_20px_30px_#f1f1f1,0px_5px_16px_#f1f1f1]">
                <Link href={'https://t.me/nucleus_core'}>
                <svg className="w-10 h-10 md:w-22 md:h-22 p-1" xmlns="http://www.w3.org/2000/svg" width="109" height="110" viewBox="0 0 109 110" fill="none"><g clipPath="url(#clip0_966_2179)"><path fillRule="evenodd" clipRule="evenodd" d="M21.6933 57.4218C16.551 51.7817 19.595 42.6846 27.0988 41.2741L69.3117 33.3341C77.3964 31.8108 83.6163 40.3719 79.6693 47.5902L59.0753 85.2861C55.4151 91.9867 45.8252 92.0686 42.0476 85.4371L35.0418 73.1405L56.3865 57.6326C57.0839 57.126 57.5514 56.3631 57.6862 55.5118C57.8211 54.6604 57.6122 53.7904 57.1055 53.093C56.5989 52.3957 55.836 51.9282 54.9847 51.7934C54.1333 51.6585 53.2633 51.8674 52.5659 52.374L31.2239 67.88L21.6933 57.4218Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M21.6933 57.4218C16.551 51.7817 19.595 42.6846 27.0988 41.2741L69.3117 33.3341C77.3964 31.8108 83.6163 40.3719 79.6693 47.5902L59.0753 85.2861C55.4151 91.9867 45.8252 92.0686 42.0476 85.4371L35.0418 73.1405L56.3865 57.6326C57.0839 57.126 57.5514 56.3631 57.6862 55.5118C57.8211 54.6604 57.6122 53.7904 57.1055 53.093C56.5989 52.3957 55.836 51.9282 54.9847 51.7934C54.1333 51.6585 53.2633 51.8674 52.5659 52.374L31.2239 67.88L21.6933 57.4218Z" fill="url(#paint0_linear_966_2179)"></path></g><defs><linearGradient id="paint0_linear_966_2179" x1="44.791" y1="39.6572" x2="71.6679" y2="77.3143" gradientUnits="userSpaceOnUse"><stop stopColor="#5E5E5E"></stop><stop offset="1"></stop></linearGradient><clipPath id="clip0_966_2179"><rect width="78" height="78" fill="white" transform="translate(0 46.375) rotate(-36)"></rect></clipPath></defs></svg>
                </Link>
            </div>
            <div className="flex justify-center items-center p-2 bg-gradient-to-t from-white translatethis -translate-x-70 -translate-y-50 opacity-0 to-[#f9fafb] rounded-full dark:shadow-[inset_4px_20px_30px_#f1f1f1,0px_5px_16px_#f1f1f1]">
                <Link href={'https://t.me/nucleus_core_chat'}>
                    <svg className="w-10 h-10 md:w-22 md:h-22 p-1" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none"><g clipPath="url(#clip0_966_2169)"><path d="M14.8118 22.4516C15.2564 19.717 16.7692 17.271 19.0173 15.6517C21.2654 14.0324 24.0647 13.3725 26.7993 13.8171L72.1568 21.192C74.8915 21.6366 77.3375 23.1494 78.9568 25.3975C80.576 27.6456 81.236 30.4449 80.7913 33.1795L80.7868 33.207L45.0434 44.744L14.8055 22.4901L14.8118 22.4516ZM14.0522 27.1232L9.67048 54.0721C9.22584 56.8068 9.88575 59.6061 11.505 61.8542C13.1243 64.1023 15.5703 65.615 18.305 66.0597L63.6625 73.4345C66.3971 73.8791 69.1964 73.2192 71.4445 71.5999C73.6926 69.9807 75.2054 67.5346 75.65 64.8L80.0331 37.8428L45.3083 49.0516C44.993 49.1534 44.658 49.1787 44.331 49.1256C44.004 49.0724 43.6943 48.9422 43.4276 48.7458L14.0522 27.1232Z" fill="white"></path><path d="M14.8118 22.4516C15.2564 19.717 16.7692 17.271 19.0173 15.6517C21.2654 14.0324 24.0647 13.3725 26.7993 13.8171L72.1568 21.192C74.8915 21.6366 77.3375 23.1494 78.9568 25.3975C80.576 27.6456 81.236 30.4449 80.7913 33.1795L80.7868 33.207L45.0434 44.744L14.8055 22.4901L14.8118 22.4516ZM14.0522 27.1232L9.67048 54.0721C9.22584 56.8068 9.88575 59.6061 11.505 61.8542C13.1243 64.1023 15.5703 65.615 18.305 66.0597L63.6625 73.4345C66.3971 73.8791 69.1964 73.2192 71.4445 71.5999C73.6926 69.9807 75.2054 67.5346 75.65 64.8L80.0331 37.8428L45.3083 49.0516C44.993 49.1534 44.658 49.1787 44.331 49.1256C44.004 49.0724 43.6943 48.9422 43.4276 48.7458L14.0522 27.1232Z" fill="url(#paint0_linear_966_2169)"></path><path d="M14.8118 22.4516C15.2564 19.717 16.7692 17.271 19.0173 15.6517C21.2654 14.0324 24.0647 13.3725 26.7993 13.8171L72.1568 21.192C74.8915 21.6366 77.3375 23.1494 78.9568 25.3975C80.576 27.6456 81.236 30.4449 80.7913 33.1795L80.7868 33.207L45.0434 44.744L14.8055 22.4901L14.8118 22.4516ZM14.0522 27.1232L9.67048 54.0721C9.22584 56.8068 9.88575 59.6061 11.505 61.8542C13.1243 64.1023 15.5703 65.615 18.305 66.0597L63.6625 73.4345C66.3971 73.8791 69.1964 73.2192 71.4445 71.5999C73.6926 69.9807 75.2054 67.5346 75.65 64.8L80.0331 37.8428L45.3083 49.0516C44.993 49.1534 44.658 49.1787 44.331 49.1256C44.004 49.0724 43.6943 48.9422 43.4276 48.7458L14.0522 27.1232Z" fill="url(#paint1_linear_966_2169)"></path></g><defs><linearGradient id="paint0_linear_966_2169" x1="47.9965" y1="26.8305" x2="40.7209" y2="69.7025" gradientUnits="userSpaceOnUse"><stop stopColor="#5E5E5E"></stop><stop offset="1"></stop></linearGradient><linearGradient id="paint1_linear_966_2169" x1="47.9965" y1="26.8305" x2="40.7209" y2="69.7025" gradientUnits="userSpaceOnUse"><stop stopColor="#5E5E5E"></stop><stop offset="1"></stop></linearGradient><clipPath id="clip0_966_2169"><rect width="78" height="78" fill="white" transform="translate(12.7656 0.246094) rotate(9.23513)"></rect></clipPath></defs></svg>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Connect
