import { Adri, RodolfoGomez, coachCapi } from "../assets/images";
import Button from "../components/Button";

const Entrenadores = () => {
  const Entrenador = ({ img, nombre, funcion }) => (
    <div className="flex flex-col items-center mb-10">
      <img
        src={img}
        alt="coach capi"
        className="w-[200px] h-[200px] object-cover mb-3"
      />
      <h2 className="text-white mb-3 font-bree text-2xl">{nombre}</h2>
      <h3 className="text-white font-lora mb-3">{funcion}</h3>
      <Button label="CONÓCELO" />
    </div>
  );

  return (
    <section className="flex flex-col justify-center items-center bg-black py-8">
      <h1 className="text-3.5xl font-bree text-center text-white uppercase mb-5 md:text-[75px]">
        Conoce a nuestros entrenadores
      </h1>
      <Entrenador img={coachCapi} nombre="Alberto Ortiz" funcion="Head Coach" />
      <Entrenador img={Adri} nombre="Adriana Fernández" funcion="Entrenadora" />
      <Entrenador
        img={RodolfoGomez}
        nombre="Rodolfo Gómez"
        funcion="Entrenador"
      />
    </section>
  );
};

export default Entrenadores;
