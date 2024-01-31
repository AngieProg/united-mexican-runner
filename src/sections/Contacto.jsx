import { celular, facebookBlack, gps, instagramBlack } from "../assets/icons";

const Contacto = () => {
  return (
    <section className="px-8 py-10 flex flex-col justify-center items-center">
      <h1 className="font-bree text-3.5xl mb-3">CONTÁCTANOS</h1>
      <p className="mb-5 text-lora text-xl">
        Dejanos un mesaje y nos pondremos en contacto contigo.
      </p>
      <div className="flex flex-col items-start gap-5">
        {/* Facebook */}
        <div className="flex gap-5 items-center justify-center">
          <img src={facebookBlack} alt="facebook" className="w-6 h-6" />
          <h3 className="font-lora text-xl font-bold">Facebook</h3>
        </div>
        {/* Instagram */}
        <div className="flex gap-5 items-center justify-center">
          <img src={instagramBlack} alt="Instagram" className="w-6 h-6" />
          <h3 className="font-lora text-xl font-bold">Instagram</h3>
        </div>
        {/* Dirección
        <div className="flex gap-5 items-center">
          <img src={gps} alt="gps" className="w-6 h-6" />
          <div className="flex flex-col justify-center">
            <h3 className="font-lora text-xl font-bold">Dirección</h3>
            <p className="font-lora text-base">
              405 Lexington Avenue, Planta 44
            </p>
          </div>
        </div>
        Telefono
        <div className="flex justify-start items-center gap-5">
          <img src={celular} alt="gps" className="w-6 h-6" />
          <div className="flex flex-col justify-center items-start">
            <h3 className="font-lora text-xl font-bold">Telefono</h3>
            <p className="font-lora text-base">+1 212-661-4959</p>
          </div>
        </div>
        Email
        <div className="flex justify-start items-center gap-5">
          <img src={celular} alt="gps" className="w-6 h-6" />
          <div className="flex flex-col justify-center items-start">
            <h3 className="font-lora text-xl font-bold">Email</h3>
            <p className="font-lora text-base">unitedmexianrunner@gmail.com</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contacto;
