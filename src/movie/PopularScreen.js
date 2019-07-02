import React from 'react';

import { usePopularMovies } from '../api/movie';

import SearchBox from '../ui/SearchBox';
import MovieCard from '../ui/MovieCard';

export default function PopularScreen() {
  const [{ pending, error, data }] = usePopularMovies();
  return (
    <>
      <header className="app-header">
        <SearchBox />
      </header>

      <div className="container">
        <div className="row">
          {data.slice(0, 9).map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
