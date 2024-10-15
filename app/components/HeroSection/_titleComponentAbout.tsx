"use client"; // This directive is used for Next.js, if applicable
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './PageHeroSection'; // Optional for additional styles
import VideoPlayerHeroSection from '../VideoPlayerHero/VideoPlayerHeroSection';

// Define props for the reusable component
interface TitleComponentProps {
  title: string;
  subtitle: string;
  showVideo?: boolean; // Optional prop to conditionally render the video section
  backgroundColor?: string; // Optional prop for background color
}

const TitleComponent: React.FC<TitleComponentProps> = ({
  title,
  subtitle,
  showVideo = true,
  backgroundColor = 'transparent', // Default background color
}) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 }, // Starting position and opacity
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" } // Ending position and opacity
    ).fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 }, // Starting position and opacity for paragraph
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, // Ending position and opacity
      "-=0.5" // Overlap timing (starts 0.5 seconds before the previous animation finishes)
    );
  }, []);

  return (
    <div className="hero-section" style={{ backgroundColor }}>
      <div className="hero-section-content">
        <h1 ref={titleRef} className="hero-section-title pt-10 md:pt-20">
          {/* Reduced padding for small devices */}
          {title.split('<br />').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.split('<br />').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p ref={subtitleRef} className="hero-section-subtitle mt-3 md:mt-5">
          {subtitle}
        </p>
      </div>
      {showVideo && (
        <div className="pt-10 md:pt-20">
          <VideoPlayerHeroSection />
        </div>
      )}
    </div>
  );
};

export default TitleComponent;
