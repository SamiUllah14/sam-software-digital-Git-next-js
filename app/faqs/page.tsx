"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { gsap } from 'gsap';
import TitleComponent from '../components/HeroSection/_titleComponentAbout';
import HeroSectionNavBar from '../components/HeroSection/HeroSectionNavBar';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
      <div className="mb-4 mx-4 sm:mx-6"> {/* Added responsive margins */}
          <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={onClick}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1 })}
          >
              <h2 className="font-semibold text-base sm:text-lg">{question}</h2> {/* Responsive text size */}
              {isOpen ? <FaMinus /> : <FaPlus />}
          </div>
          {isOpen && <p className="text-gray-600 mb-2 text-sm sm:text-base">{answer}</p>} {/* Responsive text size */}
          <hr className="my-4" />
      </div>
  );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // New FAQ content
    const faqs = [
        { question: "What services does NewYorkSoftwares provide?", answer: "At NewYorkSoftwares, we specialize in creating high-quality websites, web applications, and mobile applications. We offer complete end-to-end development solutions, including UI/UX design, custom development, and maintenance. Whether you're a startup in Silicon Valley or an established business in New York City, we tailor our solutions to meet your specific needs." },
        { question: "Do you offer web development services in all states?", answer: "Yes, NewYorkSoftwares provides website development services across all 50 states in the USA. Whether you're in California, Florida, Texas, or any other state, we can help you create a powerful online presence. Our team works remotely and delivers excellent services no matter where you're located, including affluent areas like Beverly Hills, Miami, and the Hamptons." },
        { question: "Can NewYorkSoftwares help with mobile app development in luxury markets like New York City or San Francisco?", answer: "Absolutely! We have extensive experience developing cutting-edge mobile applications for businesses in high-demand markets like New York City, San Francisco, and Los Angeles. Whether your app is aimed at luxury goods, real estate, or e-commerce, we can deliver a sleek, high-performance mobile experience." },
        { question: "How much does a custom website or mobile app cost?", answer: "The cost varies depending on the complexity and features of your project. For example, a basic business website for a small company in Austin, Texas, may differ from a fully customized web application for a tech company in Boston, Massachusetts. Contact us for a detailed quote tailored to your project and location." },
        { question: "Can you redesign my current website?", answer: "Yes, we offer website redesign services to clients in all major cities, including Chicago, Seattle, and Dallas. If your website needs a modern look or better functionality, our team can help revamp it to align with the latest industry trends and SEO best practices." },
        { question: "What industries do you specialize in?", answer: "NewYorkSoftwares caters to a variety of industries, including technology, finance, real estate, healthcare, and e-commerce. Whether you're a tech startup in Silicon Valley, a law firm in Washington, D.C., or a luxury retail brand in Beverly Hills, we have the expertise to meet your business needs." },
        { question: "How long does it take to develop a website or mobile application?", answer: "The timeline depends on the scope and complexity of your project. On average, a standard website can take 4-6 weeks to complete, while more complex web applications or mobile apps may take several months. We have delivered fast turnarounds for clients in fast-paced cities like New York City and San Francisco." },
        { question: "Does NewYorkSoftwares provide ongoing support and maintenance?", answer: "Yes, we offer ongoing support and maintenance services for all of our clients, whether you're in Miami, Chicago, or Houston. Our team ensures your website or mobile app stays updated and runs smoothly post-launch." },
        { question: "Can you integrate SEO into my website?", answer: "Absolutely! SEO is a core part of our web development process. We optimize all websites with search engines in mind, ensuring that your business ranks well in local searches, whether you're located in Atlanta, Phoenix, or Denver." },
        { question: "Do you work with clients in rural or suburban areas?", answer: "Yes, we work with businesses in rural and suburban areas as well as major cities. Whether you're in a small town in Vermont or a suburb outside Los Angeles, we can deliver top-tier digital solutions to help your business grow." },
        { question: "Can you handle e-commerce website development for luxury brands?", answer: "Yes, we have expertise in building e-commerce websites for luxury brands across the USA. From high-end fashion brands in Beverly Hills to premium real estate in Miami, we ensure that your website is not only visually stunning but also optimized for sales conversions." },
        { question: "How do I get started with NewYorkSoftwares?", answer: "Getting started is easy! Simply contact us through our website or give us a call. We provide free consultations to discuss your project needs, whether you're in New York City, San Diego, or anywhere in between. Our team is ready to create digital solutions that elevate your brand." }
    ];

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
        <div className="navbarsection bg-white">
          <HeroSectionNavBar backgroundColor={"#ffff"}/>
        </div>
            <div className='above-the-faq bg-white py-10'>
                <TitleComponent title={'FAQs'} subtitle={'All the questions you need to know'} showVideo={false} backgroundColor={"white"}   
      />
            </div>
            <div className='above-the-faq bg-white py-10'>
        </div>

            <div className="max-w-2xl mx-auto mt-20">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default FAQ;
