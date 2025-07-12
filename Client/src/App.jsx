import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Requests from "./pages/Requests";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-20 px-4 min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/requests" element={<Requests />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
