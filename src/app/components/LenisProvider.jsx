'use client';

import { useEffect } from 'react';
import Lenis from 'lenis'
;
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {
  useEffect(() => {
    // 1. Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // 2. Sync Lenis and GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 3. Optional: Add an event listener for smooth scrolling on link clicks
    // Clean up the instances when the component unmounts
    return () => {
      lenis.destroy();
      ScrollTrigger.killAll(); // Important for cleaning up GSAP animations
    };
  }, []);

  return children;
}