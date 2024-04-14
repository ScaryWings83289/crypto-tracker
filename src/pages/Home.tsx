//* Packages Imports */
import { Outlet } from "react-router-dom";

//* Components Imports */
import Logo from "@Components/Logo";
import Navigation from "@Components/Navigation";

//* Context Imports */
import { CryptoProvider } from "@Context/CryptoContext";
import { TrendingProvider } from "@Context/TrendingContext";
import { StorageProvider } from "@Context/StorageContext";

const Home = () => (
  <CryptoProvider>
    <TrendingProvider>
      <StorageProvider>
        <main className=" w-full h-full flex flex-col content-center items-center relative text-white font-nunito">
          <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
          <Logo />
          <Navigation />
          <Outlet />
        </main>
      </StorageProvider>
    </TrendingProvider>
  </CryptoProvider>
);

export default Home;
