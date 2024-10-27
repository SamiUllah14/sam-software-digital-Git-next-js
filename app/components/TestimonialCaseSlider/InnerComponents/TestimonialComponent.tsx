"use client";
import React from 'react';
import './TestimonialComponent.css'; // for additional styles
import { Divider } from '@material-ui/core';

interface TestimonialComponentProps {
  title: string;
  brandName: string;
  description: string;
  imageSrc: string; // New prop for the image source
  casesText?: string; // Optional prop for the cases text
  allCasesText?: string; // Optional prop for the "All Cases" text
  allCasesLink?: string; // Optional prop for the "All Cases" link
}

const TestimonialComponent: React.FC<TestimonialComponentProps> = ({
  title,
  brandName,
  description,
  imageSrc, // Destructure the new image source prop
  casesText = "Cases",
  allCasesText = "All Cases", // Default text for "All Cases"
  allCasesLink = "#"
}) => {
  return (
    <div className='parent-container'>
      <div className='container'>
        <div className='case-container'>
          <div className='case-items'>
            <div className='case-items-text'>
              <p className='case-items-text-para'>{casesText}</p>
              <Divider className='divider' />
            </div>
          </div>
          <div className='case-items'>
            <div className='case-items-text'>
              <p className='case-items-text-para hide-on-mobile'>
                <a href={allCasesLink} className='clickable-link'>{allCasesText}</a>
              </p> {/* Hidden on mobile */}
            </div>
          </div>
        </div>

        <div className='content-container'>
          <div className='content-item-1'>
            <img src={imageSrc} alt={brandName} className='testimonial-image' /> {/* Displaying the image */}
          </div>
          <div className='content-item-2'>
            <div className='content-item-2-child'>
              <p className='content-item-2-child-title'>{title}</p>
              <h1 className='content-item-2-child-brand-name'>{brandName}</h1>
              <p className='content-item-2-child-Description-small'>
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className='show-on-mobile'>
          <a href={allCasesLink} className='clickable-link'>{allCasesText}</a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
