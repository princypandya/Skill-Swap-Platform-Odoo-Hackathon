import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future: Add routes for Profile, Swap Request, etc. */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
