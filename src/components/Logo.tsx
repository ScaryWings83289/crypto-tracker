//* Packages Imports */
import { Link } from "react-router-dom";

//* Assets Imports */
import LogoSvg from "@Assets/logo.svg";

const Logo = () => (
  <Link
    to="/"
    className="absolute top-[1.5rem] left-[1.5rem] [text-decoration:none] text-lg text-cyan flex items-center"
  >
    <img src={LogoSvg} alt="cryptobucks" />
    <span>CryptoBucks</span>
  </Link>
);

export default Logo;
