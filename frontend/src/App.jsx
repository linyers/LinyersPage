import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBarLeft from "./components/SideBarLeft";
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

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
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
