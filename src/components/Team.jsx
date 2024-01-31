import { Teams } from "../constants";

const Team = () => {
  return (
    <section className="bg-black text-white ">
      {Teams.map((team, index) => {
        return (
          <div key={index} className="">
            <img
              src={team.image}
              alt={team.nombre}
              className="h-[200px] w-full"
            />
            <h1 className="text-3.5xl font-bree text-center pt-5 pb-3 uppercase">
              {team.nombre}
            </h1>
            <div className="pb-5">
              <ul>
                {team.members.map((member, index) => (
                  <li
                    key={index}
                    className="text-center py-2 text-xl text-lora"
                  >
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Team;
