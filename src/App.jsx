import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './pages/Home'
import DashboardPage from "./pages/DashboardPage";
import CommAndPayouts from './pages/CommAndPayouts';
import AddRequest from "./pages/AddRequest";
import Market from "./pages/Market";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/payouts" element={<CommAndPayouts />} />
        <Route path="/dashboard/add-request" element={<AddRequest />} />
        <Route path="/dashboard/market" element={<Market />} />
      </Routes>
    </Router>
  )
}

export default App