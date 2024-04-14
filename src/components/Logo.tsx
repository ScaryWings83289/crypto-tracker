//* Packages Imports */
import { Link } from "react-router-dom";

//* Assets Imports */
import LogoSvg from "@Assets/logo.svg";

const Logo = () => (
  <Link
    to="/"
    className="absolute sm:top-[1.5rem] top-[1rem] sm:left-[1.5rem] left-[1rem] [text-decoration:none] text-cyan cursor-pointer flex items-center sm:text-lg text-md"
  >
    <img className="w-[25%] h-auto" src={LogoSvg} alt="cryptobucks" />
    <span>CryptoBucks</span>
  </Link>
);

export default Logo;
