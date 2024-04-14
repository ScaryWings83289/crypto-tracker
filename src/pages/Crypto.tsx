//* Packages Imports */
import { Outlet } from "react-router-dom";

//* Components Imports */
import CryptoTable from "@Components/CryptoTable";
import Filters from "@Components/Filters";

const Crypto = () => (
  <section className="xs:w-[80%] w-[90%]  h-full flex flex-col  mb-24 lg:mt-16 mt-8 relative">
    <Filters />
    <CryptoTable />
    <Outlet />
  </section>
);

export default Crypto;
