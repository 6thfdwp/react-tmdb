import React from "react";
import "./App.css";

import MovieCard from "./MovieCard";

function App() {
  return (
    <div className="app-screen">
      <header className="app-header" />

      {/* <PopularMovies /> */}
      <div className="container">
        <div className="row">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}

export default App;
