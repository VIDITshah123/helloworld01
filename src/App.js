import { useState, useEffect } from 'react';
import './App.css';

const DesignCard = ({ title, description, buttonText }) => (
  <div className="design-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <button>{buttonText}</button>
  </div>
);

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

  const cardData = {
    title: 'Design Showcase',
    description: 'This is a demonstration of different design styles applied to the same content.',
    buttonText: 'Explore More'
  };

  return (
    <div className="App">
      <nav className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''}`}>
        <div className="logo">Design<span>Showcase</span></div>
        <div className="nav-links">
          <a href="#neumorphism">Neumorphism</a>
          <a href="#skeuomorphism">Skeuomorphism</a>
          <a href="#bauhaus">Bauhaus</a>
          <a href="#neobrutalism">Neobrutalism</a>
          <a href="#claymorphism">Claymorphism</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
            {heroTexts[currentTextIndex]}
          </h1>
          <p className="hero-subtitle">
            Explore different design styles in one place. Scroll down to see the transformation.
          </p>
        </div>
      </section>

      <section id="design-styles">
        {/* Neumorphism */}
        <div id="neumorphism" className="style-section neumorphism">
          <h2>Neumorphism</h2>
          <div className="design-container">
            <DesignCard {...cardData} />
          </div>
        </div>

        {/* Skeuomorphism */}
        <div id="skeuomorphism" className="style-section skeuomorphism">
          <h2>Skeuomorphism</h2>
          <div className="design-container">
            <DesignCard {...cardData} />
          </div>
        </div>

        {/* Bauhaus */}
        <div id="bauhaus" className="style-section bauhaus">
          <h2>Bauhaus</h2>
          <div className="design-container">
            <DesignCard {...cardData} />
          </div>
        </div>

        {/* Neobrutalism */}
        <div id="neobrutalism" className="style-section neobrutalism">
          <h2>Neobrutalism</h2>
          <div className="design-container">
            <DesignCard {...cardData} />
          </div>
        </div>

        {/* Claymorphism */}
        <div id="claymorphism" className="style-section claymorphism">
          <h2>Claymorphism</h2>
          <div className="design-container">
            <DesignCard {...cardData} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
