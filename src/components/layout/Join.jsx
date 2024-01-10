import { Box, Typography, useMediaQuery } from "@mui/material"
import GradientBg from "./GradientBg"

const Join = () => {
  const isMediumScreen = useMediaQuery('(max-width:641px)');

  return (
    <GradientBg >
      <Box style={{ width: "100vw", height: "100vh" }}>
        <Box style={{ position: "relative", top: "50%", left: "50%", transform: "translate(-50%, -50%)", height: "auto", maxWidth: "500px"}}>
          <Typography variant="h1" sx={[isMediumScreen ? {fontSize: "3.5rem", lineHeight: "3.5rem"} : {fontSize: '5.5rem', lineHeight: "5.5rem"}]} style={{ textAlign: 'center', wordWrap: 'break-word', fontWeight: "500"}}>
            We&apos;ll be in touch.
          </Typography>
          <Typography variant="h5" style={{ lineHeight: "2rem", marginTop: "10px", textAlign: "center"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque, earum quam soluta perspiciatis eaque eos ab obcaecati maxime ad. Nam voluptate quos?
          </Typography>
        </Box>
      </Box>
    </GradientBg>
  )
}

export default Join