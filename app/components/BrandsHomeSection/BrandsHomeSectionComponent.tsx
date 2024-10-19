"use client";
import React from 'react';
import './BrandsHomeSectionComponent.css'; // for additional styles
import TextUnderline from '../GlobalComponents/TextUnderline/TextUnderline'; // Importing TextUnderline

// Create an array of brand logos with new high-resolution URLs
const brandLogos = [
  { src: 'https://logo.clearbit.com/spotify.com', alt: 'Spotify logo', link: 'https://www.spotify.com/' },
  { src: 'https://logo.clearbit.com/slack.com', alt: 'Slack logo', link: 'https://www.slack.com/' },
  { src: 'https://logo.clearbit.com/reddit.com', alt: 'Reddit logo', link: 'https://www.reddit.com/' },
  { src: 'https://logo.clearbit.com/zoom.us', alt: 'Zoom logo', link: 'https://www.zoom.us/' },
  { src: 'https://logo.clearbit.com/airbnb.com', alt: 'Airbnb logo', link: 'https://www.airbnb.com/' },
  { src: 'https://logo.clearbit.com/uber.com', alt: 'Uber logo', link: 'https://www.uber.com/' },
  { src: 'https://logo.clearbit.com/lyft.com', alt: 'Lyft logo', link: 'https://www.lyft.com/' },
  { src: 'https://logo.clearbit.com/etsy.com', alt: 'Etsy logo', link: 'https://www.etsy.com/' },
  { src: 'https://logo.clearbit.com/dropbox.com', alt: 'Dropbox logo', link: 'https://www.dropbox.com/' },
  { src: 'https://logo.clearbit.com/twitch.tv', alt: 'Twitch logo', link: 'https://www.twitch.tv/' },
  { src: 'https://logo.clearbit.com/pinterest.com', alt: 'Pinterest logo', link: 'https://www.pinterest.com/' },
];

const BrandsHomeSectionComponent = () => {
  return (
    <div className='background-container'>
      <div className='brand-parent-container'>
        <div className='brand-child-1'>
          <div className='brand-text-customers'>
            <TextUnderline text='Proud to work with these brands!


' width='50%' />
            <div className='brand-text-customers-child'>
              We are proud to collaborate with various progressive brands. From start-ups and scale-ups to international organizations from various industries.
            </div>
          </div>
        </div>

        <div className='brand-child-2'>
          {brandLogos.map((logo, index) => (
            <a href={logo.link} key={index} target="_blank" rel="noopener noreferrer">
              <img
                alt={logo.alt}
                className="brand-logo"
                src={logo.src} // Using the HD logo source
                style={{ maxWidth: '100%' }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandsHomeSectionComponent;
