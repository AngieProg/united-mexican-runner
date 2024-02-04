import {
  Hero,
  Mision,
  Evento,
  Mensaje,
  TeamSection,
  Entrenadores,
  Banner,
  Contacto,
  Galeria,
  Footer,
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
      <Mensaje />
      <Banner />
      <Evento />
      <TeamSection />
      <Galeria />
      <Contacto />
      <Footer />
    </main>
  );
};

export default App;
