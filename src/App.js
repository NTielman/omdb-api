import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieOverview';


function App() {
  const [movieItems, setMovieItems] = useState({
    loadingMovies: false,
    movies: null,
  });

  useEffect(() => {

    setMovieItems({ loadingMovies: true })
    const apiKey = '6907e1c0'
    const apiUrl = `http://www.omdbapi.com/?s=superhero&apikey=${apiKey}`
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search);
        setMovieItems({ loadingMovies: false, movies: data.Search })
      })
      .catch((err) => console.log(err.message));

  }, [setMovieItems]);

  return (
    <div className="App">
      <Header />
      <MovieList isLoading={movieItems.loadingMovies} movies={movieItems.movies} />
    </div>
  );
}

export default App;


