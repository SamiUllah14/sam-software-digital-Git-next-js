"use client";
import React from 'react';
import HeroSectionNavBar from './HeroSectionNavBar'; // Corrected import path
import AboutUs from '../AboutUs/AboutUs'; // Corrected import path
import TitleComponent from './_titleComponentAbout'; // Import the reusable component
import './PageHeroSection.css'; // Optional for additional styles

const PageHeroSection = () => {
  return (
    <div className="hero-section">
      <HeroSectionNavBar /> {/* Navigation */}
      
      <TitleComponent 
        title="Next Level<br />Digital Products"
        subtitle="Hi, we are New York Softwares Team. Your partner for e-commerce, software, and sites!"
        showVideo={true} // Controls whether the video is shown
      />

      {/* Keeping AboutUs as part of this page */}
      <AboutUs />
    </div>
  );
};

export default PageHeroSection;
