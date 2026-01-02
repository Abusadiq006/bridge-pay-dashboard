import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen font-rethink">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB]">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="p-4 md:p-8 overflow-y-auto">
          {/* We will build the KPI Cards and Table here next */}
          <div className="max-w-7xl mx-auto">
             <h2 className="text-xl font-semibold md:hidden mb-6">Payment Request History</h2>
             <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center text-gray-400 border-dashed">
                Stat Cards and Table Content will go here.
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;