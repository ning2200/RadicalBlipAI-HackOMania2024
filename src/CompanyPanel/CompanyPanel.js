import React from "react";
import {Button} from 'antd';

const CompanyPanel = ({ companylist, onCompanyClick }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "20px" }}>Similar Companies</div>
        <div
          style={{ fontSize: "12px", marginTop: "8px", fontWeight: "medium" }}
        >
          Please select the options you wish to compare with
        </div>
      </div>
      <div style={{ marginTop: "20px", display:'flex', flexDirection:'column' , justifyContent: "center" }}>
        {companylist.map((company) => (
          <Button style={{borderRadius:'5px' ,marginBottom: '10px'  
            , background: company.selected? '#000000' : '#DFDFDF' , color: company.selected? "white" : "#CACACA"
          }} onClick={() => onCompanyClick(company.companyName)}>
            {company.companyName}
          </Button>
        ))}
      </div>
    </>
  );
};

export default CompanyPanel;
