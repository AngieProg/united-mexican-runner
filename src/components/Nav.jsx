import { hamburguer, close, logoBlanco } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <header className="px-8 py-3 md:py-5 w-full bg-black">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img
            src={logoBlanco}
            alt="logo"
            width={30}
            height={30}
            className="md:w-[40px] md:h-[40px]"
          />
        </a>
        <ul className="sm:flex flex-1 justify-center items-center sm:gap-16 hidden ">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                smooth={true}
                spy={true}
                duration={500}
                className="font-lora leading-normal md:text-2xl text-lg text-white cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
            /* <li key={index}>
              <a
                href={item.href}
                className="font-lora leading-normal md:text-2xl text-lg text-white"
              >
                {item.label}
              </a>
            </li> */
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toogle ? close : hamburguer}
            alt="menu"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={() => setToogle((prev) => !prev)}
          />

          <div
            className={`${
              toogle ? "flex" : "hidden"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-start flex-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    smooth={true}
                    spy={true}
                    duration={500}
                    className={`font-lora font-normal text-white cursor-pointer text-[16px] ${
                      index === navLinks.length - 1 ? "mr-0" : "mb-4"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
