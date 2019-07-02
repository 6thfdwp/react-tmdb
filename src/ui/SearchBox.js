import React, { useState } from 'react';

import { useSearchMovies } from '../api/movie';

export default function SearchBox() {
  const [queryName, setQueryName] = useState('');
  const [{ pending: searchPending, error: searchError, hits }] = useSearchMovies(queryName);
  const renderList = hits => {
    if (!hits.length) return null;
    return (
      <div className="search-box_result">
        <ul className="search-box_result_list">
          {hits.map(hit => (
            <li key={hit.id}>{hit.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="search-box">
      <input
        className="search-input"
        value={queryName}
        onChange={e => setQueryName(e.target.value)}
      />
      {searchPending && <span style={{ color: 'white' }}>Searching...</span>}
      {renderList(hits)}
    </div>
  );
}
