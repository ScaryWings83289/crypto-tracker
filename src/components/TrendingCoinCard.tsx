//* Packages Imports */
import { useNavigate } from "react-router-dom";

const TrendingCoinCard = ({ data }: { data: TrendingCoinDataType }) => {
  const { item: coin } = data;
  const navigate = useNavigate();

  const getCoinDetails = (id: string) => {
    navigate(id);
  };

  return (
    <div
      className="lg:w-[40%] sm:w-[60%] w-[90%] bg-gray-200 mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-gray-100 hover:bg-opacity-40"
      onClick={() => getCoinDetails(coin.id)}
    >
      {coin ? (
        <>
          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">Name:&nbsp;</span>
            <span className="text-cyan">{coin.name}</span>
            <img
              src={coin.small}
              alt={coin.name}
              className="w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full"
            />
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">
              Market cap rank:&nbsp;
            </span>
            <span className="text-cyan">{coin.market_cap_rank}</span>
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">
              Price (in btc):&nbsp;
            </span>
            <span className="text-cyan">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5,
              }).format(coin.price_btc)}
            </span>
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">Score:&nbsp;</span>
            <span className="text-cyan">{coin.score}</span>
          </h3>

          <img
            src={coin.large}
            alt={coin.name}
            className="absolute lg:top-2/4 top-1 lg:-right-12 -right-3 -translate-y-2/4 lg:w-[35%] w-[5rem] h-auto rounded-full"
          />
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin"
            role="status"
          />
          <span className="ml-2">Please wait...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoinCard;
