import { Bell, Settings, PlusCircle, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ onMenuClick }) => {
  return (
    <header className="h-20 border-b border-gray-100 bg-white px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
      <button 
        onClick={onMenuClick} 
        className="md:hidden p-2 hover:bg-gray-50 rounded-lg text-gray-600"
      >
        <Menu size={24} />
      </button>
        
        <h2 className="text-xl font-semibold hidden md:block">Payment Request History</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Search - Hidden on small mobile, visible on tablet+ */}
        
        {/* Notification Bell */}
        <Link 
          to="/dashboard/notifications" 
          className="p-2.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all relative"
        >
          <Bell size={20} />
          {/* Notification Dot */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </Link>
        
        {/* Settings Icon */}
        <Link 
          to="/dashboard/settings" 
          className="p-2.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all"
        >
          <Settings size={20} />
        </Link>

        {/* Quick Add Request Button */}
        <Link 
          to="/dashboard/add-request" 
          className="hidden sm:flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-purple-100 transition-colors"
        >
          <PlusCircle size={18} />
          <span>New Request</span>
        </Link>

        {/* Divider */}
        <div className="h-8 w-[1px] bg-gray-100 mx-1"></div>
      </div>
    </header>
  );
};

export default Header;