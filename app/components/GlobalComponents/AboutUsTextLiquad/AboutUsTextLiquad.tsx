"use client";
import React from 'react';
import './AboutUsTextLiquad.css'; // External CSS file for styles

interface AboutUsTextLiquadProps {
  text: string;  // Text to be animated
}

const AboutUsTextLiquad: React.FC<AboutUsTextLiquadProps> = ({ text }) => {
  return (
    <section className="about-us-section">
      <div className="content">
        <h2>{text}</h2>
        <h2>{text}</h2>
      </div>
    </section>
  );
};

export default AboutUsTextLiquad;
