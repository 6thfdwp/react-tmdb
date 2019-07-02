import React from 'react';
// w185_and_h278_bestv2
//w370_and_h556_bestv2

export default function MovieCard({ movie }) {
  const IMG_URL_PREFIX = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2';
  return (
    <div className="col-6 col-md-4 movie-card ">
      <img className="movie-cover-photo" src={`${IMG_URL_PREFIX}${movie.poster_path}`} />
      <div className="movie-card_info">
        <span>{movie.title}</span>
        <span>{movie.release_date}</span>
      </div>
    </div>
  );
}
