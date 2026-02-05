import { useState } from 'react';
import { Wallet, CheckCircle, Clock, XCircle, Search } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import FilterTabs from './components/FilterTabs';
import TransactionTable from './components/TransactionTable';

// Import our mock data
import mockData from './data/mockData.json';

function DashboardPage () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 1. KPI Stats Data (Updated with values from your image)
  const stats = [
    {
      title: "TOTAL AMOUNT PROCESSED",
      value: "$15,000 ~NGN 16.32M",
      trend: "12%",
      trendType: "up",
      icon: Wallet,
      iconBg: "bg-gray-100"
    },
    {
      title: "PAYMENT SUCCESS RATE",
      value: "85%",
      trend: "2.1%",
      trendType: "up",
      icon: CheckCircle,
      iconBg: "bg-gray-100"
    },
    {
      title: "AVERAGE PROCESSING TIME",
      value: "2.5h",
      trend: "5%",
      trendType: "down",
      icon: Clock,
      iconBg: "bg-gray-100"
    },
    {
      title: "COMMISSION EARNED",
      value: "$2,000 ~NGN 4.32M",
      trend: "0.4%",
      trendType: "down",
      icon: XCircle,
      iconBg: "bg-gray-100"
    }
  ];

  // 2. Combined Filter & Search Logic
  const filteredData = mockData.filter(item => {
    const matchesTab = activeTab === 'all' || item.status === activeTab;
    const matchesSearch = item.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex min-h-screen font-rethink bg-[#F9FAFB]">
      
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            
            {/* KPI Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Main Transaction Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6">
              
              {/* Filter Tabs Row */}
              <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />

              {/* Search Bar Row (Added here to match assignment pattern) */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search transaction..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-100 outline-none text-sm"
                  />
                </div>
                
                {/* Optional: Filter/Refresh buttons like in your image */}
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Filter</button>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Refresh</button>
                </div>
              </div>
              
              {/* Transaction Table */}
              {filteredData.length > 0 ? (
                <TransactionTable data={filteredData} />
              ) : (
                <div className="py-20 text-center">
                  <p className="text-gray-400">No results found for your search.</p>
                </div>
              )}
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;