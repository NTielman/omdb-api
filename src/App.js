import './App.css';
import React from 'react';
import Header from './components/Header';
import MovieOverview from './components/MovieOverview';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieOverview />
    </div>
  );
}

export default App;