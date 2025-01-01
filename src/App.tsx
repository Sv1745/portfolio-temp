import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Projects />
      <Education />
    </div>
  );
}

export default App;