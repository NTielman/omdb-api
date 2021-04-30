import './App.css';
import React from 'react';
import Header from './components/Header';
import MovieOverview from './components/MovieOverview';
import MovieDetail from './components/MovieDetail'
import { useSelector } from 'react-redux';

function App() {

  const modalIsVisible = useSelector(state => state.modal);

  return (
    <div className="App">
      <Header />
      <MovieOverview />
      {modalIsVisible ? <MovieDetail /> : null}
    </div>
  );
}

export default App;