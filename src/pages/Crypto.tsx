//* Packages Imports */

//* Components Imports */
import CryptoTable from "@Components/CryptoTable";
import Filters from "@Components/Filters";

const Crypto = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <Filters />
      <CryptoTable />
    </section>
  );
};

export default Crypto;
