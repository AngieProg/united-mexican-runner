import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="bg-hero w-full h-[100vh] bg-cover bg-center flex justify-center items-center flex-col">
      <h1 className="text-3.5xl font-bree bold text-center text-white mb-8 px-5">
        UNITED MEXICAN RUNNER OF NEW YORK
      </h1>
      <Button label="Contáctanos" />
    </section>
  );
};

export default Hero;
