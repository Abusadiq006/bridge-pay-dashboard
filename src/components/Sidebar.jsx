import { Home, LayoutDashboard, CreditCard, Settings, LogOut, X, Plus, Speech, Text } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  // 2. Get current location to highlight the active link
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: CreditCard, label: 'Comm and Payouts', path: '/dashboard/payouts' },
    { icon: Plus, label: 'Add Request', path: '/dashboard/add-request' },
    { icon: Speech, label: 'Market', path: '/dashboard/market' },
    { icon: Text, label: 'Support Chat', path: '/dashboard/support' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:block
      `}>
        <div className="p-6 flex flex-col h-full">
          {/* Brand Logo */}
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-xl font-bold text-brand-purple flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-purple rounded-lg"></div>
              BridgePay
            </h1>
            <button className="md:hidden" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              // 3. Check if current path matches the link path
              const isActive = location.pathname === item.path;
              
              return (
                // 4. Replace <a> with <Link>
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)} // Close sidebar on mobile after clicking
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive 
                      ? 'bg-purple-50 text-purple-600 font-medium' // Updated text-brand-purple to purple-600 for consistency
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <button className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-500 transition-colors mt-auto">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;