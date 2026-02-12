import { useState } from "react";
import { PlusCircle, UploadCloud } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AddRequest = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="flex min-h-screen bg-[#F9FAFB]">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </div>
    )
}

export default AddRequest