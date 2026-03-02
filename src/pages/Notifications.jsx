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

          <main className="p-4 md:p-8"></main>
        </div>
    </div>
  )

}

export default Notifications