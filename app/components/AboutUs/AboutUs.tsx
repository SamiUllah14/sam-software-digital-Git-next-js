'use client';
import React from 'react';
import './AboutUs.css'; // Import styles
import { Divider } from '@material-ui/core';
import RightBoxAboutUsChild from './InnerComponents/RightBoxAboutUsChild/RightBoxAboutUsChild';

// About Us Component
const AboutUs = () => {
  return (
    <div className="about-us">
      {/* SEO Metadata for the About Us page */}
      <meta 
        name="description" 
        content="Leading e-commerce and software development in New York. We create powerful, agile solutions tailored to your business needs." 
      />
      <meta 
        name="keywords" 
        content="New York, e-commerce solutions, software development, digital platforms, B2B, B2C, custom apps" 
      />
      <meta name="geo.region" content="US-NY" />

      <div className="About-Us-Container">
        {/* 'We are the makers' Section */}
        <section className="About-Us-Box-1">
          <div className="Child-1-Box-1">
            <p className="text-black">We are the makers in New York</p>
            <Divider className="Divider-1" />
            <div className="Child-of-Child-1">
              <p className="text-black-P">
                We translate new business ideas into smart digital products for the New York market and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section: E-commerce, Software, and High Conversion Sites */}
        <section className="About-Us-Box-2">
          <div className="Child-1-Box-2">
            {/* E-commerce Service */}
            <RightBoxAboutUsChild
              title="E-commerce"
              boxDescription="E-commerce for brands, industry, and trade in New York"
              description="We develop successful e-commerce solutions for New York businesses, covering B2B, D2C, and B2C. Our solutions focus on high conversion rates and superior brand experiences, seamlessly integrated with PIM, ERP, and CRM systems to meet customer needs."
              childItems={[
                ['B2B e-commerce', 'B2C e-commerce'],
                ['PIM system', 'Product configurator'],
              ]}
              buttonText="More about E-commerce"
              buttonLink="/learn-more"
            />

            {/* Software Development Service */}
            <RightBoxAboutUsChild
              title="Software"
              boxDescription="Software and apps that drive success in New York"
              description="We create high-quality software and apps for New York businesses, enhancing the user experience with agile development to meet your business goals. Our solutions are tailored to your specific requirements."
              childItems={[
                ['Web applications', 'Customer portal', 'Employee app'],
                ['Mobile app', 'Business application'],
              ]}
              buttonText="More about Software"
              buttonLink="/learn-more-Software"
            />

            {/* High Conversion Sites Service */}
            <RightBoxAboutUsChild
              title="Sites"
              boxDescription="High Conversion Sites for New York businesses"
              description="Deliver personalized digital experiences with high-conversion platforms. Our team collaborates with you to design and develop impactful platforms that resonate with your New York audience and ensure maximum engagement."
              childItems={[
                ['Corporate website', 'Recruitment website'],
                ['High traffic platform', 'Intranet'],
              ]}
              buttonText="More about Sites"
              buttonLink="/learn-more-about-sites"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
