//* Packages Imports */
import { ChangeEvent, useContext, useRef } from "react";

//* Context Imports */
import { CryptoContext } from "@Context/CryptoContext";

//* Assets Imports */
import SubmitIcon from "@Assets/submit-icon.svg";

const CurrencyFilter = () => {
  const cryptoContextData = useContext(CryptoContext);
  const currencyRef = useRef<HTMLInputElement | null>(null);

  //* Handle currency change
  const handleCurrencyChange = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    cryptoContextData?.setCurrency(
      `${(currencyRef.current as HTMLInputElement).value}`
    );
    (currencyRef.current as HTMLInputElement).value = "";
  };

  return (
    <form
      className="relative flex items-center font-nunito md:mr-12 mr-1"
      onSubmit={handleCurrencyChange}
    >
      <label
        className="relative flex justify-center items-center mr-2 font-bold"
        htmlFor="currency"
      >
        Currency
      </label>
      <input
        className="w-16 rounded bg-gray-200 placeholder:text-gray-100  placeholder:text-base required outline-0  border border-transparent focus:border-cyan leading-4 sm:text-base text-sm sm:p-0 sm:pl-2 p-1"
        type="text"
        name="currency"
        placeholder="usd"
        ref={currencyRef}
      />
      <button className="ml-1 cursor-pointer" type="submit">
        <img className="w-full h-auto" src={SubmitIcon} alt="submit" />
      </button>
    </form>
  );
};

export default CurrencyFilter;
