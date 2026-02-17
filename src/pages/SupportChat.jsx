import { useState } from "react";
import { SendHorizonal, Search, Phone } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header"

// Mock data for messages
const initialMessages = [
    { id: 1, sender: 'support', text: 'Hello! How can I help You with your BridgePay account today?', time: '10:30 AM'},
    { id: 2, sender:'user', text: 'I am having trouble with a payout request.', time: '10:32 AM' }, 
    { id: 3, sender: 'support', text: 'I can help with that. What is the Reference ID?', time: '10:33 AM' },
]

const SupportChat = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [messages, setMessages] = useState(initialMessages)
    const [newMessage, setNewMessage] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
        if (newMessage.trim() === '') return

        const newMsgObj = {
            id: messages.length + 1,
            sender: 'user',
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})
        }

        setMessages([...messages, newMsgObj])
        setNewMessage('')
    }
}



export default SupportChat