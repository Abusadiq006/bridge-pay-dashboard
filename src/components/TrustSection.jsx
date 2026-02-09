// src/components/TrustSection.jsx
import React from 'react';
import { ShieldCheck, Lock, Users } from 'lucide-react';

const TrustSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Your Security is Our Top Priority
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          BridgePay uses bank-grade security to ensure your transactions are safe and your data is protected.
        </p>

        {/* Security Feature Grid */}
     

        {/* Partner Logos Section - Placeholder */}
        <div className="border-t border-gray-100 pt-16">
          <p className="text-gray-400 mb-8">Trusted by secure payment partners</p>
          <div className="flex justify-center items-center gap-12 text-gray-300 font-bold text-2xl">
            {/* Replace these divs with actual SVG logos */}
            <div className='bg-gray-100 px-6 py-3 rounded'>Paystack</div>
            <div className='bg-gray-100 px-6 py-3 rounded'>Flutterwave</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;