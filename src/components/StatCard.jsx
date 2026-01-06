import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, trend, trendType, icon: Icon, iconBg }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${iconBg}`}>
          <Icon className="text-gray-600" size={20} />
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          trendType === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
        }`}>
          {trendType === 'up' ? '↗' : '↘'} {trend}
        </span>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;