/* eslint-disable @typescript-eslint/ban-ts-comment */
//* Packages Imports */
import { useContext, useLayoutEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios, { AxiosError } from "axios";

//* Context Imports */
import { CryptoContext } from "@Context/CryptoContext";

//* Utils Imports */
import { CoinPath } from "@Utils/urls";
import { DUMMY_PRICES_DATA } from "@Data/CryptoData";

const CustomTooltip = ({
  payload,
  label,
  active,
  currency = "usd",
}: CustomTooltipPropsType) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="custom-tooltip">
        <p className="label text-sm text-cyan">{`${label} : ${new Intl.NumberFormat(
          "en-IN",
          {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 5,
          }
        ).format(payload[0].value)}`}</p>
      </div>
    );
  }

  return null;
};

const ChartComponent = ({ data, currency, type }: ChartComponentPropsType) => (
  <ResponsiveContainer height={"90%"}>
    <LineChart width={400} height={400} data={data}>
      <Line
        type="monotone"
        dataKey={type}
        stroke="#14ffec"
        strokeWidth={"1px"}
      />
      <CartesianGrid stroke="#323232" />
      <XAxis dataKey="date" hide />
      <YAxis dataKey={type} hide domain={["auto", "auto"]} />
      <Tooltip
        //@ts-expect-error
        content={<CustomTooltip />}
        //@ts-expect-error
        currency={currency}
        cursor={false}
        wrapperStyle={{ outline: "none" }}
      />
      <Legend />
    </LineChart>
  </ResponsiveContainer>
);

const Chart = ({ id }: { id: string }) => {
  const cryptoContextData = useContext(CryptoContext);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [type, setType] = useState<ChartFilterType>("prices");
  const [days, setDays] = useState<number>(7);

  //* Fetch Chart Data
  useLayoutEffect(() => {
    const getChartData = async (id: string) => {
      try {
        const { data } = await axios.get(
          `${CoinPath}/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
        );

        const convertedData = data[type].map((item: Array<number>) => ({
          date: new Date(item[0]).toLocaleDateString(),
          [type]: item[1],
        }));
        setChartData(convertedData);
      } catch (error) {
        if ((error as AxiosError).message === "Network Error") {
          const convertedData = DUMMY_PRICES_DATA[type].map(
            (item: Array<number>) => ({
              date: new Date(item[0]).toLocaleDateString(),
              [type]: item[1],
            })
          );
          setChartData(convertedData);
        }
        console.error(error);
      }
    };

    getChartData(id);
  }, [id, type, days]);

  return (
    <div className="w-full h-[60%]">
      <ChartComponent
        data={chartData}
        currency={cryptoContextData?.currency as string}
        type={type}
      />

      <div className="flex">
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "prices"
              ? "bg-cyan text-cyan"
              : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setType("prices")}
        >
          Price
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "market_caps"
              ? "bg-cyan text-cyan"
              : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setType("market_caps")}
        >
          market caps
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "total_volumes"
              ? "bg-cyan text-cyan"
              : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setType("total_volumes")}
        >
          total volumes
        </button>

        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 7 ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setDays(7)}
        >
          7d
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 14 ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setDays(14)}
        >
          14d
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 30 ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setDays(30)}
        >
          30d
        </button>
      </div>
    </div>
  );
};

export default Chart;
