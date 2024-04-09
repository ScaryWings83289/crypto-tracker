//* Packages Imports */
import { Outlet } from "react-router-dom";

//* Components Imports */
import Logo from "@Components/Logo";
import Navigation from "@Components/Navigation";

//* Context Imports */
import { CryptoProvider } from "@Context/CryptoContext";

const Home = () => (
  <CryptoProvider>
    <main className="w-full h-full flex flex-col first-letter: content-center items-center relative text-white font-nunito">
      <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
      <Logo />
      <Navigation />
      <Outlet />
    </main>
  </CryptoProvider>
);

export default Home;
