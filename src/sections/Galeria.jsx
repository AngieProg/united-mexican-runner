import { slideData } from "./../constants/index";
import { flechaIzq, flechaDer } from "../assets/icons";
import { useState } from "react";

const Galeria = () => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === slideData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slideData.length - 1 : slide - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-8 bg-black">
      <h1 className="font-bree text-3.5xl text-white uppercase">Galeria</h1>
      <div className="flex justify-center mb-3">
        <div className="flex justify-center w-full h-[400px] relative items-center md:w-[600px] md:h-[600px]">
          <img
            src={flechaIzq}
            alt="flecha izquierda"
            className="absolute w-[30px] h-[30px] left-[20px] cursor-pointer md:w-[50px] md:h-[50px] "
            onClick={prevSlide}
          />
          {slideData.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item.img}
                alt={item.alt}
                className={
                  slide === idx ? "object-cover w-full h-[300px]" : "hidden"
                }
              />
            );
          })}
          <img
            src={flechaDer}
            alt="flecha derecha"
            className="absolute w-[30px] h-[30px] right-[20px] cursor-pointer md:w-[50px] md:h-[50px]"
            onClick={nextSlide}
          />
          <span className="flex absolute bottom-[20px]">
            {slideData.map((_, idx) => {
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

export default Galeria;
