import React from 'react'
import TestimonialComponent from './InnerComponents/TestimonialComponent'

const TestimonialPage = () => {
  return (
    <div>
    <TestimonialComponent
      title="Title for Chololotoo"
      brandName="Lorem ipsum dolo officia quibus odit?"
      description="Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & software development / System integration / Managed cloud services / Support & maintenance / Laravel / Vue.js / AWS"
      videoSrc="https://videos.pexels.com/video-files/3249902/3249902-uhd_2560_1440_25fps.mp4"
      casesText="Cases"
      fallbackVideoSrc="https://videos.pexels.com/video-files/17219506/17219506-uhd_2560_1440_60fps.mp4" // Add a valid fallback video source
      allCasesText='View'

    />
        <TestimonialComponent
      title="Title for Chololotoo"
      brandName="Lorem ipsum dolo officia quibus odit?"
      description="Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & software development / System integration / Managed cloud services / Support & maintenance / Laravel / Vue.js / AWS"
      videoSrc="https://videos.pexels.com/video-files/17219506/17219506-uhd_2560_1440_60fps.mp4"
      casesText=""
      allCasesText='View'

      
      allCasesLink="#"
      fallbackVideoSrc="path/to/fallback/video.mp4" // Add a valid fallback video source

    />    <TestimonialComponent
    title="Title for Chololotoo"
    brandName="Lorem ipsum dolo officia quibus odit?"
    description="Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & software development / System integration / Managed cloud services / Support & maintenance / Laravel / Vue.js / AWS"
    videoSrc="https://videos.pexels.com/video-files/3249902/3249902-uhd_2560_1440_25fps.mp4"
    casesText=" "
    allCasesLink="#"
    allCasesText='View'

    fallbackVideoSrc="path/to/fallback/video.mp4" // Add a valid fallback video source

  />    <TestimonialComponent
  title="Title for Chololotoo"
  brandName="Lorem ipsum dolo officia quibus odit?"
  description="Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & software development / System integration / Managed cloud services / Support & maintenance / Laravel / Vue.js / AWS"
  videoSrc="https://videos.pexels.com/video-files/3249902/3249902-uhd_2560_1440_25fps.mp4"
  casesText=""
  allCasesLink="#"
  allCasesText='View'

  fallbackVideoSrc="path/to/fallback/video.mp4" // Add a valid fallback video source

/>

  </div>    )
}

export default TestimonialPage