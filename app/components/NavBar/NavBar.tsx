"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import SamSblackLogo from '@/app/Images/NewYorkSoftLogoBlack.png'; // Import your PNG image here
import Link from 'next/link'; // Import Link from Next.js

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
            <Link href="/Services">
              <button className="flex items-center text-white font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '1.1em' }}>
                Services <FaChevronDown className="ml-1 text-white" />
              </button>
            </Link>
          </div>
          <div className="relative group hidden lg:flex">
            <Link href="/Products">
              <button className="flex items-center text-white font-medium" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '1.1em' }}>
                Products <FaChevronDown className="ml-1 text-white" />
              </button>
            </Link>
          </div>
      
        </div>
        <div className="flex items-center h-20">
          <div className="flex flex-col items-center">
            <Link href="/">
              <img alt="NewYorkSoftwareslogo" className="h-10" src={SamSblackLogo.src} width="40" /> {/* Use the imported PNG image */}
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-8 hidden lg:flex">
          <Link href="/Cases">
            <span className="text-white font-small" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '1.1em' }}>Cases</span>
          </Link>
          <Link href="/Careers">
            <span className="text-white font-small" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '1.1em' }}>Careers</span>
          </Link>
          <Link href="/Contactus">
            <button className="text-white font-small border border-white rounded-full px-4 py-2" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '1.1em' }}>
              Contact
            </button>
          </Link>
        </div>
      </nav>

      <div className="nav-overlay fixed top-0 left-0 w-full h-full bg-black transition-transform duration-500 ease-in-out transform -translate-y-full z-10" ref={navOverlayRef}>
        <button className="absolute top-5 right-5 text-white text-2xl" onClick={closeNav}>&times;</button>
        <div className="flex flex-col space-y-4 text-white items-center justify-center h-full">
          {['services', 'products',  'cases', 'Carears'].map((item, index) => (
            <Link href={`/${item}`} key={index}>
              <span ref={setNavLinkRef(index)} className="nav-link text-2xl" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '22px' }} onClick={closeNav}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
