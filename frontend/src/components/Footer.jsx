import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Bangladeshi Handicrafts</h2>
          <p>Showcasing the finest handicrafts businesses in Bangladesh.</p>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
        <div className="mb-4">
          <p>Contact us: <a href="mailto:info@handicrafts.com" className="hover:underline">info@handicrafts.com</a></p>
          <p>Phone: +880 1234-567890</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-4">&copy; 2024 Bangladeshi Handicrafts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
