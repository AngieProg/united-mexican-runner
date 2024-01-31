import {
  Hero,
  Mision,
  Evento,
  Mensaje,
  // TeamSection,
  Entrenadores,
  Banner,
  Contacto,
  Galeria,
  Capi,
} from "./sections";

import Team from "./components/Team";

const App = () => {
  return (
    <main>
      <Hero />
      <Mision />
      <Entrenadores />
      <Capi />
      <Mensaje />
      <Banner />
      <Evento />
      <Team />
      <Galeria />
      <Contacto />
      <Mensaje />
    </main>
  );
};

export default App;
