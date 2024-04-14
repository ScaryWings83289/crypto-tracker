//* Packages Imports */
import { ChangeEvent, useContext } from "react";

//* Utils Imports */
import { SORT_OPTIONS } from "@Src/data/CryptoData"

//* Context Imports */
import { CryptoContext } from "@Context/CryptoContext";

//* Assets Imports */
import SelectIcon from "@Assets/select-icon.svg";

const SortFilter = () => {
  const cryptoContextData = useContext(CryptoContext);

  //* Handle sort by change
  const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    cryptoContextData?.setSortBy(e.target.value);
  };

  return (
    <label className="relative flex sm:justify-center justify-start items-center mt-4 sm:mt-0">
      <span className="mr-2 sm:font-bold font-medium sm:text-base text-sm w-16">Sort by:</span>
      <select
        name="sortby"
        className="rounded bg-gray-200 sm:text-base text-sm pl-2 pr-10 py-1.5 focus:outline-0 text-transparent appearance-none capitalize leading-4 w-full sm:w-48"
        onChange={handleSortByChange}
      >
        {SORT_OPTIONS.map((option: SortOptionsType) => (
          <option className="sm:text-base text-sm" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <img
        className="w-[1rem] absolute right-1 top-2 pointer-events-none"
        src={SelectIcon}
        alt="select"
      />
    </label>
  );
};

export default SortFilter;
