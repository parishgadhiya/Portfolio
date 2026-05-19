import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        {/* We can use simple scrolling for a one-page portfolio, or routing if multiple pages are requested. 
            The instructions imply a single page portfolio with sections. I'll render them all on the home page. */}
        <Routes>
          <Route path="/" element={
            <>
              <div id="home"><Hero /></div>
              <div id="about"><About /></div>
              <div id="skills"><Skills /></div>
              <div id="projects"><Projects /></div>
              <div id="resume"><Resume /></div>
              <div id="contact"><Contact /></div>
            </>
          } />
        </Routes>
        
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
