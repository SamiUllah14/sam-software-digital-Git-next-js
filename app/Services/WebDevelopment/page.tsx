import HeroSectionNavBar from '@/app/components/HeroSection/HeroSectionNavBar';
import React from 'react';
import TestimonialsComponent from '../TestimonialItem';

const page = () => {
    const testimonialsData = [
        {
          name: 'Bonnie Green',
          role: 'Web Developer at NewYorkSoftwares',
          imgSrc: 'https://randomuser.me/api/portraits/women/79.jpg',
          quote: 'If you care for your time, I hands down would go with this.',
          title: 'Very easy this was to integrate',
        },
        {
          name: 'Roberta Casas',
          role: 'Lead Designer at NewYorkSoftwares',
          imgSrc: 'https://randomuser.me/api/portraits/women/65.jpg',
          quote: 'Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!',
          title: 'Solid foundation for any project',
        },
        {
          name: 'Jese Leos',
          role: 'Software Engineer at NewYorkSoftwares',
          imgSrc: 'https://randomuser.me/api/portraits/men/64.jpg',
          quote: 'Aesthetically, the well-designed components are beautiful and will undoubtedly level up your next application.',
          title: 'Mindblowing workflow',
        },
        {
          name: 'Joseph McFall',
          role: 'CTO at NewYorkSoftwares',
          imgSrc: 'https://randomuser.me/api/portraits/men/83.jpg',
          quote: 'You have many examples that can be used to create a fast prototype for your team.',
          title: 'Efficient Collaborating',
        },
        {
          name: 'Samantha Lee',
          role: 'Project Manager at NewYorkSoftwares',
          imgSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
          quote: 'Managing multiple projects has never been easier with such a reliable team by my side.',
          title: 'Effortless Project Management',
        },
        {
          name: 'Michael Brown',
          role: 'UI/UX Designer at NewYorkSoftwares',
          imgSrc: 'https://randomuser.me/api/portraits/men/90.jpg',
          quote: 'The user interface and experience we deliver is unmatched, all thanks to collaborative teamwork.',
          title: 'Creative Design Process',
        },
        {
          name: 'David Smith',
          role: 'Backend Developer at NewYorkSoftwares',
          imgSrc: 'https://randomuser.me/api/portraits/men/22.jpg',
          quote: 'Building robust, scalable backend systems is what drives my passion for development.',
          title: 'Backend Excellence',
        },
        {
          name: 'Emily White',
          role: 'Frontend Developer at NewYorkSoftwares',
          imgSrc: 'https://randomuser.me/api/portraits/women/37.jpg',
          quote: 'The satisfaction of seeing my frontend designs come to life is the best part of my job.',
          title: 'Visually Stunning Frontends',
        }
      ];

  return (
    <>
      <div className='bg-[#F0EC74]'>
        <HeroSectionNavBar />
      </div>

      <TestimonialsComponent 
        title="Meet Our Web Development Team" 
        subtitle="Innovative Minds Crafting Seamless Digital Experiences" 
        testimonials={testimonialsData} 
      />
    </>
  );
}

export default page;
