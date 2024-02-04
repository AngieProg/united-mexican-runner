import { Adri, RodolfoGomez, coachCapi } from "../assets/images";
import { Link } from "react-router-dom";
import { flecha } from "../assets/icons";

const Entrenadores = () => {
  const Entrenador = ({ img, nombre, funcion, subfuncion, label }) => (
    <div className="flex flex-col items-center mb-10">
      <img
        src={img}
        alt="coach capi"
        className="w-[200px] h-[200px] object-cover mb-3"
      />
      <h2 className="text-white mb-1 font-bree text-2xl">{nombre}</h2>
      <h3 className="text-white font-lora">{funcion}</h3>
      {subfuncion && (
        <h3 className="text-white font-lora mb-3">{subfuncion}</h3>
      )}
      {/* {label && <Button label={label} icon1={flecha} />} */}
      {/* {label ? (
        <Link to="/capi" className="text-white bg-pink-700">
          <Button label={label} icon1={flecha} />
        </Link>
      ) : null} */}
      {label && (
        <Link to="/capi">
          <button className="bg-black border-4 border-double text-white p-2">
            <div className="flex gap-5 items-centere justify-between">
              <h2>CONÓCELO</h2>
              <img src={flecha} alt="flecha" className="w-[20px] h-[20px]" />
            </div>
          </button>
        </Link>
      )}
    </div>
  );

  return (
    <section
      className="flex flex-col justify-center items-center bg-black py-8"
      id="entrenadores"
    >
      <h1 className="text-3.5xl font-bree text-center px-10 text-white uppercase mb-5 md:text-[75px]">
        Nuestros Entrenadores
      </h1>
      <Entrenador
        img={coachCapi}
        nombre="Alberto Ortiz"
        funcion="Head Coach"
        subfuncion="(Lider)"
        label="CONÓCELO"
      />
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
