import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroTexts = ["Adventure Awaits", "Unleash Your Potential", "Be The Hero"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(textInterval);
    };
  }, [heroTexts.length]);

  return (
    <div className="App">
      <nav className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''}`}>
        <div className="logo">Hero<span>Quest</span></div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
            {heroTexts[currentTextIndex]}
          </h1>
          <p className="hero-subtitle">
            Join thousands of heroes on an epic journey to greatness. Your adventure starts here.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Begin Your Journey</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-shape"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
