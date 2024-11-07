"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './TestimonialPage.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '@/app/Images/TestmonialPageImages/EcommerceDesign.png';
import image2 from '@/app/Images/TestmonialPageImages/MobileCoffee.png';
import image3 from '@/app/Images/TestmonialPageImages/MedzImage.png';
import image4 from '@/app/Images/TestmonialPageImages/LOGOLargeSlide.png';
import TestimonialComponent from './InnerComponents/TestimonialComponent';
import SwiperCore from 'swiper';

const TestimonialPage: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  // Set default state to `false` initially, then update in useEffect
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const onAutoplayTimeLeft = (s: SwiperCore, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  useEffect(() => {
    // Only runs in the browser, setting the correct initial value for `isMobile`
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
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
        navigation={!isMobile}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialComponent
            title="Gold Jewelry Shop"
            brandName="Growing Digitally with an Explosive Jewelry Collection"
            description="Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & software development / System integration / Managed cloud services / Support & maintenance / ASP.Net / Next.js / AWS"
            casesText="Cases"
            allCasesText=""
            imageSrc={image1.src}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialComponent
            title="Coffee Shop"
            brandName="Expand Your Coffee Shop with Our Digital Solutions"
            description="Product configurator / B2C e-commerce / Tech strategy / UX/UI design / Mobile & Web development / System integration / Managed cloud services / Support & maintenance / Flutter / Next.js / Laravel / AWS"
            casesText=""
            allCasesText=""
            allCasesLink="#"
            imageSrc={image2.src}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialComponent
            title="Medical Booking Online"
            brandName="The Best Way to Engage Your Audience"
            description="Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Mobile & Web development / System integration / Managed cloud services / Support & maintenance / ASP.net / React / AWS"
            casesText=""
            allCasesLink="#"
            allCasesText=""
            imageSrc={image3.src}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialComponent
            title="(Contact Us For Any Business)"
            brandName="Revolutionizing Your Local Business Online"
            description="Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & software development / System integration / Managed cloud services / Support & maintenance / Laravel / Vue.js / AWS"
            casesText=""
            allCasesLink="#"
            allCasesText=""
            imageSrc={image4.src}
          />
        </SwiperSlide>

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
