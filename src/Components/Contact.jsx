import React, { useRef } from 'react';

const Contact = () => {
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    name.current.value = '';
    email.current.value = '';
    message.current.value = '';
    alert('Thank you for your message. We will get back to you shortly!');
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              ref={name}
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              ref={email}
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              ref={message}
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
