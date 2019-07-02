import React from 'react';

const HIGH_VOTE = '#00d573'; // '#204529';
const MEDIUM_VOTE = '#5E35B1'; //512DA8 311B92
const LOW_VOTE = '#C51162';

export default function ScoreBadge({ score }) {
  let color = LOW_VOTE;
  if (score >= 8.0) {
    color = HIGH_VOTE;
  } else if (score >= 4.0) {
    color = MEDIUM_VOTE;
  }

  return (
    <div className="movie-card_score" style={{ backgroundColor: color }}>
      <span>{`${score * 10}%`}</span>
    </div>
  );
}
