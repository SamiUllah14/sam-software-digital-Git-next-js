"use client";
import React, { useEffect, useRef } from 'react';
import HeroSectionNavBar from './HeroSectionNavBar';
import VideoPlayerHeroSection from '../VideoPlayerHero/VideoPlayerHeroSection';
import { gsap } from 'gsap';
import './PageHeroSection.css'; // Optional for adding additional styles

const PageHeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Reveal the h1 (title) first
    tl.fromTo(
      titleRef.current, 
      { y: 50, opacity: 0 }, // Starting position and opacity
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" } // Ending position and opacity
    )
    .fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 }, // Starting position and opacity for paragraph
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, // Ending position and opacity
      "-=0.5" // Overlap timing (starts 0.5 seconds before the previous animation finishes)
    );
  }, []);

  return (
    <div className='hero-section'>
      <HeroSectionNavBar />
      <div className='hero-section-content'>
        <h1 ref={titleRef} className='hero-section-title pt-10 md:pt-20'>
          {/* Reduced padding for small devices */}
          Next Level<br />Digital Products
        </h1>
        <p ref={subtitleRef} className='hero-section-subtitle mt-3 md:mt-5'>
          {/* Adjusted margin for smaller screens */}
          Hi, we are New York Softwares Team. Your partner for<br />e-commerce, software, and sites!
        </p>
      </div>
      <div className='pt-10 md:pt-20'>
        {/* Reduced padding for small devices */}
        <VideoPlayerHeroSection />
      </div>
  
    </div>
  );
};

export default PageHeroSection;
