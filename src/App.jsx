import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './pages/Home'
import DashboardPage from "./pages/DashboardPage";
import CommAndPayouts from './pages/CommAndPayouts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/payouts" element={<CommAndPayouts />} />
      </Routes>
    </Router>
  )
}

export default App