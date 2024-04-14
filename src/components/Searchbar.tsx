//* Packages Imports */
import { ChangeEvent, useContext, useState } from "react";

//* Utils Imports */
import useDebounce from "@Utils/useDebounce";

//* Context Imports */
import { CryptoContext } from "@Context/CryptoContext";

//* Assets Imports */
import SearchIcon from "@Assets/search-icon.svg";

const SearchInput = ({
  handleSearch,
}: {
  handleSearch: (search: string) => void;
}) => {
  const cryptoContextData = useContext(CryptoContext);
  const [search, setSearch] = useState<string>("");

  //* Handle input search
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  //* Handle Search Submit
  const handleSearchSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(search);
  };

  //* Handle coin selection
  const handleCoinSelect = (coin: string) => {
    cryptoContextData?.setCoinSearch(`${coin}`);
    cryptoContextData?.setSearchData([]);
    setSearch("");
  };

  return (
    <>
      <form
        className="xl:w-96 lg:w-60 w-full relative flex items-center lg:ml-7 font-nunito"
        onSubmit={handleSearchSubmit}
      >
        <input
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 placeholder:text-base required outline-0 border border-transparent focus:border-cyan"
          type="text"
          name="search"
          placeholder="Search here..."
          value={search}
          onChange={handleInputChange}
        />
        <button className="absolute right-1 cursor-pointer" type="submit">
          <img className="w-full h-auto" src={SearchIcon} alt="search" />
        </button>
      </form>

      {Array.isArray(cryptoContextData?.searchData) &&
        cryptoContextData?.searchData.length > 0 && (
          <ul className="absolute top-11 right-0 lg:w-96 w-full bg-gray-200 rounded overflow-x-hidden  py-2  backdrop-filter backdrop-blur-md bg-opacity-60  scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200  z-10 h-96">
            {cryptoContextData?.searchData ? (
              cryptoContextData?.searchData.map((coin: CoinSearchDataType) => (
                <li
                  key={coin.id}
                  className="flex items-center ml-4 my-2 cursor-pointer"
                  onClick={() => handleCoinSelect(`${coin.id}`)}
                >
                  <img
                    className="w-[1rem] h-[1rem] mx-1.5"
                    src={coin.thumb}
                    alt={coin.name}
                  />
                  {coin.name}
                </li>
              ))
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <div
                  className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin"
                  role="status"
                />
                <span className="ml-2">Searching...</span>
              </div>
            )}
          </ul>
        )}
    </>
  );
};

const Searchbar = () => {
  const cryptoContextData = useContext(CryptoContext);

  //* Fetch Search Results
  const getSearchData = useDebounce((search: string) => {
    cryptoContextData?.getSearchData(search);
  }, 500);

  return (
    <div className="relative">
      <SearchInput handleSearch={getSearchData} />
    </div>
  );
};

export default Searchbar;
