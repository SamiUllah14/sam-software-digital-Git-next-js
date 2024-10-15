"use client";
import React, { useState } from 'react';
import axios from 'axios';
import './ContactUsFormComponent.css'; // for additional styles

const ContactUsFormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>(''); // To handle message type

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

    try {
      const response = await axios.post('http://localhost:5041/contactus', formData);
      setStatusMessage(response.data.message || 'Message sent successfully!');
      setMessageType('success'); // Set message type to success
    } catch (error) {
      console.error('There was an error sending the message', error);
      setStatusMessage('An error occurred. Please try again later.');
      setMessageType('error'); // Set message type to error
    }
  };

  return (
    <div className="contact-us-form-component-background">
      <div className="contact-us-form-component-container">
        <div id="container">
          <h1>&bull; Contact us &bull;</h1>
          <div className="underline"></div>
          <form onSubmit={handleSubmit} id="contact_form">
            <div className="name">
              <label htmlFor="name"></label>
              <input 
                type="text" 
                placeholder="My name is" 
                name="name" 
                id="name_input" 
                required 
                value={formData.name}
                onChange={handleChange} 
              />
            </div>
            <div className="email">
              <label htmlFor="email"></label>
              <input 
                type="email" 
                placeholder="My e-mail is" 
                name="email" 
                id="email_input" 
                required 
                value={formData.email}
                onChange={handleChange} 
              />
            </div>
            <div className="telephone">
              <label htmlFor="telephone"></label>
              <input 
                type="text" 
                placeholder="My number is" 
                name="telephone" 
                id="telephone_input" 
                required 
                value={formData.telephone}
                onChange={handleChange} 
              />
            </div>
            <div className="subject">
              <label htmlFor="subject"></label>
              <select 
                name="subject" 
                id="subject_input" 
                required
                value={formData.subject}
                onChange={handleChange}
              >
                <option disabled hidden value="">Subject line</option>
                <option>I'd like to start a project</option>
                <option>I'd like to ask a question</option>
                <option>I'd like to make a proposal</option>
              </select>
            </div>
            <div className="message">
              <label htmlFor="message"></label>
              <textarea 
                name="message" 
                placeholder="I'd like to chat about" 
                id="message_input" 
                cols={30} 
                rows={5} 
                required 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="submit">
              <input type="submit" value="Send Message" id="form_button" />
            </div>
          </form>
          
          {statusMessage && (
            <div className={`status-message ${messageType}`}>
              <span className="status-icon">
                {messageType === 'success' ? '✔️' : '❌'}
              </span>
              <p>{statusMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactUsFormComponent;
