import React, { useState, useEffect } from 'react';
import './ProductComponent.css';
import ButtonOutliner from '../components/GlobalComponents/ButtonOutliner/ButtonOutliner';
import ProductSlider from './ProductSlider'; // Updated import to ProductSlider

const productData = [

  {
    imageSrc: "https://placehold.co/800x400",
    imageAlt: "The high school website",
    title: "WebApp, School LMS",
    subtitle: "Digital  growth with a high school web and management of students.",
    description: "WebApp / Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & mobile development / System integration / Managed cloud services / Support & maintenance / Laravel / Vue / AWS"
  },
  {
    imageSrc: "https://placehold.co/800x400",
    imageAlt: " E-com  website",
    title: "WebApp, E-commerce",
    subtitle: "Embark  on a digital journey with an e-commerece selling products.",
    description: "WebApp / Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & mobile development / System integration / Managed cloud services / Support & maintenance / ASP.NET / NEXTjs / AWS"
  },
  {
    imageSrc: "https://placehold.co/800x400",
    imageAlt: "Custom web",
    title: "WebApp, Custom any webapp",
    subtitle: "Contact us  to create a custom webapp for your business.",
    description: "WebApp / Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & mobile development / System integration / Managed cloud services / Support & maintenance / ASP.NET / NEXTjs / AWS"
  },

  {
    imageSrc: "https://placehold.co/800x400",
    imageAlt: "Build custom mobile apps for IOS and ANDROID",
    title: "Mobile, build custom mobile apps for IOS and ANDROID",
    subtitle: "Contact us for  a custom mobile app for your business.",
    description: "Mobile App / Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & mobile development / System integration / Managed cloud services / Support & maintenance / Flutter / Firebase"
  },
  {
    imageSrc: "https://placehold.co/800x400",
    imageAlt: "Website",
    title: "Sites, custom website",
    subtitle: "From simple to advance  website, we can help you.",
    description: "website / Product configurator / B2B e-commerce / B2C e-commerce / Tech strategy / UX/UI design / Web & mobile development / System integration / Managed cloud services / Support & maintenance / Wordpress / PostgreSQL / AWS"
  },
  // Other products...
];

const ProductComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2); // Default items per page
  const [filter, setFilter] = useState('All');
  const [description, setDescription] = useState('Schools, Colleges, Universities, Real Estates, Gold, Fashion and more business apps!'); // State for description

  useEffect(() => {
    const handleResize = () => {
      // Set items per page based on window width
      if (window.innerWidth <= 768) {
        setItemsPerPage(1); // Show only one ProductSlider on small devices
      } else {
        setItemsPerPage(2); // Show two on larger devices
      }
    };

    // Set initial items per page
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update description based on filter selection
  useEffect(() => {
    switch (filter) {
      case 'WebApp':
        setDescription('Business Custom Webapps, Nextjs, Laravel, Asp.net, related products and marketing services.');
        break;
      case 'Mobile':
        setDescription('FLutter, Asp.net, Firebase, Android Native app.');
        break;
      case 'Sites':
        setDescription('Business Websites and online presence marketing services.');
        break;
      case 'All':
      default:
        setDescription('Schools, Colleges, Universities, Real Estates, Gold, Fashion and more business apps!');
        break;
    }
  }, [filter]);

  // Filter the products based on the selected filter
  const filteredProducts = productData.filter((product) => {
    if (filter === 'All') return true;
    return product.title.includes(filter);
  });

  // Calculate start and end index for slicing filteredProducts
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < filteredProducts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFilterChange = (text: string) => {
    setFilter(text);
    setCurrentPage(0); // Reset to the first page when filter changes
  };

  return (
    <div className="ProductComponent-background">
      <div className="ProductComponent">
        <div className="filterTop bg-white">
          <p>Filter by</p>
          {['All', 'WebApp', 'Mobile', 'Sites'].map((text) => (
            <ButtonOutliner
              key={text}
              text={text}
              onClick={() => handleFilterChange(text)} // Handle filter change
            />
          ))}
        </div>

        <div className="productContainer">
          <div className="block1Sider">
            <p className='para underline'>{filter}</p>
            <p className='description'>
              {description}
            </p>
          </div>
          <div className="block2Slider">
            <div className="block2SliderInner"> 
              {currentProducts.map((product, index) => (
                <ProductSlider // Updated to use ProductSlider
                  key={index}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  title={product.title}
                  subtitle={product.subtitle}
                  description={product.description}
                />
              ))}
            </div>
            <div className="block2SliderInnerButtons">
              <div className="buttonBack">
                <button className="prevButton" onClick={handlePrevious} disabled={currentPage === 0}>Previous</button>
              </div>
              <div className="buttonNext">
                <button className="nextButton" onClick={handleNext} disabled={endIndex >= filteredProducts.length}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
