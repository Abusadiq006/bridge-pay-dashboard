import { useState } from "react";
import { SendHorizonal, Search, Phone } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header"

// Mock data for messages
const initialMessages = [
    { id: 1, sender: 'support', text: 'Hello! How can I help You with your BridgePay account today?', time: '10:30 AM'}
]

export default SupportChat