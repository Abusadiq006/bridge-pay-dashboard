// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Features from '../components/Features';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Footer';

const Home = () => {
  const [activeView, setActiveView] = useState('payout')
  return (
    <div className="min-h-screen bg-white">
      {/* Basic Navbar */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-600">BridgePay
            <div className="bg-gray-100 p-1 rounded-full flex gap-1">
              <button
              onClick={() => setActiveView('payout')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeView === 'payout'
                ? 'bg-white text-purple-600 shadow'
                : 'text-gray-600 hover:text-gray-900'
              }`}
              >
                Comm and Payouts</button>
            </div>
          </div>
          <Link to="/dashboard" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700">
            Go to Dashboard
          </Link>
        </div>
        <Features />
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Secure Payments for <br /> 
          <span className="text-purple-600">The Modern Bride</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Manage wedding vendor payments, track budgets, and ensure secure 
          transactions all in one place with BridgePay.
        </p>
        <div className="mt-10">
          <Link to="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
            View Dashboard
          </Link>
          <TrustSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;