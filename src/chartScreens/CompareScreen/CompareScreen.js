import React from "react";
import { Button } from "antd";
import CompareCompanies from "../../Charts/CompareCompanies/CompareCompanies";
import ComparePieChart from "../../Charts/ComparePieChart/ComparePieChart";
import OverviewScreen from "./OverviewScreen";

const CompareScreen = ({
  listOfCompanies,
  mockData,
  onCompanyClick,
  selectedButton,
}) => {
  const renderChartByView = (view) => {
    if (view === "GHG Emissions") {
      return <ComparePieChart />;
    } else if (view === "Compare") {
      return (
        <>
          <CompareCompanies
            listOfCompanies={listOfCompanies}
            mockData={mockData}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "Raleway",
              }}
            >
              Similar Companies?
            </div>
            <div
              style={{
                fontSize: "12px",
                marginTop: "8px",
                fontWeight: "400",
                fontFamily: "Raleway",
                fontSize: "13px",
              }}
            >
              Please select the option you wish to compare with
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                width: "95%",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              {listOfCompanies.map((company) => (
                <Button
                  key={company.companyName}
                  style={{
                    borderRadius: "5px",
                    marginBottom: "10px",
                    marginRight: "5px",
                    height: "50px",
                    width: "270px",
                    background: company.selected ? "#43473E" : "#DFDFDF",
                    color: company.selected ? "#F0F0F0" : "#CACACA",
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Raleway",
                  }}
                  onClick={() => {
                    onCompanyClick(company.companyName);
                  }}
                >
                  {company.companyName}
                </Button>
              ))}
            </div>
          </div>
        </>
      );
    } else if (view === "Overview") {
      return (
        <>
       <OverviewScreen/>
        </>
      );
    }
  };

  return (
    <div
      style={{
        width: "60%",
        background: "#F2F2F2",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      }}
    >
      {renderChartByView(selectedButton)}
    </div>
  );
};

export default CompareScreen;
