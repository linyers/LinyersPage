import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBarLeft from "./components/SideBarLeft";
import HomePage from './pages/HomePage'
import ProyectsPage from './pages/ProyectsPage'

function App() {

  return (
    <div>
      <Router>
        <div className="flex">
          <div className="w-1/6">
            <SideBarLeft />
          </div>
          <div className="w-5/6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/proyects" element={<ProyectsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
