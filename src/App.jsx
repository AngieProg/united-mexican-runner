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
  HeroSlider,
} from "./sections";

import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <main>
      <Nav />
      <HeroSlider />
      {/* <Hero /> */}
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
