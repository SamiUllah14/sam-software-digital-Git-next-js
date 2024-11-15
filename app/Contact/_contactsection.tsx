import React from 'react';
import { FaComments, FaLightbulb, FaFileAlt } from 'react-icons/fa';

const ContactSection: React.FC = () => {
    return (
        <div className="bg-black w-full">
            <div className="container-section mx-auto p-12 max-w-[1250px] bg-black text-white font-sans" style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {/* Center content */}
                <div className="grid-section grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <FaComments size={40} aria-hidden="true" />
                        <p className="title text-5xl mb-5">Contact</p>
                        <p className="text-base mb-5">
                            Do you have a question? Choose one of the topics below and send us a message! Through email or Contact Us form at the bottom of this Web. Or looking for vacancies? Then take a look at our new <a href="/Careers" className="text-white underline">careers site</a>.
                        </p>
                        <button className="bg-gray-800 text-white w-full text-left p-4 mb-2 text-base flex items-center transition duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                            <FaLightbulb className="mr-2" aria-hidden="true" />
                            I would like to be hired!
                        </button>
                        <button className="bg-gray-800 text-white w-full text-left p-4 mb-2 text-base flex items-center transition duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                            <FaFileAlt className="mr-2" aria-hidden="true" />
                            I want you to build Web Application for me!
                        </button>
                        <button className="bg-gray-800 text-white w-full text-left p-4 mb-2 text-base flex items-center transition duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                            <FaFileAlt className="mr-2" aria-hidden="true" />
                            I want you to build Mobile Application for me!
                        </button>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <h5 className="text-base mb-2">Whatsapp Contact</h5>
                        <p className="text-base mb-2">
                            <a href="mailto:business@newyorksoftwares.com" className="text-white underline">business@newyorksoftwares.com</a><br />
                            <span>+17163061452</span>
                        </p>
                        <hr className="border-gray-600 mb-4" />
                        <h5 className="text-base mb-2">Service Desk</h5>
                        <p className="text-base mb-2">
                            <a href="mailto:business@newyorksoftwares.com" className="text-white underline">business@newyorksoftwares.com</a><br />
                            <span>+17163061452</span>
                        </p>
                        <hr className="border-gray-600 mb-4" />
                        <h5 className="text-base mb-2">Address</h5>
                        <p className="text-base mb-2">
                            The Industrial Building<br />
                            Goudsesingel 164<br />
                            3011 KD Rotterdam
                        </p>
                        <p>
                            <a href="#" className="text-white underline"></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
