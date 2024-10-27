"use client";

import React from 'react';
import HeroSectionNavBar from '../components/HeroSection/HeroSectionNavBar';
import TitleComponent from '../components/HeroSection/_titleComponentAbout';
import ProductComponent from './ProductComponent';

const page = () => {
  return (
    <>
      <div className='bg-white'>
        <HeroSectionNavBar backgroundColor='white' />
      </div>
      <div className='bg-white flex justify-center items-center h-[45vh] w-full '>
        <TitleComponent 
          title="Checkout our digital products" 
          subtitle="Our digital services range from economical web and mobile applications to sophisticated, enterprise-level solutions, ensuring that our clients receive a product that aligns with their unique requirements and financial goals."
          showVideo={false}
        />
      </div>
<ProductComponent/>
    </>
  );
};

export default page;
