import "../App.css";
import EcoLogo from '../Images/EcoLogo.png';
import HomeIllustration from '../Images/HomeIllustration.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {SearchOutlined} from "@ant-design/icons"

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
        position: "relative",
        top: "-20px",
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
        position: "relative",
        top: "-20px",
        }}>
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: "600", fontSize: "65px" }}>
            Measuring Impact,<br />
Making a Difference</h2>
    </div>

    <div
    style={{
        display: "flex",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "-20px",
        }}>
        <h4 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: "500", fontSize: "20px" }}>
        Empowering Consumers to Make Informed Choices for a Greener Tomorrow</h4>
    </div>

    <div
    style={{
        display: "flex",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "-20px",
        }}>
        <div style={{
        display: "flex",
        width: "65vw",
        height: "90px",
        marginTop: "25px",
        borderRadius: "50px",
        backgroundColor: "#EAEAEA",
        justifyContent: "space-between",
        alignItems: "center",
        }}>
            <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: "50px",
        }}>
            <h5 style={{fontFamily: 'Poppins, sans-serif', fontWeight: "500", fontSize: "12px", color: "#353535"}}>BUSINESS</h5>
            <p style={{paddingTop: "10px", fontFamily: 'Poppins, sans-serif', fontWeight: "300", fontSize: "16px", color: "#B4B4B4"}}>Which company do you want to check?</p>
            </div>
            <SearchOutlined style={{paddingRight: "50px",fontSize: '32px', color: '#5E5E5E'}}/>
        </div>
    {/* <TextField
          required
          id="filled-required"
          label="BUSINESS"
          defaultValue="What company do you want to check?"
          variant="filled"
          sx={{
            width: '800px',
            }}
        /> */}
    
    
    </div>
    </div>
    </>
  )
}

export default Home