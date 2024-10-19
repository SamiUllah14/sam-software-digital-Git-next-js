// src/components/TestimonialsComponent.tsx
import React from 'react';
import TitleComponent from '@/app/components/HeroSection/_titleComponentAbout';

// Define the type for a single testimonial
interface Testimonial {
  name: string;
  role: string;
  imgSrc: string;
  quote: string;
  title: string;
}

// Define the props for the TestimonialsComponent
interface TestimonialsComponentProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const TestimonialsComponent: React.FC<TestimonialsComponentProps> = ({ title, subtitle, testimonials }) => {
  return (
    <div className="TestimonialsSection flex justify-center items-center flex-col bg-black mt-12">
      <div className='mb-20'>
        <TitleComponent 
          title={title} 
          subtitle={subtitle} 
          showVideo={false} 
          backgroundColor='black'  
          titleColor="white"  
          subtitleColor='white' 
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

export default TestimonialsComponent;
