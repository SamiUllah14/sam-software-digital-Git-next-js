import TitleComponent from '@/app/components/HeroSection/_titleComponentAbout';
import React from 'react';

const testimonials = [
  {
    name: 'Bonnie Green',
    role: 'Developer at Open AI',
    imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
    quote: 'If you care for your time, I hands down would go with this.',
    title: 'Very easy this was to integrate',
  },
  {
    name: 'Roberta Casas',
    role: 'Lead designer at Dropbox',
    imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png',
    quote: 'Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!',
    title: 'Solid foundation for any project',
  },
  {
    name: 'Jese Leos',
    role: 'Software Engineer at Facebook',
    imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    quote: 'Aesthetically, the well-designed components are beautiful and will undoubtedly level up your next application.',
    title: 'Mindblowing workflow',
  },
  {
    name: 'Joseph McFall',
    role: 'CTO at Google',
    imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png',
    quote: 'You have many examples that can be used to create a fast prototype for your team.',
    title: 'Efficient Collaborating',
  },
];

const WebDevelopmentComponent = () => {
  return (
    <div className="WebDevelopmentSection flex justify-center items-center flex-col bg-black mt-12">
 
    
      <div className='mb-20'>
      <TitleComponent title={"Meet Our Web Development Team"} subtitle={'Innovative Minds Crafting Seamless Digital Experiences'} showVideo={false} backgroundColor='black'  titleColor="white"  subtitleColor='white'// Red title color
      />

      </div>

      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-black mx-4 md:mx-0">
        
        {testimonials.map((testimonial, index) => (
          <figure
            key={index}
            className={`flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 ${
              index === 0
                ? 'md:rounded-tl-lg' // Top-left rounded
                : index === 1
                ? 'md:rounded-tr-lg' // Top-right rounded
                : index === testimonials.length - 2
                ? 'md:rounded-bl-lg' // Bottom-left rounded
                : index === testimonials.length - 1
                ? 'rounded-b-lg md:rounded-br-lg' // Bottom-right rounded
                : ''
            }`}
          >
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.title}
              </h3>
              <p className="my-4">{testimonial.quote}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center">
              <img
                className="rounded-full w-9 h-9"
                src={testimonial.imgSrc}
                alt={`${testimonial.name} profile picture`}
              />
              <div className="space-y-0.5 text-sm text-gray-500 font-medium text-left ms-3">
                <div>{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopmentComponent;
