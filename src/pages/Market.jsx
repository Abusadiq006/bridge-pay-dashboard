import { useState } from 'react'
import { Search, Star, MapPin } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

// Mock data for vendors/services
const marketItems = [
    {id: 1, name: 'Crystal Photography', category: 'Photography', rating: 4.8, location: 'Kaduna', price: '$1,200', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400'},
    { id: 2, name: 'Velvet Cakes', category: 'Cakes', rating: 5.0, location: 'Abuja', price: '$350', image: 'https://images.unsplash.com/photo-1557922223-74b5c77742d4?q=80&w=400' },
    { id: 3, name: 'Elegant Events', category: 'Planners', rating: 4.7, location: 'Lagos', price: '$2,500', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61662?q=80&w=400' },
]

const Market = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="flex min-h-screen bg-[#F9FAFB]">
            
        </div>
    )
}

export default Market