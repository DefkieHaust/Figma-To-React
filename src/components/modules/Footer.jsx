import { Container, Typography, Box, useMediaQuery } from "@mui/material"

const Footer = () => {
  
   const isMediumScreen = useMediaQuery('(max-width:1000px)');
  
   return (
    <Container maxWidth="lg" style={{width: '100%', minHeight: 120, position: 'relative', background: '#041E2D', borderTop: '1px rgba(189, 206, 224, 0.10) solid', backdropFilter: 'blur(24px)'}}>
      <Box sx={[{ justifyContent: 'space-between', display: "flex", alignItems: "center"}, isMediumScreen && {flexDirection: "column", alignItems: "start"}]} style={{minHeight: '120px', paddingLeft: "30px", paddingRight: "30px"}}>
        <Box sx={[ { display: "flex" }, isMediumScreen ? { flexDirection: "column" } : {alignItems: "center"} ]}>
          <Typography sx={[isMediumScreen ? {marginBottom: "20px", marginTop: "20px"} : {margin: "5px"}]} style={{ fontSize: "1.3rem", display: "flex"}}>
            <i className="fa-brands fa-gg-circle" style={{fontSize: "25px"}}></i>
            <span style={{marginTop: "auto", marginBottom: "auto"}}>
              &nbsp; &copy; 2024 Forreels. All rights reserved.
            </span>
          </Typography>
          <Typography sx={[isMediumScreen ? {marginBottom: "5px", marginTop: "5px"} : {margin: "5px"}]} style={{ fontSize: "1.3rem"}}>Terms</Typography>
          <Typography sx={[isMediumScreen ? {marginBottom: "5px", marginTop: "5px"} : {margin: "5px"}]} style={{ fontSize: "1.3rem"}}>Privacy</Typography>
          <Typography sx={[isMediumScreen ? {marginBottom: "5px", marginTop: "5px"} : {margin: "5px"}]} style={{ fontSize: "1.3rem"}}>Cookie prefrences</Typography>
          <Typography sx={[isMediumScreen ? {marginBottom: "5px", marginTop: "5px"} : {margin: "5px"}]} style={{ fontSize: "1.3rem"}}>Do not sell or share my personal information</Typography>
        </Box>
        <Typography sx={[isMediumScreen ? {marginBottom: "20px", marginTop: "20px"} : {margin: "5px"}]} style={{ fontSize: "1.3rem"}}>
          <i className="fa-brands fa-instagram" style={{fontSize: "20px", marginLeft: "15px"}}></i>
          <i className="fa-brands fa-youtube" style={{fontSize: "20px", marginLeft: "15px"}}></i>
          <i className="fa-brands fa-facebook" style={{fontSize: "20px", marginLeft: "15px"}}></i>
          <i className="fa-brands fa-twitter" style={{fontSize: "20px", marginLeft: "15px"}}></i>
        </Typography>
      </Box>
    </Container>
  )
}

export default Footer