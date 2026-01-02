import { Home, LayoutDashboard, CreditCard, Settings, LogOut, X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: CreditCard, label: 'Payment Requests', active: false },
    { icon: Settings, label: 'Settings', active: false },
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
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  item.active 
                  ? 'bg-purple-50 text-brand-purple font-medium' 
                  : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </a>
            ))}
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