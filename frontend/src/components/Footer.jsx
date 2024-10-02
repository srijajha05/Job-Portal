import React from 'react';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://twitter.com/hireway" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com/in/hireway" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://facebook.com/hireway" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://instagram.com/hireway" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:contactus@hireway.in" 
            className="hover:text-gray-400"
          >
            <span className="text-sm"><CiMail size={24}/></span>
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} HireWay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
