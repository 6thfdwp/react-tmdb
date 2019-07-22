import React from 'react';

import { usePopularMovies } from '../api/movie';

import SearchBox from '../ui/SearchBox';
import MovieCard from '../ui/MovieCard';

export default function PopularScreen() {
  const [{ pending, error, data }] = usePopularMovies();
  console.log(`[PopularScreen] get`);
  return (
    <>
      <header className="app-header">
        <SearchBox />
      </header>

      <div className="container">
        <h3 className="title-text">Popular Movies</h3>
        <div className="row">
          {data.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
