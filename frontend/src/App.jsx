import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBarLeft from "./components/SideBarLeft";
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import PostPage from './pages/PostPage'
import CategoryPage from './pages/CategoryPage'
import './App.css'

function App() {

  return (
    <div className="app">
      <Router>
        <div className="flex-container">
            <SideBarLeft />
          <div className="content min-h-screen bg-bg-image bg-fixed bg-cover">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<PostPage />} />
              <Route path="/blog/category/:name" element={<CategoryPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
