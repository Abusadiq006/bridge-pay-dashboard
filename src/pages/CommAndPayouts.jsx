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
                
            </div>
        </div>
    )
}