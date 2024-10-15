"use client";
import React from 'react';
import './BrandsHomeSectionComponent.css'; // for additional styles
import TextUnderline from '../GlobalComponents/TextUnderline/TextUnderline'; // Importing TextUnderline

// Import your PNG images explicitly
import BrandNamesLogo3 from '@/app/Images/BrandsHomeSectionLogos/Cisco-logo.png';
import BrandNamesLogo4 from '@/app/Images/BrandsHomeSectionLogos/Qualcomm-Logo.png';
import BrandNamesLogo6 from '@/app/Images/BrandsHomeSectionLogos/Merck-Co.png';
import BrandNamesLogo7 from '@/app/Images/BrandsHomeSectionLogos/Pingogo.png';
import BrandNamesLogo8 from '@/app/Images/BrandsHomeSectionLogos/SAP-Logo.png';
import BrandNamesLogo9 from '@/app/Images/BrandsHomeSectionLogos/Tesla-logo.png';
import BrandNamesLogo10 from '@/app/Images/BrandsHomeSectionLogos/TotalEnergies-Logo.png';
import BrandNamesLogo11 from '@/app/Images/BrandsHomeSectionLogos/UPS-logo.png';
import BrandNamesLogo12 from '@/app/Images/BrandsHomeSectionLogos/Union-Pacific-Logo.png';
import BrandNamesLogo13 from '@/app/Images/BrandsHomeSectionLogos/Wells-Fargo-Logo.png';
import BrandNamesLogo15 from '@/app/Images/BrandsHomeSectionLogos/nextera.png';

// Create an array of brand logos
const brandLogos = [
  { src: BrandNamesLogo3, alt: 'Cisco logo' },
  { src: BrandNamesLogo4, alt: 'Qualcomm logo' },
  { src: BrandNamesLogo6, alt: 'Merck & Co. logo' },
  { src: BrandNamesLogo7, alt: 'Pingogo logo' },
  { src: BrandNamesLogo8, alt: 'SAP logo' },
  { src: BrandNamesLogo9, alt: 'Tesla logo' },
  { src: BrandNamesLogo10, alt: 'Total Energies logo' },
  { src: BrandNamesLogo11, alt: 'UPS logo' },
  { src: BrandNamesLogo12, alt: 'Union Pacific logo' },
  { src: BrandNamesLogo13, alt: 'Wells Fargo logo' },
  { src: BrandNamesLogo15, alt: 'Nextera logo' },
];

const BrandsHomeSectionComponent = () => {
  return (
    <div className='background-container'>
      <div className='brand-parent-container'>
        <div className='brand-child-1'>
          <div className='brand-text-customers'>
            <TextUnderline text='Customers' width='20%' />
            <div className='brand-text-customers-child'>
              We are proud to collaborate with various progressive brands. From start-ups and scale-ups to international organizations from various industries.
            </div>
          </div>
        </div>

        <div className='brand-child-2'>
          {brandLogos.map((logo, index) => (
            <img
              key={index}
              alt={logo.alt}
              className="h-10 md:h-20 w-16 md:w-24 brand-logo"
              src={logo.src.src} // Accessing the src property of imported image
              style={{ maxWidth: '100%' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandsHomeSectionComponent;
