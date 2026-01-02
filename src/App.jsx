import { useState } from 'react'
import { Wallet, CheckCircle, Clock, XCircle } from 'lucide-react'; // Import icons
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard'; // Import the new component

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    {
      title: "Total Amount",
      value: "₦4,250,000.00",
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

  return (
    <div className="flex min-h-screen font-rethink">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB]">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-semibold md:hidden mb-6">Payment Request History</h2>
            
            {/* KPI Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Table Section placeholder */}
            <div className="bg-white rounded-2xl border border-gray-100 min-h-[400px]">
               {/* Next step: Table logic goes here */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;