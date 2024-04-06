import React from "react";

const CompanyPanel = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px"
        }}
      >
        <div style={{ fontSize: "18px", fontWeight:"500", fontFamily:"Raleway", marginBottom: "10px"}}>Have a question?</div>
        <div
          style={{ fontSize: "12px", fontWeight:"400", fontFamily:"Raleway" }}
        >
          Feel free to ask our AI anything about carbon emissions
        </div>
      </div>
      <div style={{ marginTop: "20px", display:'flex', flexDirection:'column' , justifyContent: "center" }}>
      </div>
    </>
  );
};

export default CompanyPanel;
