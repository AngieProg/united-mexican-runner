import { Link } from "react-router-dom";
import { flechaRegresar } from "../assets/icons";

const Capi = () => {
  return (
    <div className="h-[100vh] bg-black">
      <div className="flex flex-col items-center justify-evenly bg-bannerCapi bg-cover w-full h-[200px]">
        <h1 className="text-3.5xl text-white font-bree px-7 text-center md:text-[75px]">
          "CAPI" ALBERTO ORTIZ
        </h1>
      </div>
      <p className=" text-justify text-lora text-xl px-10 py-8 text-white">
        Su líder y creador de esta gran familia deportiva Alberto Ortiz, quien
        desde su infancia en sus inicios como corredor en su país natal, México,
        siempre tuvo como pasión el atletismo, en su mente y corazón,
        compitiendo desde la edad de 10 años con muchos sueños y anhelos de
        poder algún día representar a México como atleta. Por falta de factores
        económicos nunca logro serlo, sin embargo emigro a esta gran nación y
        trajo consigo su pasión que nunca salio de su mente, interactuando
        siempre dentro del círculo deportivo, atletismo para ser exactos,
        formando así uno de los grupos más competitivos de toda la historia de
        los equipos, no solamente en New York, si no de toda la unión americana,
        formando potencialmente United Mexican Runners of New York.
      </p>
      {/* Boton regresar */}
      <div className="flex justify-end pr-11">
        <Link to="/united-mexican-runner/">
          <button className="bg-black border-4 border-double text-white p-2">
            <div className="flex gap-5 items-centere justify-between">
              <img
                src={flechaRegresar}
                alt="flecha"
                className="w-[20px] h-[20px]"
              />
              <h2>REGRESAR</h2>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Capi;
