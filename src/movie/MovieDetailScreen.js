import React from 'react';

import { useMovieDetail } from '../api/movie';

const IMG_URL_PREFIX = 'https://image.tmdb.org/t/p';

function MovieHead({ movie }) {
  const runhour = `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`;
  return (
    <div className="movie-detail_container">
      <img
        className="movie-cover-photo_small"
        src={`${IMG_URL_PREFIX}/w185_and_h278_bestv2/${movie.poster_path}`}
      />
      <div className="movie-detail_info">
        <h2 className="title-text movie-detail_title">{movie.title}</h2>
        <div className="secondary-text movie-detail_meta">
          <span>
            {movie.release_date.split('-')[0]} • {`${movie.vote_average * 10}%`} user score
          </span>
          <div>{runhour}</div>
        </div>
      </div>
    </div>
  );
}

const goBack = history => {
  if (history.length > 1) {
    history.goBack();
  } else {
    // when directly open the detail page
    history.replace({ path: '/' });
  }
};
export default function MovieDetailScreen(props) {
  const movieId = props.match.params.id;
  // const movie = props.movie;
  const [{ pending, error, movie }] = useMovieDetail(movieId);
  if (!movie) {
    return null;
  }

  return (
    <>
      <header className="movie-detail_header">
        <button onClick={() => goBack(props.history)}>
          <i className="fa fa-arrow-left" />
        </button>
        <img
          className="movie-backdrop-photo"
          src={`${IMG_URL_PREFIX}/original/${movie.backdrop_path}`}
        />
      </header>

      <div className="container">
        <MovieHead movie={movie} />
        <hr className="separator" />

        <div className="movie-detail_overview">
          <h3 className="title-text" style={{ color: '#fff', paddingBottom: 15 }}>
            Overview
          </h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </>
  );
}
