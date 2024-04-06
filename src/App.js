import React, { useState } from "react";
import BarChartContainer from "./BarChartContainer/BarChartContainer";
import CompanyPanel from "./CompanyPanel/CompanyPanel";

import "./App.css";

function App() {
  const [shouldShow, setShouldShow] = useState(true);
  const [mockData, setMockData] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [listOfCountries, setListOfCountires] = useState([
    {
      conmapnyName: "Company A",
      selected: false,
    },
    {
      conmapnyName: "Company B",
      selected: false,
    },
    {
      conmapnyName: "Company C",
      selected: false,
    },
    {
      conmapnyName: "Company D",
      selected: false,
    },
    {
      conmapnyName: "Company E",
      selected: false,
    },
    {
      conmapnyName: "Company F",
      selected: false,
    },
    {
      conmapnyName: "Company G",
      selected: false,
    },
  ]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#F2F2F2",
            width: "60%",
            marginTop: "30px",
            padding: "30px",
            overflowX: "scroll",
            borderRadius: "5%",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          }}
        >
          {shouldShow && <BarChartContainer />}
          <CompanyPanel companylist={listOfCountries}
            onCompanyClick={() => {}}
          />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
