"use client";
import React, { useState } from "react";

const ContactUsFormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5041/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setDialogMessage("Thank you for contacting us!");
        setFormData({
          name: "",
          email: "",
          telephone: "",
          subject: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setDialogMessage(`Error: ${errorData.message || "Something went wrong."}`);
      }
    } catch (error) {
      setDialogMessage("An error occurred while submitting the form.");
    }

    setShowDialog(true);
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
            <input
              type="text"
              name="name"
              placeholder="My name is"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="My e-mail is"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              name="telephone"
              placeholder="My number is"
              required
              value={formData.telephone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <select
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option disabled hidden value="">
                Subject line
              </option>
              <option>I&apos;d like to start a project</option>
              <option>I&apos;d like to ask a question</option>
              <option>I&apos;d like to make a proposal</option>
            </select>
            <textarea
              name="message"
              placeholder="I&apos;d like to chat about"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Send Message
          </button>
        </form>

        {showDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
              <span className="text-4xl" role="img" aria-label="status">
                {dialogMessage.startsWith("Thank") ? "😊" : "😟"}
              </span>
              <h2 className="mt-4 text-lg font-semibold">{dialogMessage}</h2>
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
