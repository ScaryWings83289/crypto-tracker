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
    <label className="relative flex justify-center items-center">
      <span className="font-bold mr-2">Sort by:</span>
      <select
        name="sortby"
        className="rounded bg-gray-200 text-base pl-2 pr-10 py-0.5 leading-4 capitalize outline-0"
        onChange={handleSortByChange}
      >
        {SORT_OPTIONS.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <img
        className="w-[1rem] h-auto absolute right-0.5 top-2 pointer-events-none"
        src={SelectIcon}
        alt="select"
      />
    </label>
  );
};

export default SortFilter;
