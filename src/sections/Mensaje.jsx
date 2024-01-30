import { lema } from "../assets/images";

const Mensaje = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 py-8">
      <img src={lema} alt="lema" className="w-[90%] h-auto" />
      <p className="text-justify font-lora text-xl mb-3">
        Siempre en nuestro club tenemos mentalidad leal y de admiración hacia
        nuestros compañeros y atletas motivándonos uno al otro calurosamente y
        siempre fuertes.
      </p>
      <h2 className="font-bold font-bree text-xl">- Alberto - </h2>
    </div>
  );
};

export default Mensaje;
