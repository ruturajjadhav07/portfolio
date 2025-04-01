import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
