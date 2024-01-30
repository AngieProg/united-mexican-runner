import { facebook, instagram } from "../assets/icons";

const Button = ({ label }) => {
  return (
    <button className="bg-black border-4 border-double text-white p-2">
      <div className="flex justify-between items-center gap-3">
        <h2 className="font-lora">{label}</h2>
        <div className="flex justify-start gap-3 items-center">
          <img src={facebook} alt="facebook" className="w-[30px] h-[30px]" />
          <img src={instagram} alt="intagram" className="w-[30px] h-[30px]" />
        </div>
      </div>
    </button>
  );
};

export default Button;
