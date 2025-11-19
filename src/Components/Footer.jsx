import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / About Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">ToyLand</h2>
          <p className="text-sm text-gray-600">
            Your child’s happiness is our joy. We bring you the best toys at affordable prices.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/" className="hover:text-blue-600 transition">Terms & Conditions</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-600 transition">Privacy Policy</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-600 transition">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Follow Us</h3>
          <div className="flex space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 text-2xl"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 text-2xl"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 text-2xl"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-600 text-2xl"><FaYoutube /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ToyLand. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
