import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutPage';
import Projects from './pages/ProjectsPage';
import Header from './components/Header/Header';
import './app.css';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="app gaming-theme">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
             <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;