import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container">
        <Menu />
      </div>
    </div>
  );
}

export default App;