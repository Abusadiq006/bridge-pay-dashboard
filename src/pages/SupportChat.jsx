import { useState } from 'react';
import { SendHorizontal, Search, Phone } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// Mock data for messages
const initialMessages = [
  { id: 1, sender: 'support', text: 'Hello! How can I help you with your BridgePay account today?', time: '10:30 AM' },
  { id: 2, sender: 'user', text: 'I am having trouble with a payout request.', time: '10:32 AM' },
  { id: 3, sender: 'support', text: 'I can help with that. What is the Reference ID?', time: '10:33 AM' },
];

const SupportChat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    const newMsgObj = {
      id: messages.length + 1,
      sender: 'user',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsgObj]);
    setNewMessage('');
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-4 md:p-6 flex-1 flex flex-col">
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            
            {/* Chat Header */}
            <div className="p-4 md:p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h1 className="text-lg font-bold text-gray-900">Support Chat</h1>
                <p className="text-sm text-green-600 font-medium">Online</p>
              </div>
              <button className="flex items-center gap-2 text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-xl hover:bg-purple-100">
                <Phone size={16} />
                Call Support
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gray-50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-md p-4 rounded-2xl text-sm ${
                    message.sender === 'user' 
                      ? 'bg-purple-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-900 rounded-bl-none border border-gray-100'
                  }`}>
                    <p>{message.text}</p>
                    <span className={`text-xs mt-2 block ${message.sender === 'user' ? 'text-purple-200' : 'text-gray-400'}`} >
                        {message.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={sendMessage} className="p-4 md:p-6 border-t border-gray-100 flex gap-4">
              <input 
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              />
              <button >
                
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupportChat;