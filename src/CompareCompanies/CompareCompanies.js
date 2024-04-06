import React, { useEffect, useState } from "react";
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

const CompareCompanies = ({ listOfCompanies=[], mockData = [] }) => {
  const [dataToShow, setDataToShow] = useState([]);

  const COLORS = ["#B266FF", "#9999FF", "#CC0000"];

  useEffect(() => {
    const companiesToShow = listOfCompanies
      .filter(company => company.selected)
      .map(company => company.companyName);
    const filteredData = mockData.filter(company =>
      companiesToShow.includes(company.name)
    );
    setDataToShow(filteredData);
  }, [listOfCompanies,mockData]);

  const formatYAxis = (tickItem) => `${tickItem / 1000}K`;

  // Dynamically generate Bar components based on dataToShow keys, excluding 'name'
  const renderBars = () => {
    if (dataToShow.length > 0) {
      const barKeys = Object.keys(dataToShow[0]).filter(key => key !== 'name');
      return barKeys.map((key, index) => (
        <Bar key={key} dataKey={key} fill={COLORS[index % COLORS.length]} />
      ));
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={dataToShow}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatYAxis} />
        <Tooltip />
        <Legend />
        {renderBars()}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CompareCompanies;
