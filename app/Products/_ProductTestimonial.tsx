"use client";
import React from 'react';
import './ProductTestimonials.css';

interface ProductTestimonialsProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ProductTestimonials: React.FC<ProductTestimonialsProps> = ({
  title,
  description,
  imageSrc
}) => {
  return (
    <div className='slider-container'>
      <div className='card'>
        {/* Image at the top, made larger */}
        <div className='card-image-container'>
          <img src={imageSrc} alt={title} className='card-image' />
        </div>

        {/* Title and description below the image */}
        <div className='card-content'>
          <h2 className='card-title'>{title}</h2>
          <p className='card-description'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTestimonials;
