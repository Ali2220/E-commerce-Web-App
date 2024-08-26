import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-6">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold">E-Commerce Site</h2>
            <p>© 2024 All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              href="#"
              className="hover:text-gray-300 font-semibold "
            >
              Privacy Policy
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              href="#"
              className="hover:text-gray-300 font-semibold"
            >
              Terms of Service
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              href="#"
              className="hover:text-gray-300 font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
