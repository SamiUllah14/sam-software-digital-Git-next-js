"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import Samlogo from '@/app/Images/NewYorkSoftwareslogo.png'; // Import your PNG image here
import ButtonOutliner from '../GlobalComponents/ButtonOutliner/ButtonOutliner';
import Link from 'next/link';

// Define the interface for props
interface HeroSectionNavBarProps {
  backgroundColor?: string; // Optional prop for background color
}

const HeroSectionNavBar: React.FC<HeroSectionNavBarProps> = ({ backgroundColor = '#F0EC74' }) => {
  const navOverlayRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>(new Array(5).fill(null));

  useEffect(() => {
    if (navLinksRef.current) {
      navLinksRef.current.forEach(link => {
        if (link) {
          link.style.opacity = '0';
          link.style.transform = 'translateY(20px)';
        }
      });
    }
  }, []);

  const toggleNav = () => {
    if (navOverlayRef.current) {
      const active = navOverlayRef.current.classList.toggle('active');
      if (active) {
        gsap.fromTo(navOverlayRef.current, { y: '-100%' }, { y: '0%', duration: 0.3 });
        gsap.to(navLinksRef.current, { opacity: 1, y: 0, duration: 0.3, stagger: 0.1 });
      } else {
        closeNav();
      }
    }
  };

  const closeNav = () => {
    if (navOverlayRef.current) {
      gsap.to(navLinksRef.current, { opacity: 0, y: 20, duration: 0.3 });
      navOverlayRef.current.classList.remove('active');
      gsap.fromTo(navOverlayRef.current, { y: '0%' }, { y: '-100%', duration: 0.3 });
    }
  };

  const setNavLinkRef = (index: number) => (el: HTMLAnchorElement | null) => {
    navLinksRef.current[index] = el;
  };

  return (
    <>
      <nav
        className="flex items-center justify-between p-4 mr-10"
        id="navbar"
        style={{
          backgroundColor: backgroundColor,
          paddingTop: '30px',
          paddingLeft: '40px',
          paddingRight: '40px'
        }}
      >
        <div className="flex items-center space-x-8">
          <button className="flex items-center text-black font-medium lg:hidden" onClick={toggleNav}>
            <FaBars />
          </button>
          {['Services', 'Products', 'About'].map((item, index) => (
            <div className="relative group hidden lg:flex" key={index}>
              <button className="flex items-center text-black font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '1.1em' }}>
                {item} <FaChevronDown className="ml-1" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
        <Link href="/">

          <img
            alt="Sam logo"
            className="samlogo h-10 md:h-20 w-10 md:w-24"
            src={Samlogo.src}
            style={{ maxWidth: '100%' }} 
          />
          </Link>
          <span
            className="text-black font-bold"
            style={{ fontFamily: 'var(--font-silkscreen)', fontSize: '0.875rem md:text-base' }}
          >
            NewYorkSoftwares
          </span>
        </div>
        <div className="flex items-center space-x-8 hidden lg:flex">
          {['Cases', 'Insights'].map((item, index) => (
            <a key={index} className="text-black font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '1.1em' }} href="#">{item}</a>
          ))}
          <ButtonOutliner text="Contact" href="Contactus" />
        </div>
      </nav>

      <div className="nav-overlay fixed top-0 left-0 w-full h-full bg-black transition-transform duration-500 ease-in-out transform -translate-y-full z-10" ref={navOverlayRef}>
        <button className="absolute top-5 right-5 text-white text-2xl" onClick={closeNav}>&times;</button>
        <div className="flex flex-col space-y-4 text-white items-center justify-center h-full">
          {['Services', 'Products', 'About', 'Cases', 'Insights'].map((item, index) => (
            <a 
              key={index}
              ref={setNavLinkRef(index)} 
              className="nav-link text-2xl" 
              style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} 
              href="#" 
              onClick={closeNav}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSectionNavBar;
