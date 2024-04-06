import React, { useState } from "react";
import { Button } from "antd";
import CompanyPanel from "./CompanyPanel/CompanyPanel";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompareScreen from "./chartScreens/CompareScreen/CompareScreen";

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

  const [buttonView, setListOfButtonView] = useState([
    "Overview",
    "GHG Emissions",
    "Compare",
  ]);
  const [selectedButton, setSelectedButton] = useState("Overview");

  const onCompanyClick = (companyName) => {
    const copiedCompanies = [...listOfCompanies];
    const companyToFind = copiedCompanies.find(
      (company) => company.companyName === companyName
    );
    companyToFind.selected = !companyToFind.selected;
    setListOfCompanies(copiedCompanies);
  };

  return (
    <>

      <Router>
        <Routes>
        <Route path="/Home" element={<Home />} />
        </Routes>
        </Router>
      <div
        style={{
          width: "25%",
          display: "flex",
          marginLeft: "30px",
          marginTop: "30px",
          justifyContent: "space-between",
        }}
      >
        {buttonView.map((button) => (
          <Button
          shape="round" 
            onClick={() => setSelectedButton(button)}
            style={{
              color: selectedButton === button ? "white" : "",
              background: selectedButton === button ? "#565656" : "#E6E6E6",
            }}
          >
            {button}
          </Button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CompareScreen
          onCompanyClick={onCompanyClick}
          listOfCompanies={listOfCompanies}
          mockData={mockData}
        />
        <div
          style={{
            background: "#F2F2F2",
            width: "25%",
            padding: "30px",
            display: "flex",
            marginTop: "30px",
            borderRadius: "5%",
            flexDirection: "column",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            marginLeft: "20px",
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
