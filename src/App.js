import React, { useState } from "react";
import BarChartContainer from "./BarChartContainer/BarChartContainer";
import CompanyPanel from "./CompanyPanel/CompanyPanel";

import "./App.css";

function App() {
  const [shouldShow, setShouldShow] = useState(true);
  const [mockData, setMockData] = useState([
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
  ]);
  const [listOfCompanies, setListOfCompanies] = useState([
    {
      companyName: "Company A",
      selected: true,
    },
    {
      companyName: "Company B",
      selected: true,
    },
    {
      companyName: "Company C",
      selected: true,
    },
    {
      companyName: "Company D",
      selected: true,
    },
    {
      companyName: "Company E",
      selected: true,
    },
    {
      companyName: "Company F",
      selected: true,
    },
    {
      companyName: "Company G",
      selected: true,
    },
  ]);

  const onCompanyClick = (companyName) => {
      const copiedCompanies = [...listOfCompanies]
      const companyToFind = copiedCompanies.find(company => company.companyName === companyName);
      companyToFind.selected = !companyToFind.selected 
      setListOfCompanies(copiedCompanies)
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            marginTop: "30px",
            background: "#F2F2F2",
            padding: "30px",
            overflowX: "scroll",
            borderRadius: "5%",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          }}
        >
          {shouldShow && <BarChartContainer 
          listOfCompanies={listOfCompanies}
          mockData={mockData}
          />}
        </div>
        <div
          style={{
            background: "#F2F2F2",
            width:'25%',
            padding: '30px',
            display:'flex',
            marginTop: "30px",
            borderRadius: "5%",
            flexDirection:'column',
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            marginLeft:'20px'
          }}
        >
          <CompanyPanel
            companylist={listOfCompanies}
            onCompanyClick={onCompanyClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
