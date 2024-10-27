"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './TestimonialPage.css';  // Import custom CSS

// Import required Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import testimonial images
import image1 from '@/app/Images/TestmonialPageImages/EcommerceDesign.png';
import image2 from '@/app/Images/TestmonialPageImages/MobileCoffee.png';
import image3 from '@/app/Images/TestmonialPageImages/MedicalImage.png';
import image4 from '@/app/Images/TestmonialPageImages/RealEstateImage.png';

// Import TestimonialComponent
import TestimonialComponent from './InnerComponents/TestimonialComponent';

const TestimonialPage = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  // State to determine if navigation should be enabled on mobile devices
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  // Handler to update autoplay progress
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  // Effect to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener on unmount
    };
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={!isMobile}  // Disable navigation on mobile
        modules={[Autoplay, Pagination, Navigation]}  // Swiper modules
        onAutoplayTimeLeft={onAutoplayTimeLeft}  // Autoplay progress handler
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <TestimonialComponent
            title="Gold Jewelry Shop"
            brandName="Growing Digitally with an Explosive Jewelry Collection"
            description="Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & software development / System integration / Managed cloud services / Support & maintenance / ASP.Net / Next.js / AWS"
            casesText="Cases"
            allCasesText="" 
            imageSrc={image1.src}  // Set image source
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <TestimonialComponent
            title="Coffee Shop"
            brandName="Expand Your Coffee Shop with Our Digital Solutions"
            description="Product configurator / B2C e-commerce / Tech strategy / UX/UI design / Mobile & Web development / System integration / Managed cloud services / Support & maintenance / Flutter / Next.js / Laravel / AWS"
            casesText=""
            allCasesText=""
            allCasesLink="#"
            imageSrc={image2.src}  // Set image source
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <TestimonialComponent
            title="Medical Booking Online"
            brandName="The Best Way to Engage Your Audience"
            description="Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Mobile & Web development / System integration / Managed cloud services / Support & maintenance / ASP.net / React / AWS"
            casesText=""
            allCasesLink="#"
            allCasesText=""
            imageSrc={image3.src}  // Set image source
          />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <TestimonialComponent
            title="Real Estate Digital"
            brandName="Revolutionizing Your Local Business Online"
            description="Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & software development / System integration / Managed cloud services / Support & maintenance / Laravel / Vue.js / AWS"
            casesText=""
            allCasesLink="#"
            allCasesText=""
            imageSrc={image4.src}  // Set image source
          />
        </SwiperSlide>

        {/* Progress Circle for Autoplay */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default TestimonialPage;
