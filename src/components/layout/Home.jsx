import { Box, Container, Typography } from "@mui/material"
import GradientBg from "../layout/GradientBg"

const Home = () => {
  return (
    <>    
      <Box style={{ width: "100vw", height: "100vh" }}> </Box>
      <Container style={{ zIndex: -1,position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", height: "auto", maxWidth: "800px"}}>
        <Typography variant="h1" style={{ position:"relative", lineHeight: "7.5rem", textAlign: 'center', wordWrap: 'break-word', fontWeight: "500", fontSize: "7.5rem"}}>
          The ultra modern<br/>creative connection.
        </Typography>
        <Typography variant="h5" style={{ lineHeight: "2rem", marginTop: "10px", textAlign: "center"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque, earum quam soluta perspiciatis eaque eos ab obcaecati maxime ad. Nam voluptate illo deleniti, nemo consectetur architecto quibusdam ipsam iure nulla! Suscipit, maxime numquam? Vitae qui, voluptatem quos?
        </Typography>
      </Container>
      <GradientBg>
        <Box style={{ position: "relative", top: "50%", left: "50%", transform: "translate(-50%, -50%)", height: "auto", maxWidth: "800px"}}>
          <Typography variant="h1" style={{ lineHeight: "5.5rem", textAlign: 'center', wordWrap: 'break-word', fontWeight: "500", fontSize: "5.5rem"}}>
            Join the private <br/>exclusive access
          </Typography>
          {/* <input type="text" placeholder="example@example.com" style={{ border: "none", background: "grey", width: '100%', height: "50px", borderRadius: 50}}></input> */}
        </Box>
      </GradientBg>
    </>
  )
}

export default Home