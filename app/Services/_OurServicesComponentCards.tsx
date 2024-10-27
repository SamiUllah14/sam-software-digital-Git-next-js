import React from 'react';

export const _OurServicesComponentCards = () => {
  const services = [
    {
      title: 'Click & Meet Our Web Development Team',
      description: 'Custom web solutions for New York businesses, enhancing user experience and driving growth.',
      bgColor: 'bg-blue-100',
      link: '/Services/WebDevelopment', // Specify the link for this service
    },
    {
      title: 'Click & Meet Our Mobile Application Development Team',
      description: 'User-friendly mobile apps that connect and engage, tailored for New York businesses.',
      bgColor: 'bg-green-100',
      link: '/Services/MobileDevelopment', // Specify the link for this service
    },
    {
      title: 'Click & Meet Our Marketing Team',
      description: 'Data-driven campaigns to boost visibility and engagement for New York brands.',
      bgColor: 'bg-yellow-100',
      link: '/Services/MarketingTeam', // Specify the link for this service
    },
    {
      title: 'Remote Work Best Practices',
      description: 'Essential tips for effective remote work in today’s digital age.',
      bgColor: 'bg-purple-100',
      link: '/remote-work', // Specify the link for this service
    },
  ];
  

  return (
    <div className='flex flex-wrap justify-center mt-10 px-4'>
      {services.map((service, index) => (
        <a 
          key={index}
          href={service.link} // Use the link from the service object
          className={`block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-4 ${service.bgColor}`}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{service.title}</h5>
          <p className="font-normal text-gray-700">{service.description}</p>
        </a>
      ))}
    </div>
  );
};
