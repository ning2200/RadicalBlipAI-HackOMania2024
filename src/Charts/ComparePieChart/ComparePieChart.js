import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const ComparePieChart = () => {
  const COLORS = ["#9BA6FA", "#007CC3", "#00ABA1"];
  const data = [
    { name: "direct emissions", value: 400 },
    { name: "indirect emissions - owned", value: 300 },
    { name: "indirect emissions - not owned", value: 300 },
  ];

  return (
    <>
    <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <h2
            style={{
              color: "#524E4E",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Total Greenhouse Gas Emissions
          </h2>
          <p
          style={{
            color: "#524E4E",
            fontFamily: "Raleway, sans-serif",
            fontWeight: "400",
            fontSize: "13px",
            marginTop: "10px",
            lineHeight: "1.5" 
          }}
        >
          Greenhouse gas emissions are gases released into the atmosphere, trapping heat and contributing to global warming. <br/> They lead to climate change, impacting ecosystems and weather patterns worldwide.
        </p>
        </div>
      
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={800} height={800}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend  wrapperStyle={{
            lineHeight: "30px",
            fontWeight: "400",
            fontFamily: "Poppins",
            fontSize: "13px",
          }} layout="vetical" verticalAlign="middle" align="right"/>
      </PieChart>
    </ResponsiveContainer>
    </>
  );
};

export default ComparePieChart;
