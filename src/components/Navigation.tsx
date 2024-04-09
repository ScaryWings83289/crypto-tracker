//* Packages Imports */
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="w-[40%] mt-16 flex justify-around align-middle border border-cyan rounded-lg">
    <NavLink
      to="/"
      end
      className={({ isActive }) => {
        return `w-full text-base text-center font-nunito m-2.5  border-0 cursor-pointer rounded capitalize font-bold ${
          isActive
            ? "bg-cyan text-gray-300"
            : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
        }`;
      }}
    >
      Crypto
    </NavLink>
    <NavLink
      to="/trending"
      end
      className={({ isActive }) => {
        return `w-full text-base text-center font-nunito m-2.5  border-0 cursor-pointer rounded capitalize font-bold ${
          isActive
            ? "bg-cyan text-gray-300"
            : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
        }`;
      }}
    >
      Trending
    </NavLink>
    <NavLink
      to="/saved"
      end
      className={({ isActive }) => {
        return `w-full text-base text-center font-nunito m-2.5  border-0 cursor-pointer rounded capitalize font-bold ${
          isActive
            ? "bg-cyan text-gray-300"
            : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
        }`;
      }}
    >
      Saved
    </NavLink>
  </nav>
);

export default Navigation;