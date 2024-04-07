import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const OverviewChart = ({data}) => {
    console.log(data)

  const COLORS = ["#B266FF", "#9999FF", "#CC0000"];

  const formatYAxis = (tickItem) => `${tickItem / 1000}K`;

  // Dynamically generate Bar components based on dataToShow keys, excluding 'name'
  const renderBars = () => {
    if (data.length > 0) {
      const barKeys = Object.keys(data[0]).filter(
        (key) => key !== "name"
      );
      return barKeys.map((key, index) => (
        <Bar key={key} dataKey={key} fill={COLORS[index % COLORS.length]} />
      ));
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          fontWeight="500"
          fontFamily="Raleway"
          fontSize="13px"
        />
        <YAxis
          fontWeight="500"
          fontFamily="Raleway"
          fontSize="13px"
          tickFormatter={formatYAxis}
        />
        <Tooltip />
        <Legend
          wrapperStyle={{
            lineHeight: "40px",
            fontWeight: "400",
            fontFamily: "Poppins",
            fontSize: "13px",
          }}
        />
        {renderBars()}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;

