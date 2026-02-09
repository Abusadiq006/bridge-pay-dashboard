// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-1">
          <div className="text-2xl font-bold text-white mb-4">BridgePay</div>
          <p className="text-sm text-gray-400">
            Secure payments for the modern bride. Managing wedding finances made simple.
          </p>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;