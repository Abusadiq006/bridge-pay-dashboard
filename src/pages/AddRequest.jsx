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
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AddRequest