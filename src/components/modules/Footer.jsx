import { Container, Typography, Box } from "@mui/material"

const Footer = () => {
  return (
    <Container maxWidth="lg" style={{width: '100%', height: 120, position: 'relative', background: '#041E2D', borderTop: '1px rgba(189, 206, 224, 0.10) solid', backdropFilter: 'blur(24px)'}}>
      <Box sx={{ justifyContent: 'space-between', display: "flex", alignItems: "center"}} style={{height: '100%', paddingLeft: "30px", paddingRight: "30px"}}>
        <Typography style={{margin: "10px", fontSize: "1.3rem"}}>
          <i>icon</i> Sample text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laboriosam?
        </Typography>
        <Typography style={{margin: "10px", fontSize: "1.3rem"}}>
          <i>icon </i>
          <i>icon </i>
          <i>icon </i>
          <i>icon </i>
        </Typography>
      </Box>
    </Container>
  )
}

export default Footer