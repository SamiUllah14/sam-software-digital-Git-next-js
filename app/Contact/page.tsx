import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import TitleComponent from '../components/HeroSection/_titleComponentAbout';
import HeroSectionNavBar from '../components/HeroSection/HeroSectionNavBar';
import ContactSection from './_contactsection';
import ContactUsFormComponent from '../components/ContactUsFormComponent/ContactUsFormComponent';

const Page = () => {
  return (
    <div style={{ backgroundColor: '#F0EC74' }}>
      <HeroSectionNavBar />
    
      <TitleComponent 
        title={"Let's talk"} 
        subtitle={"Contact us and let's have a conversation with a cup of coffee!"} 
        showVideo={false} // Controls whether the video is shown
      />
      
      <div className='mt-[12vh]'>
        <ContactSection />
        <AboutUs />
        <div className='mb-16 -mt-20'> {/* Negative margin to move it up */}
          <ContactUsFormComponent />
        </div>
      </div>
    </div>
  );
}

export default Page;
