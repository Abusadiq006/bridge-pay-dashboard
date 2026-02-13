import { useState } from "react";
import { PlusCircle, UploadCloud } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AddRequest = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="flex min-h-screen bg-[#F9FAFB]">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            <div className="flex-1 flex flex-col">
                <Header onMenuClick={() => setIsSidebarOpen(true)} />

                <main className="p-4 md:p-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Payment Request</h1>

                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <form className="space-y-6">

                                {/* Client Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                                        <input type="email" placeholder="example@gmail.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-100 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Client Email</label>
                                        <input type="email" placeholder="example@gmail.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-100 outline-none" />
                                    </div>
                                    <div>
                                        
                                        {/* Amount & Description */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Amount (USD)</label>
                                            <input type="number" placeholder="0.00" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-100 outline-none" />
                                        </div>

                                        {/* File Upload */}
                                        <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Attach Invoice (Optional)</label>
                                            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-purple-300 transition-colors cursor-pointer">
                                            <UploadCloud className="mx-auto h-10 w-10 text-gray-400" />
                                            <p className="mt-2 text-sm text-gray-600">Drag & drop files or click to upload</p>
                                            <p className="text-xs text-gray-400">PDF, JPG, PNG up to 5MB</p>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="flex justify-end pt-4">
                                            <button type="submit" className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
                                                <PlusCircle size={20} />
                                                Create Request
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AddRequest