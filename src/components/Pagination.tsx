//* Packages Imports */
import { ChangeEvent, useContext, useRef } from "react";

//* Context Imports */
import { CryptoContext } from "@Context/CryptoContext";

//* Assets Imports */
import LeftArrow from "@Assets/pagination-arrow.svg";
import SubmitIcon from "@Assets/submit-icon.svg";

const PerPage = () => {
  const cryptoContextData = useContext(CryptoContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  //* Handle per page submit */
  const handlePerPageSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Number(inputRef.current?.value) !== 0) {
      cryptoContextData?.setPerPage(Number(inputRef.current?.value));
    }
  };

  return (
    <form
      className="relative flex items-center font-nunito mr-12"
      onSubmit={handlePerPageSubmit}
    >
      <label
        className="relative flex justify-center items-center mr-2 font-bold"
        htmlFor="currency"
      >
        Per Page
      </label>
      <input
        className="w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
        type="number"
        name="perpage"
        placeholder="10"
        min={1}
        max={250}
        ref={inputRef}
      />
      <button className="ml-1 cursor-pointer" type="submit">
        <img className="w-full h-auto" src={SubmitIcon} alt="submit" />
      </button>
    </form>
  );
};

const Pagination = () => {
  const cryptoContextData = useContext(CryptoContext);
  const page = cryptoContextData?.page as number;
  const perPage = cryptoContextData?.perPage as number;
  const totalPages = cryptoContextData?.totalPages as number;

  //* Handle previous button */
  const handlePrevious = () => {
    if (page === 1) return;
    cryptoContextData?.setPage(page - 1);
  };

  //* Handle next button */
  const handleNext = () => {
    if (page === totalPages) return;
    cryptoContextData?.setPage(page + 1);
  };

  //* Handle multi step previous button */
  const handleMultiStepPrevious = () => {
    if (page - 3 <= 1) {
      cryptoContextData?.setPage(page + 1);
    } else {
      cryptoContextData?.setPage(page - 2);
    }
  };

  //* Handle multi step next button */
  const handleMultiStepNext = () => {
    if (page + 3 > totalPages) {
      cryptoContextData?.setPage(totalPages - 1);
    } else {
      cryptoContextData?.setPage(page + 3);
    }
  };

  //* Return null if cryptoData is empty */
  if (
    cryptoContextData?.cryptoData &&
    cryptoContextData?.cryptoData.length >= perPage
  ) {
    return (
      <div className="flex items-center">
        <PerPage />
        <ul className="flex items-center justify-end text-sm">
          <li className="flex items-center">
            <button
              className="outline-0 hover:text-cyan w-8"
              onClick={handlePrevious}
            >
              <img
                className="w-full h-auto rotate-180"
                src={LeftArrow}
                alt="left"
              />
            </button>
          </li>
          {page + 1 === totalPages ||
            (page === totalPages && (
              <li>
                <button
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg"
                  onClick={handleMultiStepPrevious}
                >
                  ...
                </button>
              </li>
            ))}
          {page - 1 !== 0 && (
            <li>
              <button
                className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                onClick={handlePrevious}
              >
                {page - 1}
              </button>
            </li>
          )}
          <li>
            <button
              className="outline-0 rounded-full w-8 h-8 flex items-center justify-center mx-1.5 bg-cyan text-gray-300"
              disabled
            >
              {page}
            </button>
          </li>
          {page + 1 !== totalPages && page !== totalPages && (
            <li>
              <button
                className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                onClick={handleNext}
              >
                {page + 1}
              </button>
            </li>
          )}
          {page + 1 !== totalPages && page !== totalPages && (
            <li>
              <button
                className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg"
                onClick={handleMultiStepNext}
              >
                ...
              </button>
            </li>
          )}
          {page !== totalPages && (
            <li>
              <button
                className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                onClick={() => cryptoContextData?.setPage(totalPages)}
              >
                {totalPages}
              </button>
            </li>
          )}
          <li>
            <button
              className="outline-0 hover:text-cyan w-8"
              onClick={handleNext}
            >
              <img className="w-full h-auto" src={LeftArrow} alt="right" />
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
