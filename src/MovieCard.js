import React from "react";

export default function MovieCard() {
  return (
    <div className="col-6 col-md-4 movie-card ">
      <img
        className="movie-cover-photo"
        src="https://image.tmdb.org/t/p/original/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg"
      />
      <div className="movie-card_info">
        <span>Bohemian Rhapsody</span>
        <span>August 2018</span>
      </div>
    </div>
  );
}
