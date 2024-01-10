import { Box, Container, Typography, Button, useMediaQuery } from "@mui/material"
import GradientBg from "../layout/GradientBg"
import { Link } from "react-router-dom";

const Home = () => {
  const isMediumScreen = useMediaQuery('(max-width:641px)');

  return (
    <>    
      <Container style={{ zIndex: -1,position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", height: "auto", maxWidth: "800px"}}>
        <Typography variant="h1" sx={[isMediumScreen ? {fontSize: "5rem", lineHeight: "5rem"} : {fontSize: '7.5rem', lineHeight: "7.5rem"}]} style={{ position:"relative", textAlign: 'center', wordWrap: 'break-word', fontWeight: "500", background: "linear-gradient(to right, #ffffff, #cfcfcf, #9d9d9d,#6e6e6e)", "-webkit-text-fill-color": "transparent", "-webkit-background-clip": "text"}}>
          The ultra modern creative connection.
        </Typography>
        <Typography variant="h5" style={{ lineHeight: "2rem", marginTop: "10px", textAlign: "center"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque, earum quam soluta perspiciatis eaque eos ab obcaecati maxime ad. Nam voluptate illo deleniti, nemo consectetur architecto quibusdam ipsam iure nulla! Suscipit, maxime numquam? Vitae qui, voluptatem quos?
        </Typography>
      </Container>
      <Link to="/join" style={{ position: "fixed", left: "50%", bottom: "8%",  transform: "translate(-50%, -50%)", zIndex: -1}}>
        <Button style={{ fontSize: "1.2rem", height: "50px", borderRadius: 28, background: "transparent", border: "1px solid #8b8b8b", color: "#fff", padding: "20px"}}>Sign up</Button>
      </Link>
      <Box style={{marginTop: "100vh"}}>
        <GradientBg>
          <Box style={{ position: "relative", top: "50%", left: "50%", transform: "translate(-50%, -50%)", height: "auto", maxWidth: "800px"}}>
            <Typography variant="h1" sx={[isMediumScreen ? {fontSize: "3.5rem", lineHeight: "3.5rem"} : {fontSize: '5.5rem', lineHeight: "5.5rem"}]} style={{ textAlign: 'center', wordWrap: 'break-word', fontWeight: "500", background: "linear-gradient(to right, #ffffff, #cfcfcf, #9d9d9d,#6e6e6e)", "-webkit-text-fill-color": "transparent", "-webkit-background-clip": "text"}}>
              Join the private <br/>exclusive access
            </Typography>
            <Box style={{marginTop: "20px", width: "100%"}}>
              <input type="text" placeholder="example@example.com" style={{ border: "none", background: "#223A4A", width: '100%', height: "50px", borderRadius: 50, color: "#fff", textIndent: "25px"}}></input>
              <Button style={{ fontSize: "1.2rem", height: "50px", borderRadius: 50, background: "#000dff", color: "#fff", padding: "20px", float: "right", position: 'relative', transform: "translate(0%, -100%)"}}>Subscribe</Button>
            </Box>
          </Box>
        </GradientBg>
      </Box>
    </>
  )
}

export default Home