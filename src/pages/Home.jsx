// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Features from '../components/Features';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Footer';

const Home = () => {
  // We can keep activeView if you want to highlight the button, 
  // but Link will handle the actual navigation.
  const [activeView, setActiveView] = useState('home');

  const handleLogout = () => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('bridgepay_user')

    window.location.href = '/'
  }

 
  // Navigation config to keep code clean
  const navLinks = [
    { name: 'Comm and Payouts', path: '/dashboard/payouts', id: 'payout' },
    { name: 'Add Request', path: '/dashboard/add-request', id: 'request' },
    { name: 'Market', path: '/dashboard/market', id: 'market' },
    { name: 'Support Chat', path: '/dashboard/support', id: 'support' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Basic Navbar */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-purple-600">BridgePay</Link>
            
            {/* Pill Navigation */}
            <div className="bg-gray-100 p-1 rounded-full flex gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setActiveView(link.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeView === link.id
                      ? 'bg-white text-purple-600 shadow'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Logout Button (Usually a simple link to login or home) */}
              <Link
                to="/"
                className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
              >
                LogOut
              </Link>
            </div>
          </div>

          <Link to="/dashboard" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700">
            Go to Dashboard
          </Link>
        </div>
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
          <Link to="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition duration-300 inline-block">
            View Dashboard
          </Link>
          
          <div className="mt-16">
            <Features />
            <TrustSection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;