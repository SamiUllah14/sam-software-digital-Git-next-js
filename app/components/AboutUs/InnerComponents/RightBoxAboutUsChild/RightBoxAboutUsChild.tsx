"use client";
import React, { useState, useEffect, useRef } from 'react';
import './RightBoxAboutUsChild.css'; // for additional styles
import { Divider, IconButton } from '@material-ui/core';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'; // Importing the icons
import gsap from 'gsap'; // Importing GSAP for animations
import ButtonOutliner from '@/app/components/GlobalComponents/ButtonOutliner/ButtonOutliner';

// Define the props type
interface RightBoxAboutUsChildProps {
  title?: string; // Optional props
  boxDescription?: string;
  description?: string;
  childItems?: string[][];
  buttonText?: string;
  buttonLink?: string;
}

const RightBoxAboutUsChild: React.FC<RightBoxAboutUsChildProps> = ({
  title = 'Default Title', // Default value
  boxDescription = 'Default box description', // Default value
  description = 'Default detailed description', // Default value
  childItems = [ // Default value
    ['Default Child B1', 'Default Child B2'],
    ['Default Child B3', 'Default Child B4']
  ],
  buttonText = 'More Info', // Default value
  buttonLink = '#', // Default value
}) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null); // Reference for description

  // Toggle the description and icons
  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  // GSAP animation for description visibility
  useEffect(() => {
    if (isDescriptionVisible) {
      gsap.to(descriptionRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(descriptionRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [isDescriptionVisible]);

  return (
    <div className='RightBoxAboutUs'>
      <Divider className='Divider' />

      <div className='RightBoxAboutUs-container'>
        <div className='RightBoxAboutUs-Box-1-Title-And-Icon'>
          <h2 className='Title'>{title}</h2>
          <IconButton className='IconButton' onClick={toggleDescription}>
            {isDescriptionVisible ? <AiOutlineMinus size={30} /> : <AiOutlinePlus size={30} />}
          </IconButton>
        </div>

        <div className='RightBoxAboutUs-Box-1-Description mb-10'>
          {boxDescription}
        </div>
      </div>

      {/* Corrected div tag for description */}
      <div className='Description' ref={descriptionRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <p className='paragraph'>
          {description}
        </p>

        <div className='Built-Child-Description'>
          {childItems && childItems.map((child, index) => (
            <div className='child' key={index}>
              <ul>
                {child.map((item, idx) => (
                  <li className='child-B' key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='ButtonOutliner mt-5 mb-10'>
          <ButtonOutliner text={buttonText} href={buttonLink} />
        </div>
      </div>

      <Divider className='Divider' />
    </div>
  );
};

export default RightBoxAboutUsChild;
