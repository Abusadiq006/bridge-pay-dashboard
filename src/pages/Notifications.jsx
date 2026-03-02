import { useState} from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const initialNotifications = [
  { id: 1, type: 'payment', title: 'Payment Recieved', message: 'You received $500 from Sarah Connor for "Wedding Cake".', time: '2 mins ago', read: false },
  { id: 2, type: 'payout', title: 'Payout Successful', message: 'Your payout of $1,200 has been processed to your bank.', time: '1 hour ago', read: true },
  { id: 3, type: 'system', title: 'Security Alert', message: 'New login detected from a Chrome browser on Mac.', time: '3 hours ago', read: true },
]

const Notifications = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [notifications, setNotifications] = useState(initialNotifications)

  const markAllRead =() => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>

        <div className="flex-1 flex flex-col">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />

          <main className="p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                <button onClick={markAllRead}
                className="text-sm font-semibold text-purple-600 hover:text-purple-700">
                  Mark all as read
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {notifications.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {notifications.map((n) => (
                      <div key={n.id} className={`p-5 flex gap-4 transition-colors ${n.read ? 'bg-white' : 'bg-purple-50/30'}`}>
                        <div className={`p-2 rounded-xl h-fit ${
                        n.type === 'payment' ? 'bg-green-100 text-green-600' : 
                        n.type === 'payout' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {n.type === 'payment' ? <CheckCircle size={20} /> : n.type === 'payout' ? <Clock size={20} /> : <AlertCircle size={20} />}
                      </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
    </div>
  )

}

export default Notifications