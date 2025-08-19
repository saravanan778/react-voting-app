import React, { createContext, useState, useContext } from "react";

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    Saro: 0,
    sathik: 0,
    santa: 0,
    sudalai: 0,
  });

  const castVote = (candidate) => {
    setVotes((prev) => ({ ...prev, [candidate]: prev[candidate] + 1 }));
  };

  return (
    <VoteContext.Provider value={{ votes, castVote }}>
      {children}
    </VoteContext.Provider>
  );
};

export const useVote = () => useContext(VoteContext);
