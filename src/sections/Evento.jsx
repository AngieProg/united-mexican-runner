import { eventos } from "./../constants/index";
import { useState } from "react";

const Evento = () => {
  const [slide, setSlide] = useState(0);
  // const nextSlide = () => {
  //   setSlide(slide === eventos.length - 1 ? 0 : slide + 1);
  // };

  // const prevSlide = () => {
  //   setSlide(slide === 0 ? eventos.length - 1 : slide - 1);
  // };

  return (
    <div className="flex flex-col justify-center items-center bg-black pt-8">
      <h1 className="font-bree text-3.5xl text-white uppercase">
        Principales Eventos
      </h1>
      <div className="flex justify-center mb-5">
        <div className="flex justify-center w-full h-[200px] relative items-center md:w-[600px] md:h-[600px]">
          {eventos.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item.img}
                alt={item.alt}
                className={
                  slide === idx
                    ? "border-2 border-black rounded-lg object-cover w-full h-[130px]"
                    : "hidden"
                }
              />
            );
          })}
          <span className="flex absolute bottom-[20px]">
            {eventos.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={
                    slide === idx
                      ? "bg-red-500 w-[8px] h-[8px] rounded-full border-none outline-none mx-2 cursor-pointer"
                      : "w-[8px] h-[8px] rounded-full border-none outline-none mx-2 cursor-pointer bg-white"
                  }
                ></button>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Evento;
