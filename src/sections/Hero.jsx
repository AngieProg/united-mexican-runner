import Button from "../components/Button";
import { facebook, instagram } from "./../assets/icons";

const Hero = () => {
  return (
    <section className="bg-hero w-full h-[100vh] bg-cover bg-center flex justify-center items-center flex-col">
      <h1 className="text-3.5xl font-bree bold text-center text-white mb-8 px-5">
        UNITED MEXICAN RUNNER OF NEW YORK
      </h1>
      <Button label="Contáctanos" icon1={facebook} icon2={instagram} />
    </section>
  );
};

export default Hero;
