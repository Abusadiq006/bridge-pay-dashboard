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