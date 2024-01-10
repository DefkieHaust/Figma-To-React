import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { Link } from "react-router-dom";

const Header = () => {
  const isMediumScreen = useMediaQuery('(max-width:800px)');

  return (
    <Box style={{ zIndex: 2, width: '100vw', height: 70, position: 'fixed', top: 0, background: 'linear-gradient(90deg, rgba(4, 30, 45, 0.01) 0%, rgba(4, 30, 45, 0.01) 100%)', borderBottom: '1px rgba(189, 206, 224, 0.10) solid', backdropFilter: 'blur(24px)'}}>
      <Box sx={{ justifyContent: 'space-between', display: "flex", alignItems: "center"}} style={{ maxWidth: "1100px", margin: "auto", height: '100%', paddingLeft: "30px", paddingRight: "30px"}}>
        <Link to="/">
          <i className="fa-brands fa-gg-circle" style={{fontSize: "40px", color: "white"}}></i>
        </Link>
        {isMediumScreen ? 
          <i className="fa-solid fa-bars-staggered" style={{fontSize: "30px"}}></i> :
          <>
            <Box sx={{ display: "flex" }}>
              <Typography style={{margin: "10px", fontSize: "1.3rem"}}>Legacy</Typography>
              <Typography style={{margin: "10px", fontSize: "1.3rem"}}>SuperProducers</Typography>
              <Typography style={{margin: "10px", fontSize: "1.3rem"}}>What&apos;s New</Typography>
              <Typography style={{margin: "10px", fontSize: "1.3rem"}}>Customers</Typography>
              <Typography style={{margin: "10px", fontSize: "1.3rem"}}>Marketplace</Typography>
              <Typography style={{margin: "10px", fontSize: "1.3rem"}}>Creatives</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Link to="/join">
                <Button style={{ fontSize: "1.2rem", height: "45px", padding: "20px", borderRadius: 28, color: "#fff"}} >Sign in</Button>
                <Button style={{ fontSize: "1.2rem", height: "45px", padding: "20px", borderRadius: 28, background: "#B70A80", color: "#fff"}}>Sign up</Button>
              </Link>
            </Box>
          </>
        }
      </Box>
    </Box>
  )
}

export default Header