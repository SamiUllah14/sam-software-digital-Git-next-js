import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-6 py-16 space-y-20">
      {/* Banner Section */}
      <section className="w-full max-w-7xl text-center space-y-6">
        <p className="text-3xl font-extrabold text-gray-800">
          Leading Software Solutions Across USA, Saudi Arabia, and Pakistan
        </p>
        <p className="mt-4 text-lg text-gray-600">
          We are a global software company dedicated to delivering high-quality technology solutions 
          with offices and partners across the United States, Saudi Arabia, and Pakistan.
        </p>
      </section>

      {/* Overview Section */}
      <section className="w-full max-w-7xl text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
        <p className="text-lg text-gray-600 mx-auto max-w-4xl">
          Established in 2024, we are a full-service software development company specializing in 
          custom software, web, and mobile app development. Our mission is to drive transformation 
          in the tech industry by focusing on innovation, customer satisfaction, and delivering 
          measurable results for businesses worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">Our Mission</h3>
            <p className="text-gray-600">
              We are committed to delivering high-quality software solutions that empower our 
              clients to achieve their goals. Our team works tirelessly to ensure excellence 
              and impact in everything we create.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">Our Vision</h3>
            <p className="text-gray-600">
              To be a trusted technology partner for organizations of all sizes, driving growth 
              and transformation with innovative software solutions that are reliable and scalable.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full max-w-7xl space-y-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "John Doe", title: "CEO", imgId: 29 },
            { name: "Emma Willi", title: "COO", imgId: 12 },
            { name: "Jane Smith", title: "CTO", imgId: 20 },
            { name: "Maria Brown", title: "CFO", imgId: 45 },
          ].map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
              <Image
                className="w-24 h-24 rounded-full mx-auto object-cover"
                src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${leader.imgId}.jpg`}
                alt={leader.name}
                width={96}
                height={96}
              />
              <h3 className="text-xl font-medium text-gray-800">{leader.name}</h3>
              <p className="text-gray-500">{leader.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-7xl space-y-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Alice Johnson",
              feedback: "The team delivered exceptional software solutions that exceeded our expectations!",
              imgId: 32,
            },
            {
              name: "Robert King",
              feedback: "Reliable, professional, and results-driven service every time.",
              imgId: 14,
            },
            {
              name: "Sarah Lee",
              feedback: "A fantastic experience from start to finish. They truly care about their clients.",
              imgId: 23,
            },
            {
              name: "Daniel Thompson",
              feedback: "Exceptional service and on-time delivery. Highly recommended!",
              imgId: 56,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 space-y-4 border-l-4 border-indigo-500"
            >
              <div className="flex items-center space-x-4">
                <Image
                  className="w-12 h-12 rounded-full object-cover"
                  src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${testimonial.imgId}.jpg`}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                />
                <div>
                  <p className="text-gray-500 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">&quot;{testimonial.feedback}&quot;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-7xl text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Whether you&apos;re in the USA, Saudi Arabia, or Pakistan, we&apos;re here to help. Contact us 
          to discuss your project, ask any questions, or learn more about our services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              location: "USA Office",
              address: "123 Software Lane, Silicon Valley, CA",
              email: "business@newyorksoftwares.com",
            },
            {
              location: "Saudi Arabia Office",
              address: "456 Tech Park, Riyadh",
              email: "business@newyorksoftwares.com",
            },
            {
              location: "Pakistan Office",
              address: "789 IT Hub, Islamabad",
              email: "business@newyorksoftwares.com",
            },
          ].map((office, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800">{office.location}</h3>
              <p className="text-gray-600 mt-2">{office.address}</p>
              <p className="text-gray-600 mt-1">{office.email}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
