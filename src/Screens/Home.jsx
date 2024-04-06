import "../App.css";
import EcoLogo from '../Images/EcoLogo.png';
import HomeIllustration from '../Images/HomeIllustration.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Home = () => {
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
      <img style={{
            height: "50px",
            position: "absolute",
            top: 20,
            left: 50
        }} src={EcoLogo} alt="Eco Logo" />
    </div>
    <div
    style={{
        display: "flex",
        height: "40%",
        justifyContent: "center",
        alignItems: "center",
        }}>
        <img style={{
                height: "300px",
        }} src={HomeIllustration} alt="HomeIllustration" />
    </div>

    <div
    style={{
        display: "flex",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
        }}>
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: "600", fontSize: "70px" }}>
            Measuring Impact,<br />
Making a Difference</h2>
    </div>

    <div
    style={{
        display: "flex",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        }}>
        <h4 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: "500", fontSize: "22px" }}>
        Empowering Consumers to Make Informed Choices for a Greener Tomorrow</h4>
    </div>

    <div
    style={{
        display: "flex",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        }}>
    <TextField
          required
          id="filled-required"
          label="BUSINESS"
          defaultValue="What company do you want to check?"
          variant="filled"
          sx={{
            width: '800px',
            }}
        />
    
    
    </div>
    </div>
    </>
  )
}

export default Home