import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wallet, CheckCircle, Clock, XCircle, Search } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import FilterTabs from '../components/FilterTabs';
import TransactionTable from '../components/TransactionTable';
import axios from 'axios';

// Import our mock data
import mockData from '../data/mockData.json';

const DashboardPage = () => { // Fixed name
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      
      // If no token exists, redirect to login immediately
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        // If token is invalid/expired, clear it and redirect
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  // KPI Stats Data
  const stats = [
    {
      title: "TOTAL AMOUNT PROCESSED",
      value: "$15,000 ~NGN 16.32M",
      trend: "12%",
      trendType: "up",
      icon: Wallet,
      iconBg: "bg-gray-100",
      link: "/dashboard/analytics"
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

  const filteredData = mockData.filter(item => {
    const matchesTab = activeTab === 'all' || item.status === activeTab;
    const matchesSearch = item.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen font-rethink bg-[#F9FAFB]">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Pass user data to Header to show profile pic or name */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} user={user} />
        
        <main className="p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.email.split('@')[0]}</h1>
              <p className="text-gray-500 text-sm">Here is what's happening with BridgePay today.</p>
            </div>

            {/* KPI Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Link to={stat.link} key={index} className="block transition-transform active:scale-95">
                  <StatCard {...stat} />
                </Link>
              ))}
            </div>

            {/* Main Transaction Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6">
              <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />

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
                
                <div className="flex gap-2">
                  <Link to="/dashboard/filters" className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Filter</Link>
                  <button onClick={() => window.location.reload()} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Refresh</button>
                </div>
              </div>
              
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