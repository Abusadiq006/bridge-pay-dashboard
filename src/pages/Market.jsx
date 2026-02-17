import { useState } from 'react'
import { Search, Star, MapPin } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

// Mock data for vendors/services
const marketItems = [
    { id: 1, name: 'Crystal Photography', category: 'Photography', rating: 4.8, location: 'Kaduna', price: '$1,200', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400'},
    { id: 2, name: 'Velvet Cakes', category: 'Cakes', rating: 5.0, location: 'Abuja', price: '$350', image: 'https://images.unsplash.com/photo-1557922223-74b5c77742d4?q=80&w=400' },
    { id: 3, name: 'Elegant Events', category: 'Planners', rating: 4.7, location: 'Lagos', price: '$2,500', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61662?q=80&w=400' },
]

const Market = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="flex min-h-screen bg-[#F9FAFB]">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>

            <div className="flex-1 flex flex-col">
                <Header onMenuClick = {() => setIsSidebarOpen(true)} />

                <main className="p-4 md:p-8">
                    <div className="max-w-7xl mx-auto">

                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <h1 className="text-2xl font-bold text-gray-900">Vendor Market</h1>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input 
                                type="text" 
                                placeholder="Search vendors..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-100 outline-none text-sm" 
                            />
                        </div>
                    </div>

                    {/* Grid Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {marketItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                        
                                    </div>
                                </div>
                            </div>    
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Market