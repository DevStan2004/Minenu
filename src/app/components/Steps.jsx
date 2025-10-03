'use client'
import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger, SplitText)
import stepsJpg from '@/images/steps.jpg'
import stepsPng from '@/images/steps.png'
import referral from '@/images/referral.jpeg'
import mining from '@/images/mining.jpg'
import signup from '@/images/signup.jpg'
import start from '@/images/start.jpg'
import dashboard from '@/images/dashboard.jpg'
import coinwallet from '@/images/coinwallet.jpeg'



const Steps = () => {
    const containerRef = useRef(null)
    const [mobile, setMobile] = useState(false)
    const maskRef = useRef(null)

    const stepsData = [
        {
            title: "1. Download the Nucleus Core App",
            description: [
                'Visit the Google PlayStore and search for "Nucleus Core"',
                'Download and install the official app on your Android device'
            ],
            image: stepsJpg
        }, {
            title: "2. Create Your Account",
            description: [
                'Open the app and select "Sign Up"',
                'Enter your details, including email or phone number, and set a secure password.',
                'Verify your account via email or SMS'
            ],
            image: signup
        }, {
            title: "3. Set Up Your Wallet",
            description: [
                'Once logged in, the app will automatically create your NU Coin wallet.',
                'You can view your balance, transaction history, and mining stats within the wallet.'
            ],
            image: coinwallet
        }, {
            title: "4. Start Mining NU Coins",
            description: [
                'Navigate to the Mining section in the app.',
                'Click "Start Node" to begin earning NU Coins.',
                'Mining rewards are credited to your wallet instantly, allowing you to accumulate coins daily.'
            ],
            image: start
        }, {
            title: "5. Track Your Rewards and Activity",
            description: [
                "Use the dashboard to monitor how many NU Coins you've mined.",
                'You can also check global mining stats, referral rewards, and upcoming bonuses.'
            ],
            image: dashboard
        }, {
            title: "6. Optional: Invite Friends and Earn More",
            description: [
                'Share your referral link with friends',
                'Earn extra NU Coins as your network mines, creating a passive growth opportunity.'
            ],
            image: referral
        }, {
            title: "7. Use Your NU Coins",
            description: [
                'Once mined, NU Coins can be used within the Nucleus Core ecosystem, traded, or stored securely in your wallet.'
            ],
            image: mining
        }
    ]

    useGSAP(() => {
        let splitText = new SplitText('.text-split', {type: 'chars, words'});
        let finalTextSplit = new SplitText('.final-textSplit', {type: 'chars'})
        let stackCards = gsap.utils.toArray('.stack-card')
        let images = gsap.utils.toArray('.image')
        gsap.set('.steps', {opacity: 0})
        gsap.set(splitText.chars, {opacity: 0});
        gsap.set(images.slice(1), { opacity: 0});
        gsap.set(finalTextSplit.chars, {opacity: 0});
        const containerScroll = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=10000',
                scrub: true,
                pin: true
            }
        })

        containerScroll.to(splitText.chars, {
            opacity: 1, 
            duration: 30, 
            stagger: 0.08, 
            ease: 'linear'
        })
        containerScroll.to(splitText.words, {
            opacity: 0,
            duration: 30, 
            stagger: 0.05,
            ease: 'linear'
        })
        containerScroll.to(maskRef.current, {
            opacity: 1,
            duration: 100,
            ease: 'power1.inOut'
        }).to(maskRef.current, {
            maskSize: 30000,
            duration: 800,
            ease: 'linear'
        })        
        containerScroll.to(containerRef.current, {
            backgroundColor: '#fff',
            duration: 400,
            ease: 'linear'
        }, '<')
        
        stackCards.forEach((card, index) => {
            const image = images[index];
            gsap.set(image, { scale: 3});
            gsap.set(card, {y: 500 * index});
            containerScroll.to(card, {
                y: 0,
                opacity: 1,
                duration: 200,
                stagger: 0.01,
                ease: 'linear'
            }).to(card, {
                y: -100,
                duration: 200,
                stagger: 0.01,
                ease: 'linear'
            })
            containerScroll.to(image, {
                opacity: 1,
                scale: 1,
                duration: 200,
                stagger: 0.01,
                ease: 'linear'
            }, '+=0').to(image, {
                y: 200, 
                duration: 200, 
                stagger: 0.01,
                ease: 'linear'
            }).to(image, {
                scale: 2,
                duration: 200,
                stagger: 0.01,
                ease: 'linear'
            })
        })
        containerScroll.to(maskRef.current, {
            maskSize: '100%',
            duration: 400
        })
        
        containerScroll.to(maskRef.current, {
            opacity: 0,
            duration: 400,
            ease: 'linear'
        })
        
        containerScroll.to(containerRef.current, {
            backgroundColor: 'transparent',
            duration: 200,
            ease: 'linear'
        }).to(finalTextSplit.chars, {
            opacity: 1,
            duration: 30,
            stagger: 0.5,
            ease: 'linear'
        }).to(finalTextSplit.chars, {
            opacity: 0,
            duration: 30,
            stagger: 0.5,
            ease: 'linear'
        })
        
        return () => {
            ScrollTrigger.killAll();
            splitText.revert();
        }
    }, {scope: containerRef})

  return (
    <div ref={containerRef} className='h-[100vh] w-full relative'>
        <div className="w-full flex space-y-5 justify-center items-center h-full">
            <div className="flex flex-col items-center space-y-3 absolute top-1/2 left-1/2 w-full -translate-y-1/2 -translate-x-1/2">
                <h2 className='text-4xl md:text-6xl font-bold text-white text-center w-full md:max-w-3xl text-split'>How do I get started with Nucleus Core?</h2>
                <p className='md:text-xl w-full md:max-w-3xl text-center text-split text-white'>Mining NU Coins is simple and accessible for everyone. Follow these steps to start earning your digital assets every 24 hours.</p>
            </div>
            <Image src={stepsPng} width={1000} height={1000} alt='steps' className='w-1/2 rounded-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 steps' />
            <div ref={maskRef} className='opacity-0 flex justify-center h-full w-full absolute' style={{
                    maskImage: `url(${stepsPng.src})`,
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    maskSize: '100%'
                }}>
                {stepsData.map((step, index) => (
                    <React.Fragment key={index}>
                        <Image src={step.image} width={1000} height={1000} alt={step.title} className='md:w-[30rem] md:h-[30rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover absolute rounded-3xl image' />
                        <div className="bg-white md:w-[30rem] w-[90%] z-10 flex-shrink-0 rounded-xl p-3 flex flex-col gap-3 text-black shadow absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 stack-card">
                            <p className='font-bold'>{step.title}</p>
                            <div className="flex flex-col gap-2">
                                {step.description.map((desc, i) => (
                                    <p key={i}>{desc}</p>
                                ))}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <h6 className="md:text-5xl font-bold final-textSplit absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:max-w-5xl w-full text-center px-5">WITH THIS PROCESS, ANYONE CAN START MINING NU COINS EASILY, EVEN WITHOUT TECHNICAL EXPERTISE, AND EARN REWARDS CONSISTENTLY EVERY 24 HOURS</h6>
        </div>
    </div>
  )
}

export default Steps
