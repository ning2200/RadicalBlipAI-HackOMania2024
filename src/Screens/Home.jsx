import React, {useState} from 'react'
import EcoLogo from "../Images/EcoLogo.png";
import HomeIllustration from "../Images/HomeIllustration.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import companiesSearch from "../companiesSearch.json";

import "../App.css";


const Home = ({onQuerySearch}) => {
  const [textInput,setTextInput] = useState("")
  const listOfCompanies = companiesSearch.map((company) => company.name);


  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div>
          <img
            style={{
              height: "50px",
              position: "absolute",
              top: 20,
              left: 50,
            }}
            src={EcoLogo}
            alt="Eco Logo"
          />
        </div>
        <div
          style={{
            display: "flex",
            height: "40%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              height: "300px",
            }}
            src={HomeIllustration}
            alt="HomeIllustration"
          />
        </div>

        <div
          style={{
            display: "flex",
            height: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Raleway, sans-serif",
              fontWeight: "600",
              fontSize: "70px",
            }}
          >
            Measuring Impact,
            <br />
            Making a Difference
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            height: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4
            style={{
              fontFamily: "Raleway, sans-serif",
              fontWeight: "500",
              fontSize: "22px",
            }}
          >
            Empowering Consumers to Make Informed Choices for a Greener Tomorrow
          </h4>
        </div>

        <div
          style={{
            display: "flex",
            height: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Autocomplete
            disablePortal
            id="company-autocomplete"
            options={listOfCompanies}
            sx={{ width: 800 }}
            
            renderInput={(params) => (
              <TextField
                value={textInput}
                onChange={(event) => {
                  event.preventDefault()
                  setTextInput(event.target.value)
                }}
                placeholder="What company do you want to check?"
                {...params}
                onKeyDown= {(event) => {
                  if(event.key === 'Enter'){
                    onQuerySearch(textInput)
                    setTextInput("")
                  }
                }}
                label="Company"
              />
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
