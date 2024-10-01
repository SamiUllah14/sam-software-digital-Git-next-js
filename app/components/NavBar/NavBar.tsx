"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import SamSblackLogo from '@/app/Images/SamSblack.png'; // Import your PNG image here

const NavBar: React.FC = () => {
  const navOverlayRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>(new Array(5).fill(null));
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    if (navLinksRef.current) {
      navLinksRef.current.forEach(link => {
        if (link) {
          link.style.opacity = '0';
          link.style.transform = 'translateY(20px)';
        }
      });
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
        className={`flex items-center justify-between px-10 bg-black fixed top-0 w-full z-50 transition-transform duration-300 ${
          showNavBar ? 'translate-y-0' : '-translate-y-full'
        }`}
        id="navbar"
      >
        <div className="flex items-center space-x-8">
          <button className="flex items-center text-white font-medium lg:hidden" onClick={toggleNav}>
            <FaBars className="text-white" />
          </button>
          <div className="relative group hidden lg:flex">
            <button className="flex items-center text-white font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }}>
              Services <FaChevronDown className="ml-1 text-white" />
            </button>
          </div>
          <div className="relative group hidden lg:flex">
            <button className="flex items-center text-white font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }}>
              Products <FaChevronDown className="ml-1 text-white" />
            </button>
          </div>
          <div className="relative group hidden lg:flex">
            <button className="flex items-center text-white font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }}>
              About <FaChevronDown className="ml-1 text-white" />
            </button>
          </div>
        </div>
        <div className="flex items-center h-20">
          <div className="flex flex-col items-center">
            <img alt="Bitfactory logo" className="h-10" src={SamSblackLogo.src} width="40" /> {/* Use the imported PNG image */}
          </div>
        </div>
        <div className="flex items-center space-x-8 hidden lg:flex">
          <a className="text-white font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} href="#">Cases</a>
          <a className="text-white font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} href="#">Insights</a>
          <a className="text-white font-medium border border-white rounded-full px-4 py-2" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} href="#">Contact</a>
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

export default NavBar;
