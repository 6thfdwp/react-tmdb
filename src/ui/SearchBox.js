import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSearchMovies } from '../api/movie';

function ResultItemLink({ hit }) {
  return (
    <Link to={`/movie/${hit.id}`}>
      <div style={{ display: 'flex' }}>
        <i className="fa fa-film" />
        <li>{hit.title}</li>
      </div>
    </Link>
  );
}
export default function SearchBox() {
  const [queryName, setQueryName] = useState('');
  const [{ pending: searchPending, error: searchError, hits }] = useSearchMovies(queryName);
  const renderList = hits => {
    if (!hits.length) return null;
    return (
      <div className="search-box_result">
        <ul className="search-box_result_list">
          {hits.map(hit => (
            <ResultItemLink key={hit.id} hit={hit} />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="search-box">
      <input
        className="search-input"
        placeholder="Search"
        value={queryName}
        onChange={e => setQueryName(e.target.value)}
      />
      <button className="search-box_icon">
        <i className="fa fa-search" style={{ fontSize: 18 }} />
      </button>
      {/* {searchPending && <span style={{ color: 'white' }}>Searching...</span>} */}
      {renderList(hits)}
    </div>
  );
}
