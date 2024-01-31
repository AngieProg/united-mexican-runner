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
// import Carousel from "./components/Carousel";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      {/* <Carousel /> */}
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
