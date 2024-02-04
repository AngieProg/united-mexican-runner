import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Capi from "./sections/Capi.jsx";
import Platinum from "./sections/Platinum.jsx";
import Team from "./components/Team.jsx";
import Entrenadores from "./sections/Entrenadores.jsx";
import Contacto from "./sections/Contacto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/capi" element={<Capi />} />
        <Route path="/united-mexican-runner/platinum" element={<Platinum />} />
        <Route path="/united-mexican-runner/" element={<App />} />
        <Route path="/united-mexican-runner/team" element={<Team />} />
        <Route path="/united-mexican-runner/contacto" element={<Contacto />} />
        <Route
          path="/united-mexican-runner/entrenadores"
          element={<Entrenadores />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
