import React, { useState, useEffect } from 'react';
import './App.css';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import TabNavigation from './components/TabNavigation';
import AboutTab from './components/AboutTab';
import JourneyTab from './components/JourneyTab';
import PublicationsTab from './components/PublicationsTab';
import PersonalTab from './components/PersonalTab';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutTab />;
      case 'journey':
        return <JourneyTab />;
      case 'publications':
        return <PublicationsTab />;
      case 'personal':
        return <PersonalTab />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <div className="App">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      
      <div className="container">
        <Hero />
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main>
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
