import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Capi from "./sections/Capi.jsx";
import Platinum from "./sections/Platinum.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/capi" element={<Capi />} />
        <Route path="/united-mexican-runner/platinum" element={<Platinum />} />
        <Route path="/united-mexican-runner/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
