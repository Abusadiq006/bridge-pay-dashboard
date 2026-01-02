const FilterTabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
      { id: 'all', label: 'All Requests' },
      { id: 'Completed', label: 'Completed' },
      { id: 'Processing', label: 'Processing' },
      { id: 'Canceled', label: 'Canceled' }
    ];
  
    return (
      <div className="flex items-center border-b border-gray-100 mb-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-medium transition-all relative whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'text-brand-purple' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {/* Active Indicator Line */}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-purple rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default FilterTabs;