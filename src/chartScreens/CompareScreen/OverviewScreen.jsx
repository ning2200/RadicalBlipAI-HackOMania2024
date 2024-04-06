import transparent from "/Users/jyen/Documents/SEI/hackathon/hackOManiaCarbon/src/Images/transparent.png";
import BioSuisse from "/Users/jyen/Documents/SEI/hackathon/hackOManiaCarbon/src/Images/EcoLabels/BioSuisse.png";
import BioSuisseX from "/Users/jyen/Documents/SEI/hackathon/hackOManiaCarbon/src/Images/EcoLabels/BioSuisseX.png";


const OverviewScreen = () => {
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
          flexDirection: "row",
          height: "67%",
          alignItems: "center",
          paddingLeft: "20px",
          backgroundColor: "pink",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          height: "20%",
          alignItems: "flex-start",
          paddingLeft: "40px",
          paddingTop: "20px"
        }}
      >
        <h2 style={{
            color: "#524E4E",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
            fontSize: "14px",
          }}>Eco Labels</h2>
        <div style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row"}}>
            <img style={{
            height: "50px",
            paddingLeft: "10px"
        }} src={BioSuisse} alt="BioSuisse" />
        <img style={{
            height: "50px",
            paddingLeft: "10px"
        }} src={BioSuisseX} alt="BioSuisseX" />
        </div>
      </div>
    </>
  );
};

export default OverviewScreen;
