import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartContainer = () => {

  const COLORS = [
    "#B266FF",
    '#9999FF',
    '#CC0000',

  ]

  const mockData = [
    {
      name: "Company A",
      footPrintPerProduction: 4000,
      carbonFootPrintPerRevenue: 2400,
      carbonFootPrintPerEmployee: 2400,
    },
    {
      name: "Company B",
      footPrintPerProduction: 3000,
      carbonFootPrintPerRevenue: 1398,
      carbonFootPrintPerEmployee: 2210,
    },
    {
      name: "Company C",
      footPrintPerProduction: 2000,
      carbonFootPrintPerRevenue: 9800,
      carbonFootPrintPerEmployee: 2290,
    },
    {
      name: "Company D",
      footPrintPerProduction: 2780,
      carbonFootPrintPerRevenue: 3908,
      carbonFootPrintPerEmployee: 2000,
    },
    {
      name: "Company E",
      footPrintPerProduction: 1890,
      carbonFootPrintPerRevenue: 4800,
      carbonFootPrintPerEmployee: 2181,
    },
    {
      name: "Company F",
      footPrintPerProduction: 2390,
      carbonFootPrintPerRevenue: 3800,
      carbonFootPrintPerEmployee: 2500,
    },
    {
      name: "Company G",
      footPrintPerProduction: 3490,
      carbonFootPrintPerRevenue: 4300,
      carbonFootPrintPerEmployee: 2100,
    },
  ]

  const barKeys = Object.keys(mockData[0]).filter(key => key !== 'name')

  const formatYAxis = (tickItem) => {
    return `${tickItem / 1000}K`;
  };



  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        height={300}
        data={mockData}

      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis  tickFormatter={formatYAxis} />
        <Tooltip />
        <Legend />
        {barKeys.map((key,index) => (<Bar dataKey={key} fill={COLORS[index]}/>))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartContainer;


        
        {/* <Bar
          dataKey="pv"
          fill="#8884d8"
        />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
        /> */}