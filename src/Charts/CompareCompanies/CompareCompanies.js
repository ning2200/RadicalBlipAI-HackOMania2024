import React, { useEffect, useState } from "react";
import { Empty } from "antd";
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

const CompareCompanies = ({ listOfCompanies , mockData  }) => {
  const [dataToShow, setDataToShow] = useState([]);

  const COLORS = ["#1D66F4", "#F48401", "#F24242"];

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
    dataToShow.length === 0 ? <Empty 
    /> : 
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={dataToShow}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontWeight="500" fontFamily="Raleway" fontSize="13px" />
        <YAxis fontWeight="500" fontFamily="Raleway" fontSize="13px" tickFormatter={formatYAxis} />
        <Tooltip />
        <Legend wrapperStyle={{lineHeight: '40px', fontWeight:"400", fontFamily:"Poppins", fontSize:"13px"}}/>
        {renderBars()}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CompareCompanies;
