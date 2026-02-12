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

    
}