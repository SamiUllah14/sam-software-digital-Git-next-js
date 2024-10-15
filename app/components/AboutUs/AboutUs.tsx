"use client";
import React from 'react';
import './AboutUs.css'; // for adding additional styles
import { Divider } from '@material-ui/core';
import RightBoxAboutUsChild from './InnerComponents/RightBoxAboutUsChild/RightBoxAboutUsChild';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* SEO Metadata for the About Us Page */}
      <meta name="description" content="Leading e-commerce and software development in New York. We create powerful, agile solutions tailored to your business needs." />
      <meta name="keywords" content="New York, e-commerce solutions, software development, digital platforms, B2B, B2C, custom apps" />
      <meta name="geo.region" content="US-NY" />

      <div className="About-Us-Container">
        {/* Section for 'We are the makers' */}
        <section className="About-Us-Box-1">
          <div className="Child-1-Box-1">
            <p className="text-black">We are the makers in New York</p>
            <Divider className="Divider-1" />
            <div className="Child-of-Child-1">
              <p className="text-black-P">We translate new business ideas into smart digital products for the New York market and beyond.</p>
            </div>
          </div>
        </section>

        {/* Section for Services like E-commerce, Software, and Sites */}
        <section className="About-Us-Box-2">
          <div className="Child-1-Box-2">
            {/* E-commerce Service */}
            <RightBoxAboutUsChild
              title="E-commerce"
              boxDescription="E-commerce for brands, industry, and trade in New York"
              description="For businesses in New York, we develop successful e-commerce solutions for B2B, D2C, and B2C. Our webshops focus on high conversion and ultimate brand experiences, fully integrated with PIM, ERP, and CRM systems to meet the needs of your customers."
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
              boxDescription="Software and apps that make New Yorkers happy"
              description="We build high-quality software and apps for New York businesses, ensuring a user-friendly experience tailored to your business processes. Using agile development, we create powerful applications swiftly."
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
              boxDescription="High Conversion Sites and Platforms for New York businesses"
              description="Create personalized digital experiences for your New York customers with high conversion platforms. We design and develop platforms that make an impact, working closely with you and your customers to ensure maximum engagement."
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
