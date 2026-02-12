import { useState } from 'react'
import { ArrowDownLeft, ArrowUpRight, DollarSign, Wallet } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const payoutHistory = [
    { id: 'TRX001', date: 'Feb 10, 2026', vendor: 'John Doe', amount: 5000, status: 'Completed' },
    { id: 'TRX002', date: 'Feb 05, 2026', vendor: 'Jane Smith', amount: 3500, status: 'Processing'},
    { id: 'TRX003', date: 'Feb 01, 2026', vendor: 'John Doe', amount: 1200, status: 'Failed' },
]

const CommAndPayouts = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const StatusBadge = ({ status }) => {
        const colors = {
            Complete: 'bg-green-100 text-green-700',
            Processing: 'bg-yellow-100 text-yellow-700',
            Failed: 'bg-red-100 text-red-700',
        }
        return (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
                {status}
            </span>
        )
    }

    return (
        <div className="flex min-h-screen bg-[#F9FAFB]">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            <div className="flex-1 flex flex-col">
                <Header onMenuClick={() => setIsSidebarOpen(true)} />

                <main className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Commission & Payouts</h1>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                            { title: 'Total Earned', value: '$12,500', icon: DollarSign, color: 'text-purple-600' },
                            { title: 'Available Balance', value: '$8,200', icon: Wallet, color: 'text-green-600' },
                            { title: 'Pending Payout', value: '$1,300', icon: ArrowUpRight, color: 'text-yellow-600' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                </div>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Payout Action & History */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Request Payout Card */}
                        <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Request Payout</h2>
                            <p className="text-sm text-gray-600 mb-6">Transfer your available balance to your registered bank account.</p>
                            <div className="bg-purple-50 p-4 rounded-xl mb-6">
                                <p className="text-sm text-purple-700 font-medium">Available to withdraw</p>
                                <p className="text-2xl font-bold text-purple-900">$8,200</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}