import { facebook, instagram } from "../assets/icons";

const Banner = () => {
  return (
    <section>
      {/* Primer banner  */}
      <div className="">
        <div className="flex items-center justify-evenly bg-bannerFuerza bg-cover w-full h-[250px]">
          <h1 className="text-3.5xl text-white uppercase font-bree md:text-[75px]">
            Fortalecimiento
          </h1>
        </div>
      </div>

      {/* Segundo banner  */}
      <div className="">
        <div className="flex items-center justify-evenly bg-bannerNutricion bg-cover w-full h-[250px]">
          <h1 className="text-3.5xl text-white uppercase font-bree md:text-[75px]">
            Nutricion
          </h1>
        </div>
      </div>

      {/* Tercer banner  */}
      <div className="">
        <div className="flex flex-col items-center justify-evenly bg-bannerContacto bg-cover w-full h-[250px]">
          <h1 className="text-3.5xl text-white uppercase font-bree md:text-[75px]">
            Contacto
            <div className="flex gap-5 justify-center items-center mt-2">
              <img
                src={facebook}
                alt="facebook"
                className="w-[30px] h-[30px]"
              />
              <img
                src={instagram}
                alt="instagram"
                className="w-[30px] h-[30px]"
              />
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
