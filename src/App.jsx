import { useState } from 'react';
import { Wallet, CheckCircle, Clock, XCircle } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import FilterTabs from './components/FilterTabs';
import TransactionTable from './components/TransactionTable';

// Importing the mock data we created earlier
import mockData from './data/mockData.json';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // 1. KPI Stats Data
  const stats = [
    {
      title: "Total Amount",
      value: "$8,250,864.02",
      trend: "12%",
      trendType: "up",
      icon: Wallet,
      iconBg: "bg-blue-50"
    },
    {
      title: "Success Rate",
      value: "92.4%",
      trend: "2.1%",
      trendType: "up",
      icon: CheckCircle,
      iconBg: "bg-green-50"
    },
    {
      title: "Pending Requests",
      value: "18",
      trend: "5%",
      trendType: "down",
      icon: Clock,
      iconBg: "bg-orange-50"
    },
    {
      title: "Failed Transactions",
      value: "1,204",
      trend: "0.4%",
      trendType: "down",
      icon: XCircle,
      iconBg: "bg-red-50"
    }
  ];

  // 2. Filter Logic
  // This filters the imported JSON data whenever the activeTab changes
  const filteredData = activeTab === 'all' 
    ? mockData 
    : mockData.filter(item => item.status === activeTab);

  return (
    <div className="flex min-h-screen font-rethink bg-[#F9FAFB]">
      {/* Sidebar - Handles its own mobile/desktop visibility via props */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header - Receives the function to open the sidebar on mobile */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Page Title (Only visible on mobile as it's in the header on desktop) */}
            <h2 className="text-xl font-semibold md:hidden mb-6 text-slate-900">
              Payment Request History
            </h2>
            
            {/* KPI Stats Grid - Responsive 1, 2, or 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Main Transaction Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6">
              
              {/* Filter Navigation */}
              <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              
              {/* Conditional Rendering: Table or Empty State */}
              {filteredData.length > 0 ? (
                <TransactionTable data={filteredData} />
              ) : (
                <div className="py-20 text-center">
                  <p className="text-gray-400">No transactions found for "{activeTab}".</p>
                </div>
              )}
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;