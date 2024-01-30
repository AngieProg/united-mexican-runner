import { Teams } from "../constants";

const Team = () => {
  return (
    <div className="bg-black text-white pt-8">
      {Teams.map((team, index) => {
        return (
          <div key={index} className="px-5">
            <img
              src={team.image}
              alt={team.nombre}
              className="h-[250px] w-full"
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
    </div>
  );
};

export default Team;
