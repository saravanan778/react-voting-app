import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VotingPage from "./pages/VotingPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <Router>
      <div className="navbar">
        <h2>Voting App</h2>
        <nav>
          <Link to="/">Vote</Link>
          <Link to="/results">Results</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<VotingPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
