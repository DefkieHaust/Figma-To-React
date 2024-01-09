import { Box, Button, Container, Typography } from "@mui/material"

const Header = () => {
  return (
    <Container maxWidth="lg" style={{ zIndex: 2, width: '100vw', height: 70, position: 'sticky', top: 0, background: 'linear-gradient(90deg, rgba(4, 30, 45, 0.01) 0%, rgba(4, 30, 45, 0.01) 100%)', borderBottom: '1px rgba(189, 206, 224, 0.10) solid', backdropFilter: 'blur(24px)'}}>
      <Box sx={{ justifyContent: 'space-between', display: "flex", alignItems: "center"}} style={{height: '100%', paddingLeft: "30px", paddingRight: "30px"}}>
        <div className="Logo" style={{width: 48, height: 48, background: "white"}}>
          <span style={{color: "black"}}>Logo</span>
        </div>
        <Box sx={{ display: "flex" }}>
          <Typography style={{margin: "10px", fontSize: "1.3rem"}}>Sample</Typography>
          <Typography style={{margin: "10px", fontSize: "1.3rem"}}>Sample</Typography>
          <Typography style={{margin: "10px", fontSize: "1.3rem"}}>Sample</Typography>
          <Typography style={{margin: "10px", fontSize: "1.3rem"}}>Sample</Typography>
          <Typography style={{margin: "10px", fontSize: "1.3rem"}}>Sample</Typography>
          <Typography style={{margin: "10px", fontSize: "1.3rem"}}>Sample</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button style={{ fontSize: "1.2rem", height: "40px", borderRadius: 28, color: "#fff"}}>Sign in</Button>
          <Button style={{ fontSize: "1.2rem", height: "40px", borderRadius: 28, background: "#B70A80", color: "#fff"}}>Sign up</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Header