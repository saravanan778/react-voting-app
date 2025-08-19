import React, { useState } from "react";

function VotingPage() {
  const [votes, setVotes] = useState({ saro: 0, santa: 0, sudalai: 0, sathik: 0 });

  const castVote = (name) => {
    setVotes({ ...votes, [name]: votes[name] + 1 });
    localStorage.setItem("votes", JSON.stringify({ ...votes, [name]: votes[name] + 1 }));
  };

  return (
    <div className="container">
      <h1>Vote for Your Candidate</h1>
      <div className="card-container">
        {Object.keys(votes).map((name) => (
          <div key={name} className="card">
            <h3>{name}</h3>
            <button onClick={() => castVote(name)}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VotingPage;
