import './App.css';
import React, { useState, useEffect } from 'react';

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
      {movieItems.loadingMovies ? 'loading movies' : `${movieItems.movies[0].Title}`}
    </div>
  );
}

export default App;


