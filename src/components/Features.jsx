import React from 'react'
import { Zap, PieChart, ShieldCheck } from 'lucide-react'


const features = [
    {
        icon: Zap,
        title: "Instant Vendor Payments",
        description: "Pay wedding vendors instantly with zero delays, ensuring smooth transactrions."
    },
    {
        icon: PieChart,
        title: ""
    }
]

const Features = () => {
    return (
        <div className="bg-[#F9FAFB] py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Everything You Need to Manage Payments
                </h2>

                {/* Carfd Grid - 3 Columns on md and up */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features