import { Search, Bell, Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between px-4 py-4 md:px-8 bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button onClick={onMenuClick} className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
          <Menu size={24} />
        </button>
        
        <h2 className="text-xl font-semibold hidden md:block">Payment Request History</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Search - Hidden on small mobile, visible on tablet+ */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-purple-200 outline-none w-64"
          />
        </div>

        <button className="p-2 text-gray-400 hover:text-gray-600 relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <button className="bg-brand-purple text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-purple-700 transition-all shadow-sm shadow-purple-200">
          + Add Payment Request
        </button>
      </div>
    </header>
  );
};

export default Header;