import React, { useEffect, useState } from "react";

function ResultsPage() {
  const [votes, setVotes] = useState({});

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("votes")) || {};
    setVotes(storedVotes);
  }, []);

  const leading = Object.keys(votes).reduce((a, b) =>
    votes[a] > votes[b] ? a : b, ""
  );

  return (
    <div className="container">
      <h1>Results</h1>
      <h2>Leading Candidate: {leading}</h2>
      <div className="bar-graph">
        {Object.keys(votes).map((name) => (
          <div key={name} className="bar">
            <span>{name}</span>
            <div className="bar-fill" style={{ width: `${votes[name] * 30}px` }}>
              {votes[name]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;
