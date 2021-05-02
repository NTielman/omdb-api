import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import MovieOverview from './components/movieOverview/MovieOverview';
import MovieModal from './components/modal/MovieModal'
import './App.scss';

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