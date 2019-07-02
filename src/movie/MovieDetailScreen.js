import React from 'react';

export default function MovieDetailScreen(props) {
  const movieId = props.match.params.id;
  console.log(movieId);

  return (
    <>
      <header className="app-header">
        <img />
      </header>

      <div className="container" />
    </>
  );
}
