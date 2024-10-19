import React from 'react';

export const _OurServicesComponentCards = () => {
  const services = [
    {
      title: 'Meet Our Web Development Team',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chrono.',
      bgColor: 'bg-blue-100',
      link: '/Services/WebDevelopment', // Specify the link for this service
    },
    {
      title: 'Meet Our  Mobile Application Development',
      description: 'The cloud has become the backbone of digital transformation for enterprises across the globe.',
      bgColor: 'bg-green-100',
      link: '/Services/MobileDevelopment', // Specify the link for this service
    },
    {
      title: 'Marketing Team',
      description: 'Innovations in artificial intelligence are reshaping the tech landscape and driving business growth.',
      bgColor: 'bg-yellow-100',
      link: '/Services/MarketingTeam', // Specify the link for this service
    },
    {
      title: 'Cybersecurity Challenges',
      description: 'As technology evolves, so do the challenges in keeping data safe and secure.',
      bgColor: 'bg-red-100',
      link: '/cybersecurity', // Specify the link for this service
    },
    {
      title: 'Remote Work Best Practices',
      description: 'Tips and strategies for effective remote work in a post-pandemic world.',
      bgColor: 'bg-purple-100',
      link: '/remote-work', // Specify the link for this service
    },
  ];

  return (
    <div className='flex flex-wrap justify-center mt-20 px-4'>
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
