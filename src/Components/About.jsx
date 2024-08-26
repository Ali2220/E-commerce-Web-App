import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 flex items-center justify-center">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to our website! We are dedicated to providing the best service
          and products to our customers. Our mission is to ensure customer
          satisfaction through quality and excellence.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our team is made up of skilled professionals with a passion for what
          we do. We constantly strive to improve and innovate, ensuring that we
          stay at the forefront of our industry.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Thank you for choosing us. We look forward to serving you and meeting
          your needs with the utmost care and dedication.
        </p>

        <div className="mt-8 text-center">
          <img
            className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-lg"
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&h=600&fit=crop"
            alt="Team"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
          <p className="text-gray-600 mt-2">
            The driving force behind our success
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
