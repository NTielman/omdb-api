import React from 'react';
import Header from './components/Header';
import MovieOverview from './components/MovieOverview';
import MovieModal from './components/MovieModal'
import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const modalIsVisible = useSelector(state => state.modalVisibility);

  return (
    <div className="App">
      <Header />
      <MovieOverview />
      {modalIsVisible ? <MovieModal /> : null}
    </div>
  );
}

export default App;