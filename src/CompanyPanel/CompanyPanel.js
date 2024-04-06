import React from 'react'

const CompanyPanel = ({companylist,onCompanyClick}) => {
  return (
    <div style={{
        backGround:'#F2F2F2',
        width:'25%',
        display:'flex',
        flexDirection:'column'
    }}>
        {companylist.map(company => <span onClick={onCompanyClick}>{company.conmapnyName}</span>)}
    </div>
  )
}


export default CompanyPanel