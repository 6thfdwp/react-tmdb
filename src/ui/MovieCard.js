import React from 'react';
import { Link } from 'react-router-dom';

import ScoreBadge from './ScoreBadge';
// w185_and_h278_bestv2
// w370_and_h556_bestv2
const IMG_URL_PREFIX = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2';

export default function MovieCard({ movie }) {
  const d = new Date(movie.release_date);
  const formattedDate = `${d.toLocaleString('en-us', { month: 'long' })}, ${d.getFullYear()}`;
  return (
    <div className="col-6 col-md-4 movie-card ">
      <Link to={`/movie/${movie.id}`}>
        <img
          alt="movie cover"
          className="movie-cover-photo"
          src={`${IMG_URL_PREFIX}${movie.poster_path}`}
        />
        <ScoreBadge score={movie.vote_average} />
        <div className="movie-card_info">
          <span>{movie.title}</span>
          <span className="secondary-text">{formattedDate}</span>
        </div>
      </Link>
    </div>
  );
}
