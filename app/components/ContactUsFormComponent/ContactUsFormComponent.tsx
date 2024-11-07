"use client";
import React, { useState } from 'react';

const ContactUsFormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: ''
  });

  const [showDialog, setShowDialog] = useState(false); // State to control dialog visibility

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true); // Show the dialog on form submission
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-8 shadow-lg text-gray-500 rounded-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-sm text-gray-600">We&apos;d love to hear from you!</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="My name is" 
                required 
                value={formData.name}
                onChange={handleChange} 
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="My e-mail is" 
                required 
                value={formData.email}
                onChange={handleChange} 
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="telephone" className="sr-only">Telephone</label>
              <input 
                type="text" 
                name="telephone" 
                id="telephone" 
                placeholder="My number is" 
                required 
                value={formData.telephone}
                onChange={handleChange} 
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <select 
                name="subject" 
                id="subject" 
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option disabled hidden value="">Subject line</option>
                <option>I&apos;d like to start a project</option>
                <option>I&apos;d like to ask a question</option>
                <option>I&apos;d like to make a proposal</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                name="message" 
                id="message" 
                placeholder="I&apos;d like to chat about" 
                cols={30} 
                rows={5} 
                required 
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Send Message
            </button>
          </div>
        </form>

        {showDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
              <span className="text-4xl" role="img" aria-label="worried face">😟</span>
              <h2 className="mt-4 text-lg font-semibold">This form is under development</h2>
              <p className="mt-2 text-gray-600">Please contact us at <a href="mailto:business@newyorksoftwares.com" className="text-blue-600 underline">business@newyorksoftwares.com</a></p>
              <button
                onClick={() => setShowDialog(false)}
                className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUsFormComponent;
