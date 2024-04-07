
import React, {useState} from 'react'
import {Select} from "antd"
import transparent from "./../../Images/transparent.png";
import BioSuisse from "../../Images/EcoLabels/BioSuisse.png";
import BioSuisseX from "../../Images//EcoLabels/BioSuisseX.png";
import CarbonNeutral from "../../Images/EcoLabels/CarbonNeutral.png";
import CarbonNeutralX from "../../Images/EcoLabels/CarbonNeutralX.png";
import Organic from "../../Images/EcoLabels/Organic.png";
import OrganicX from "../../Images/EcoLabels/OrganicX.png";
import OverviewChart from "../../Charts/OverviewChart/OverviewChart";

const OverviewScreen = () => {
  const overView = {
    footPrintPerProduction: {
      2020: {
        total: 4144,
      },
      2021: {
        total: 2421,
      },
      2022: {
        total: 1414,
      },
    },
    carbonFootPrintPerRevenue: {
      2020: {
        total: 4114,
      },
      2021: {
        total: 3121,
      },
      2022: {
        total: 1411,
      },
    },
    carbonFootPrintPerEmployee: {
      2020: {
        total: 4114,
      },
      2021: {
        total: 5211,
      },
      2022: {
        total: 1411,
      },
    },
  };

  const [selectedOverview, setSelectedOverview] = useState('footPrintPerProduction')

  function convertOverview(overView) {
    const overView2 = {};
  
    Object.keys(overView).forEach((key) => {
      const currentObject = overView[key];
      
      overView2[key] = Object.keys(currentObject).map((year) => ({
        name: parseInt(year),
        total: currentObject[year].total, 
      }));
    });
  
    return overView2;
  }

  const overViewObject = convertOverview(overView)
  console.log(overViewObject)

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          height: "9%",
          alignItems: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <h2
            style={{
              color: "#524E4E",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Apple Inc.
          </h2>
          <img
            style={{
              height: "20px",
              width: "20px",
              paddingLeft: "10px",
            }}
            src={transparent}
            alt="transparent"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              color: "#929191",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              fontSize: "10px",
              paddingBottom: "5px",
              paddingLeft: "5px",
            }}
          >
            YEAR
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              border: "1px solid #dadada",
              padding: "12px",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                color: "#767676",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                fontSize: "13px",
              }}
            >
              2019 - 2021
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          height: "4%",
          alignItems: "center",
          paddingLeft: "20px",
        }}
      >
        <p
          style={{
            color: "#524E4E",
            fontFamily: "Raleway, sans-serif",
            fontWeight: "400",
            fontSize: "13px",
          }}
        >
          Apple prioritizes reducing carbon emissions, commits to
          sustainability, and leads in innovation.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          height: "20%",
          alignItems: "flex-start",
          paddingLeft: "40px",
          paddingTop: "20px",
        }}
      >
        <Select
          style={{marginLeft:'auto'}}
          value={selectedOverview}
          onChange={(value) => setSelectedOverview(value)}
        >
          {["footPrintPerProduction", "carbonFootPrintPerRevenue", "carbonFootPrintPerEmployee"]
            .map(key => <Select.Option value={key}>{key}</Select.Option>)
          } 
        </Select>
        <OverviewChart data={overViewObject[selectedOverview]}/>
        <h2
          style={{
            color: "#524E4E",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "500",
            fontSize: "13px",
            marginBottom: "10px"
          }}
        >
          Eco Labels
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <img
            style={{
              height: "50px",
              paddingLeft: "20px",
            }}
            src={BioSuisse}
            alt="BioSuisse"
          />
          <img
            style={{
              height: "50px",
              paddingLeft: "20px",
            }}
            src={CarbonNeutral}
            alt="CarbonNeutral"
          />
          <img
            style={{
              height: "45px",
              paddingLeft: "20px",
            }}
            src={OrganicX}
            alt="OrganicX"
          />
        </div>
      </div>
    </>
  );
};

export default OverviewScreen;
