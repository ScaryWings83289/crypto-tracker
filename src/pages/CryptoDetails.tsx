//* Packages Imports */
import { useContext, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

//* Components Imports */
import CryptoDetailsModal from "@Components/CryptoDetailsModal";

//* Context Imports */
import { CryptoContext } from "@Context/CryptoContext";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const cryptoContextData = useContext(CryptoContext);

  useLayoutEffect(() => {
    if (coinId) {
      cryptoContextData?.getCoinData(coinId);
    }
  }, [coinId]);

  return ReactDOM.createPortal(
    <CryptoDetailsModal />,
    document.getElementById("modal")!
  );
};

export default CryptoDetails;
