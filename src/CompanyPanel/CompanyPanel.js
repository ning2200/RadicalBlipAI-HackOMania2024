import React from "react";

const CompanyPanel = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "20px" }}>Have a question?</div>
        <div
          style={{ fontSize: "12px", marginTop: "8px", fontWeight: "medium" }}
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
