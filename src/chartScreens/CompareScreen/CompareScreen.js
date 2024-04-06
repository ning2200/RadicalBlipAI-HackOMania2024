import React from "react";
import { Button } from "antd";
import CompareCompanies from "../../CompareCompanies/CompareCompanies";

const CompareScreen = ({ listOfCompanies, mockData, onCompanyClick }) => {
  return (
    <div
      style={{
        width: "60%",
        marginTop: "30px",
        background: "#F2F2F2",
        padding: "30px",
        borderRadius: "5%",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      }}
    >
      {
        <CompareCompanies
          listOfCompanies={listOfCompanies}
          mockData={mockData}
        />
      }
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ fontSize: "20px" }}>Similar Companies?</div>
        <div
          style={{ fontSize: "12px", marginTop: "8px", fontWeight: "medium" }}
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
            width: "50%",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {listOfCompanies.map((company) => (
            <Button
              key={company.companyName}
              style={{
                borderRadius: "5px",
                marginBottom: "10px",
                background: company.selected ? "#000000" : "#DFDFDF",
                color: company.selected ? "white" : "#CACACA",
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
    </div>
  );
};

export default CompareScreen;
