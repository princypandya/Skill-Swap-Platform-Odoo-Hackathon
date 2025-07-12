import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Temporary placeholder components
const Home = () => <div className="p-8 text-xl">Welcome to Home Page</div>;
const Requests = () => <div className="p-8 text-xl">Requests Page</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
