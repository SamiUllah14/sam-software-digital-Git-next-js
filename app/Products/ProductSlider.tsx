// components/ProductSlider.tsx
import React from 'react';

interface ProductSliderProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative">
        <img src={imageSrc} alt={imageAlt} className="w-full" />
      </div>
      <div className="mt-4">
        <h1 className="text-gray-500 text-lg font-medium">{title}</h1>
        <h2 className="text-2xl font-bold mt-2">{subtitle}</h2>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProductSlider;
