import { MoreVertical, ArrowDownLeft, ArrowUpRight } from 'lucide-react';

const TransactionTable = ({ data }) => {
  // Status Badge Styling Logic
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-50 text-green-700 border-green-100';
      case 'Processing': return 'bg-orange-50 text-orange-700 border-orange-100';
      case 'Canceled': return 'bg-red-50 text-red-700 border-red-100';
      default: return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  return (
    <div className="w-full">
      {/* DESKTOP TABLE VIEW (Visible on md and up) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-sm uppercase tracking-wider border-b border-gray-50">
              <th className="py-4 font-medium">Customer</th>
              <th className="py-4 font-medium">Amount</th>
              <th className="py-4 font-medium">Date</th>
              <th className="py-4 font-medium">Status</th>
              <th className="py-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-purple font-bold">
                      {item.customer.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.customer}</p>
                      <p className="text-xs text-gray-500">{item.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    {item.type === 'Inward' ? 
                      <ArrowDownLeft size={16} className="text-green-500" /> : 
                      <ArrowUpRight size={16} className="text-brand-purple" />
                    }
                    <span className="font-medium text-slate-900">{item.amount}</span>
                  </div>
                </td>
                <td className="py-4 text-gray-600 text-sm">{item.date}</td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyles(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW (Visible on small screens) */}
      <div className="md:hidden space-y-4">
        {data.map((item) => (
          <div key={item.id} className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-brand-purple font-bold">
                  {item.customer.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{item.customer}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${getStatusStyles(item.status)}`}>
                {item.status}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400 uppercase font-semibold">Amount</p>
                <p className="font-bold text-lg text-slate-900">{item.amount}</p>
              </div>
              <button className="bg-gray-50 p-2 rounded-lg text-gray-500">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionTable;