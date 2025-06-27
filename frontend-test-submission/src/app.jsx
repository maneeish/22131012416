import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShortenerPage from "./pages/ShortenerPage";
import StatsPage from "./pages/StatsPage";
import RedirectPage from "./pages/RedirectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:code" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
