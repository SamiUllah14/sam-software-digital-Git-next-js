'use client';
import React from 'react';
import './AboutUs.css'; // Import styles
import { Divider } from '@material-ui/core';
import RightBoxAboutUsChild from './InnerComponents/RightBoxAboutUsChild/RightBoxAboutUsChild';

// About Us Component
const AboutUs = () => {
  return (
    <div className="about-us">
      {/* SEO Metadata */}
      <meta name="description" content="Leading e-commerce and software development in New York, creating powerful solutions tailored to business needs." />
      <meta name="keywords" content="New York, e-commerce solutions, software development, digital platforms, B2B, B2C, custom apps" />
      <meta name="geo.region" content="US-NY" />
      <meta property="og:title" content="About Us | Leading E-commerce and Software Development in New York" />
      <meta property="og:description" content="Discover our expert services in e-commerce, software, and mobile app development tailored for businesses in New York and beyond." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com/about-us" />
      <meta property="og:image" content="https://yourdomain.com/static/about-us-image.jpg" />

      <div className="About-Us-Container">

        {/* 'We are the makers' Section */}
        <section className="About-Us-Box-1">
          <div className="Child-1-Box-1">
            <h2 className="text-black">We are the Makers in New York</h2>
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
            {/* Web Apps Service */}
            <RightBoxAboutUsChild
              title="Web Apps"
              boxDescription="E-commerce solutions for brands, industry, and trade in New York."
              description="We develop successful solutions for New York businesses, covering B2B, D2C, and B2C, focusing on high conversion rates and brand experiences, seamlessly integrated with PIM, ERP, and CRM systems."
              childItems={[
                ['B2B Web app', 'B2C Web app'],
                ['PIM system', 'Product configurator'],
              ]}
              buttonText="Contact Now"
              buttonLink="/Contactus"
            />

            {/* Mobile Apps Service */}
            <RightBoxAboutUsChild
              title="Mobile Apps"
              boxDescription="High-quality apps for New York businesses."
              description="Our mobile apps enhance the user experience with agile development tailored to meet your business goals."
              childItems={[
                ['Web applications', 'Customer portal', 'Employee app'],
                ['Mobile app', 'Business application'],
              ]}
              buttonText="Contact Now"
              buttonLink="/Contactus"
            />

            {/* High Conversion Sites Service */}
            <RightBoxAboutUsChild
              title="Sites"
              boxDescription="High-conversion platforms for New York businesses."
              description="We design impactful digital platforms that resonate with your audience, ensuring maximum engagement and conversions."
              childItems={[
                ['Corporate website', 'Recruitment website'],
                ['High traffic platform', 'Intranet'],
              ]}
              buttonText="Contact Now"
              buttonLink="/Contactus"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
