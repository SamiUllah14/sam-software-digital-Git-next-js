import React from 'react'
import HeroSectionNavBar from '../components/HeroSection/HeroSectionNavBar'
import About from './About'

import TitleComponent from '../components/HeroSection/_titleComponentAbout'
import BlackLine from './blackLine';

const page = () => {
  return (
    <>
        <div style={{ backgroundColor: '#F0EC74' }}>



    <HeroSectionNavBar backgroundColor='#F0EC74'/>

    </div>

       <TitleComponent 
        title={"About us"} 
        subtitle={"We work remote! and  we love it!"} 
        showVideo={false} // Controls whether the video is shown
        backgroundColor='#F0EC74'
      />
      <div>       <BlackLine/>
</div>
    <About />
    </>
    
  )
}

export default page