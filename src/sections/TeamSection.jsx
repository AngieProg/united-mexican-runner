import { Link } from "react-router-dom";
import { flecha } from "../assets/icons";
import { Teams } from "../constants";

const TeamSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-center bg-black py-8"
      id="team"
    >
      <h1 className="text-3.5xl font-bree text-center px-10 text-white uppercase mb-5 md:text-[75px]">
        Nuestros Equipo
      </h1>
      <div className="flex flex-col items-center mb-10">
        {Teams.map((team, index) => {
          return (
            <div key={index} className="py-5">
              <img
                src={team.image}
                alt="platinum team"
                className="w-[400px] h-[200px] object-cover mb-3"
              />
              <h2 className="text-white mb-1 pt-3 font-bree text-center text-2xl">
                {team.nombre}
              </h2>
            </div>
          );
        })}
        <Link to="/united-mexican-runner/team">
          <button className="bg-black border-4 border-double text-white p-2">
            <div className="flex gap-5 items-centere justify-between">
              <h2>CONÓCELOS</h2>
              <img src={flecha} alt="flecha" className="w-[20px] h-[20px]" />
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TeamSection;
