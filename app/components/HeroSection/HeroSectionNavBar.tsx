"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import Samlogo from '@/app/Images/SamS.png'; // Import your PNG image here

const HeroSectionNavBar: React.FC = () => {
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
        gsap.fromTo(navOverlayRef.current, { y: '-100%' }, { y: '0%', duration: 0.1 });
        gsap.to(navLinksRef.current, { opacity: 1, y: 0, duration: 0.1, stagger: 0.3 });
      } else {
        closeNav();
      }
    }
  };

  const closeNav = () => {
    if (navOverlayRef.current) {
      gsap.to(navLinksRef.current, { opacity: 0, y: 20, duration: 0.1 });
      navOverlayRef.current.classList.remove('active');
      gsap.fromTo(navOverlayRef.current, { y: '0%' }, { y: '-100%', duration: 0.1 });
    }
  };

  const setNavLinkRef = (index: number) => (el: HTMLAnchorElement | null) => {
    navLinksRef.current[index] = el;
  };

  return (
    <>
      <nav
        className="flex items-center justify-between p-4"
        id="navbar"
        style={{
          backgroundColor: '#F0EC74',
          paddingTop: '30px',  // Increased padding from the top
          paddingLeft: '40px',  // Increased padding from the left
          paddingRight: '40px'   // Increased padding from the right
        }}
      >
        <div className="flex items-center space-x-8">
          {/* Display hamburger menu on large screens */}
          <button className="flex items-center text-black font-medium lg:hidden" onClick={toggleNav}>
            <FaBars />
          </button>
          <div className="relative group hidden lg:flex">
            <button className="flex items-center text-black font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }}>
              Services <FaChevronDown className="ml-1" />
            </button>
          </div>
          <div className="relative group hidden lg:flex">
            <button className="flex items-center text-black font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }}>
              Products <FaChevronDown className="ml-1" />
            </button>
          </div>
          <div className="relative group hidden lg:flex">
            <button className="flex items-center text-black font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }}>
              About <FaChevronDown className="ml-1" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
  <img
    alt="Sam logo"
    className="h-10 md:h-20 w-16 md:w-24" // Responsive height and width
    src={Samlogo.src}
    // Use maxWidth to ensure it doesn't exceed its parent container
    style={{ maxWidth: '100%' }} 
  />
  <span
    className="text-black font-bold"
    style={{ fontFamily: 'var(--font-silkscreen)', fontSize: '0.875rem md:text-base' }}
  >
    NewYorkSoftwares
  </span>
</div>


        <div className="flex items-center space-x-8 hidden lg:flex">
          <a className="text-black font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} href="#">Cases</a>
          <a className="text-black font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} href="#">Insights</a>
          <a className="text-black font-medium border border-black rounded-full px-4 py-2" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} href="#">Contact</a>
        </div>
      </nav>

      <div className="nav-overlay fixed top-0 left-0 w-full h-full bg-black transition-transform duration-500 ease-in-out transform -translate-y-full z-10" ref={navOverlayRef}>
        <button className="absolute top-5 right-5 text-white text-2xl" onClick={closeNav}>&times;</button>
        <div className="flex flex-col space-y-4 text-white items-center justify-center h-full">
          <a ref={setNavLinkRef(0)} className="nav-link text-2xl" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} href="#" onClick={closeNav}>Services</a>
          <a ref={setNavLinkRef(1)} className="nav-link text-2xl" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} href="#" onClick={closeNav}>Products</a>
          <a ref={setNavLinkRef(2)} className="nav-link text-2xl" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} href="#" onClick={closeNav}>About</a>
          <a ref={setNavLinkRef(3)} className="nav-link text-2xl" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} href="#" onClick={closeNav}>Cases</a>
          <a ref={setNavLinkRef(4)} className="nav-link text-2xl" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} href="#" onClick={closeNav}>Insights</a>
        </div>
      </div>
    </>
  );
};

export default HeroSectionNavBar;
