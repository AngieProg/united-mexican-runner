import { Link } from "react-scroll";

const Button = ({ label, icon1, icon2 }) => {
  return (
    <Link to="contacto" smooth={true} spy={true} duration={500}>
      <button className="bg-black border-4 border-double text-white p-2">
        <div className="flex justify-between items-center gap-3">
          <h2 className="font-lora">{label}</h2>
          <div className="flex justify-start gap-3 items-center">
            {icon1 && (
              <img src={icon1} alt="icono 1" className="w-[30px] h-[30px]" />
            )}
            {icon2 && (
              <img src={icon2} alt="icono2" className="w-[30px] h-[30px]" />
            )}
          </div>
        </div>
      </button>
    </Link>
  );
};

export default Button;
