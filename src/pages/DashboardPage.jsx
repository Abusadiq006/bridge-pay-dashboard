import { useState } from 'react';
// 1. Import Link from react-router-dom
import { Link, useNavigate } from 'react-router-dom';
import { Wallet, CheckCircle, Clock, XCircle, Search } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import FilterTabs from '../components/FilterTabs';
import TransactionTable from '../components/TransactionTable';

// Import our mock data
import mockData from '../data/mockData.json';

function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Hook for programmatic navigation

  // 1. KPI Stats Data (Updated with navigation paths)
  const stats = [
    {
      title: "TOTAL AMOUNT PROCESSED",
      value: "$15,000 ~NGN 16.32M",
      trend: "12%",
      trendType: "up",
      icon: Wallet,
      iconBg: "bg-gray-100",
      link: "/dashboard/analytics" // Add link to stats
    },
    {
      title: "PAYMENT SUCCESS RATE",
      value: "85%",
      trend: "2.1%",
      trendType: "up",
      icon: CheckCircle,
      iconBg: "bg-gray-100",
      link: "/dashboard/reports"
    },
    {
      title: "AVERAGE PROCESSING TIME",
      value: "2.5h",
      trend: "5%",
      trendType: "down",
      icon: Clock,
      iconBg: "bg-gray-100",
      link: "/dashboard/analytics"
    },
    {
      title: "COMMISSION EARNED",
      value: "$2,000 ~NGN 4.32M",
      trend: "0.4%",
      trendType: "down",
      icon: XCircle,
      iconBg: "bg-gray-100",
      link: "/dashboard/commissions"
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
      
      {/* 2. Pass navigate to Sidebar if needed, or wrap Sidebar items in Links */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* 3. Ensure Header components can navigate */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            
            {/* KPI Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                // 4. Wrap StatCard in a Link
                <Link to={stat.link} key={index} className="block">
                    <StatCard {...stat} />
                </Link>
              ))}
            </div>

            {/* Main Transaction Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6">
              
              {/* Filter Tabs Row */}
              <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />

              {/* Search Bar Row */}
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
                
                {/* 5. Add Link to Action Buttons */}
                <div className="flex gap-2">
                  <Link to="/dashboard/filters" className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Filter</Link>
                  <button onClick={() => window.location.reload()} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Refresh</button>
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