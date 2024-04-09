//* Components Imports */
import Searchbar from "@Components/Searchbar";
import CurrencyFilter from "@Components/CurrencyFilter";
import SortFilter from "@Components/SortFilter";

const Filters = () => (
  <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
    <Searchbar />
    <div className="flex mr-7">
      <CurrencyFilter />
      <SortFilter />
    </div>
  </div>
);

export default Filters;
