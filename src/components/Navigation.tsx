//* Packages Imports */
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="lg:w-[40%] sm:w-[80%] w-[90%] flex justify-around align-middle lg:mt-16 sm:mt-24 mt-20 border border-solid border-cyan sm:rounded-lg rounded-md">
    <NavLink
      to="/"
      end
      className={({ isActive }) => {
        return `w-full md:text-base text-sm text-center font-nunito sm:m-2.5 m-1.5 border-0 cursor-pointer rounded capitalize font-semibold ${
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
        return `w-full md:text-base text-sm text-center font-nunito sm:m-2.5 m-1.5 border-0 cursor-pointer rounded capitalize font-semibold ${
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
        return `w-full md:text-base text-sm text-center font-nunito sm:m-2.5 m-1.5 border-0 cursor-pointer rounded capitalize font-semibold ${
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
