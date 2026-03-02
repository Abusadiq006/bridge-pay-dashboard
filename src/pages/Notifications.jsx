import { useState} from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const initialNotifications = [
  { id: 1, type: 'payment', title: 'Payment Recieved', message: 'You received $500 from Sarah Connor for "Wedding Cake".', time: '2 mins ago', read: false },
]

export default Notifications