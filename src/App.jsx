import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutPage';
import Projects from './pages/ProjectsPage';
import Header from './Components/Header/Header';
import './App.css';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';

function App() {
  return (
    <Router>
      <div className="app gaming-theme">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;