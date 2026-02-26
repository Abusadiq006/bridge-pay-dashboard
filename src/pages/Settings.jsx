import { useState } from 'react';
import { User, Bell, Lock, CreditCard, Building } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'bank', label: 'Bank Details', icon: Building },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Settings Navigation */}
              <div className="w-full md:w-64 space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-gray-500 hover:bg-white hover:text-purple-600'
                    }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Settings Content Area */}
              <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold border-b pb-4">Profile Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">Full Name</label>
                        <input type="text" defaultValue="John Doe" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-100" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">Email Address</label>
                        <input type="email" defaultValue="john@example.com" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-100" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'bank' && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold border-b pb-4">Payout Settings</h2>
                    <div className="bg-blue-50 p-4 rounded-xl text-blue-700 text-sm mb-4">
                      This is where your funds will be sent via **Paystack/Flutterwave**.
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">Select Bank</label>
                        <select className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-100 bg-white">
                          <option>Access Bank</option>
                          <option>GTBank</option>
                          <option>Zenith Bank</option>
                          <option>Kuda Bank</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">Account Number</label>
                        <input type="text" placeholder="0123456789" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-100" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t flex justify-end">
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;