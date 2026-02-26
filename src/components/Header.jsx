import { Bell, Settings, PlusCircle, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ onMenuClick }) => {
  return (
    <header className="h-20 border-b border-gray-100 bg-white px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button onClick={onMenuClick} className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
          <Menu size={24} />
        </button>
        
        <h2 className="text-xl font-semibold hidden md:block">Payment Request History</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Search - Hidden on small mobile, visible on tablet+ */}
        
        <button className="p-2 text-gray-400 hover:text-gray-600 relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <button className="p-2 text-gray-400 hover:text-gray-600 relative">
          <Settings size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></span>
        </button>

        <button className="bg-brand-purple text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-purple-700 transition-all shadow-sm shadow-purple-200">
          + Add Payment Request
        </button>
      </div>
    </header>
  );
};

export default Header;