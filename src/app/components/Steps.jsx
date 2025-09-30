'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger, SplitText)



const Steps = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        let splitText = new SplitText('.text-split', {type: 'chars, words'});
        gsap.set(splitText.chars, {opacity: 0});
        gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=8000',
                scrub: true,
                pin: true
            }
        }).to(splitText.chars, {
            opacity: 1, 
            duration: 5, 
            stagger: 0.05, 
            ease: 'expo.inOut'
        }).to(splitText.words, {
            opacity: 0,
            duration: 5, 
            stagger: 0.05,
            ease: 'expo.inOut'
        }).to('.marquee-scroll', {
            x: '-500%',
            duration: 100,
            ease: 'linear'
        })

        return () => {
            ScrollTrigger.killAll();
            splitText.revert();
        }
    }, {scope: containerRef})

  return (
    <div ref={containerRef} className='flex flex-col space-y-5 justify-center items-center h-[100vh] container mx-auto overflow-x-hidden md:w-[95%]'>
        <div className="flex flex-col space-y-3">
            <h4 className='md:text-6xl text-2xl font-bold w-full md:max-w-3xl text-center text-split text-white'>How do I get started with Nucleus Core</h4>
            <p className='md:text-xl w-full md:max-w-3xl text-center text-split text-white'>Mining NU Coins is simple and accessible for everyone. Follow these steps to start earning your digital assets every 24 hours.</p>
        </div>
        <div className="flex justify-start w-full marquee-scroll">
            <div className="bg-white w-[30rem] flex-shrink-0 rounded-xl p-3 flex flex-col gap-3 text-black">
                <p className='font-bold'>1. Download the Nucleus Core App</p>
                <div className="flex flex-col gap-2">
                    <p>Visit the Google PlayStore and search for "Nucleus Core"</p>
                    <p>Download and install the official app on your Android device</p>
                </div>
            </div>
            <div className="w-[20rem] flex-shrink-0 h-[1px] bg-white my-auto flex justify-center items-center">
                <div className="w-4 h-4 rounded-full border-[0.05px] border-white flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
            </div>
            <div className="bg-white w-[30rem] flex-shrink-0 rounded-xl p-3 flex flex-col gap-3 text-black">
                <p className='font-bold'>2. Create Your Account</p>
                <div className="flex flex-col gap-2">
                    <p>Open the app and select "Sign Up"</p>
                    <p>Enter your details, including email or phone number, and set a secure password.</p>
                    <p>Verify your account via email or SMS</p>
                </div>
            </div>
            <div className="w-[20rem] flex-shrink-0 h-[1px] bg-white my-auto flex justify-center items-center">
                <div className="w-4 h-4 rounded-full border-[0.05px] border-white flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
            </div>
            <div className="bg-white w-[30rem] flex-shrink-0 rounded-xl p-3 flex flex-col gap-3 text-black">
                <p className='font-bold'>3. Set Up Your Wallet</p>
                <div className="flex flex-col gap-2">
                    <p>Once logged in, the app will automatically create your NU Coin wallet.</p>
                    <p>You can view your balance, transaction history, and mining stats within the wallet.</p>
                </div>
            </div>
            <div className="w-[20rem] flex-shrink-0 h-[1px] bg-white my-auto flex justify-center items-center">
                <div className="w-4 h-4 rounded-full border-[0.05px] border-white flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
            </div>
            <div className="bg-white w-[30rem] flex-shrink-0 rounded-xl p-3 flex flex-col gap-3 text-black">
                <p className='font-bold'>4. Start Mining NU Coins</p>
                <div className="flex flex-col gap-2">
                    <p>Navigate to the Mining section in the app.</p>
                    <p>Click "Start Node" to begin earning NU Coins.</p>
                    <p>Mining rewards are credited to your wallet instantly, allowing you to accumulate coins daily.</p>
                </div>
            </div>
            <div className="w-[20rem] flex-shrink-0 h-[1px] bg-white my-auto flex justify-center items-center">
                <div className="w-4 h-4 rounded-full border-[0.05px] border-white flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
            </div>
            <div className="bg-white w-[30rem] flex-shrink-0 rounded-xl p-3 flex flex-col gap-3 text-black">
                <p className='font-bold'>5. Track Your Rewards and Activity</p>
                <div className="flex flex-col gap-2">
                    <p>Use the dashboard to monitor how many NU Coins you've mined.</p>
                    <p>You can also check global mining stats, referral rewards, and upcoming bonuses.</p>
                </div>
            </div>
            <div className="w-[20rem] flex-shrink-0 h-[1px] bg-white my-auto flex justify-center items-center">
                <div className="w-4 h-4 rounded-full border-[0.05px] border-white flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
            </div>
            <div className="bg-white w-[30rem] flex-shrink-0 rounded-xl p-3 flex flex-col gap-3 text-black">
                <p className='font-bold'>6. Optional: Invite Friends and Earn More</p>
                <div className="flex flex-col gap-2">
                    <p>Share your referral link with friends</p>
                    <p>Earn extra NU Coins as your network mines, creating a passive growth opportunity.</p>
                </div>
            </div>
            <div className="w-[20rem] flex-shrink-0 h-[1px] bg-white my-auto flex justify-center items-center">
                <div className="w-4 h-4 rounded-full border-[0.05px] border-white flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
            </div>
            <div className="bg-white w-[30rem] flex-shrink-0 rounded-xl p-3 flex flex-col gap-3 text-black">
                <p className='font-bold'>6. Use Your NU Coins</p>
                <div className="flex flex-col gap-2">
                    <p>Once mined, NU Coins can be used within the Nucleus Core ecosystem, traded, or stored securely in your wallet.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps
