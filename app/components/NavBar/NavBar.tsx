"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import SamSblackLogo from '@/app/Images/NewYorkSoftLogoBlack.png';
import Link from 'next/link';

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
      setShowNavBar(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    if (navOverlayRef.current) {
      const isActive = navOverlayRef.current.classList.toggle('active');
      if (isActive) {
        gsap.fromTo(navOverlayRef.current, { y: '-100%' }, { y: '0%', duration: 0.3 });
        gsap.to(navLinksRef.current, { opacity: 1, y: 0, duration: 0.3, stagger: 0.1 });
      } else {
        closeNav();
      }
    }
  };

  const closeNav = () => {
    if (navOverlayRef.current) {
      gsap.to(navLinksRef.current, { opacity: 0, y: 20, duration: 0.2 });
      gsap.to(navOverlayRef.current, { y: '-100%', duration: 0.3 }).then(() => {
        navOverlayRef.current!.classList.remove('active');
      });
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
          <Link href="/">
            <img alt="NewYorkSoftwareslogo" className="h-10" src={SamSblackLogo.src} width="40" />
          </Link>
        </div>
        <div className="flex items-center space-x-8 hidden lg:flex">
          <Link href="/About">
            <span className="text-white font-small" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '1.1em' }}>About</span>
          </Link>
          <Link href="/Careers">
            <span className="text-white font-small" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '1.1em' }}>Careers</span>
          </Link>
          <Link href="/Contact">
            <button className="text-white font-small border border-white rounded-full px-4 py-2" style={{ fontFamily: 'var(--font-ibm-plex)', fontSize: '1.1em' }}>
              Contact
            </button>
          </Link>
        </div>
      </nav>

      <div ref={navOverlayRef} className="nav-overlay fixed top-0 left-0 w-full h-full bg-black transform -translate-y-full z-10">
        <button className="absolute top-5 right-5 text-white text-2xl" onClick={closeNav}>&times;</button>
        <div className="flex flex-col space-y-4 text-white items-center justify-center h-full">
          {['services', 'products', 'About', 'Careers','Contact'].map((item, index) => (
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
