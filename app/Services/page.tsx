"use client";

import React from 'react';
import HeroSectionNavBar from '../components/HeroSection/HeroSectionNavBar';
import TitleComponent from '../components/HeroSection/_titleComponentAbout';
import { _OurServicesComponentCards } from './_OurServicesComponentCards';

const page = () => {
  return (
    <>
      <div className='bg-white'>
        <HeroSectionNavBar backgroundColor='white' />
      </div>
      <div className='bg-white flex justify-center items-center h-[45vh] w-full '>
        <TitleComponent 
          title="Our Services at NewYorkSoftwares" 
          subtitle="We deliver digital solutions for businesses of all sizes, from websites to mobile apps, tailored to your goals." 
          showVideo={false}
        />
      </div>



<_OurServicesComponentCards/>
    </>
  );
};

export default page;
