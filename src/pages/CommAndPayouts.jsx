import { useState } from 'react'
import { ArrowDownLeft, ArrowUpRight, DollarSign, Wallet } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const payoutHistory = [
    { id: 'TRX001', date: 'Feb 10, 2026', vendor: 'John Doe', amount: 5000, status: 'Completed' },
]