//* Packages Imports */
import { useContext, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";

//* Context Imports */
import { CryptoContext } from "@Context/CryptoContext";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const navigate = useNavigate();
  const cryptoContextData = useContext(CryptoContext);
  const coinData = cryptoContextData?.coinData;

  //* Close coins portal
  const handleClose = () => {
    navigate("/");
  };

  useLayoutEffect(() => {
    if (coinId) {
      cryptoContextData?.getCoinData(coinId);
    }
  }, [coinId]);

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 w-full h-full bg-gray-200 bg-opacity-30 backdrop-blur-sm flex items-center justify-center font-nunito"
      onClick={handleClose}
    >
      <div
        className="w-[65%] h-[75%] bg-gray-300 bg-opacity-75 rounded-lg text-white relative"
        onClick={(e) => e.stopPropagation()}
      >
        {coinData ? <h1>{coinData.id}</h1> : null}
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default CryptoDetails;
