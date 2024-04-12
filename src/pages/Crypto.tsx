//* Packages Imports */
import { Outlet } from "react-router-dom";

//* Components Imports */
import CryptoTable from "@Components/CryptoTable";
import Filters from "@Components/Filters";

const Crypto = () => (
  <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
    <Filters />
    <CryptoTable />
    <Outlet />
  </section>
);

export default Crypto;
