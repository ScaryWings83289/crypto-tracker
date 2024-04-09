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
  const searchData = cryptoContextData?.searchData;
  const [search, setSearch] = useState<string>("");

  //* Handle input search
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <>
      <form className="w-96 relative flex items-center ml-7 font-nunito">
        <input
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
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

      {Array.isArray(searchData) && searchData.length > 0 ? (
        <ul className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          {searchData.map((coin: CoinSearchDataType) => (
            <li key={coin.id} className="flex items-center ml-4 my-2 cursor-pointer">
              <img
                className="w-[1rem] h-[1rem] mx-1.5"
                src={coin.thumb}
                alt={coin.name}
              />
              {coin.name}
            </li>
          ))}
        </ul>
      ) : (
        <h2>Please wait...</h2>
      )}
    </>
  );
};

const Search = () => {
  const cryptoContextData = useContext(CryptoContext);

  //* Fetch Search Results
  const getSearchData = useDebounce((search: string) => {
    cryptoContextData?.getSearchData(search);
  }, 2000);

  return (
    <div className="relative">
      <SearchInput handleSearch={getSearchData} />
    </div>
  );
};

export default Search;
