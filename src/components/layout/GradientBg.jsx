import { Box } from "@mui/material"

const GradientBg = ({ children }) => {
  return (
    <Box style={{ zIndex: 1, width: "100vw", height: "100vh", background: "radial-gradient(80% 100% at 50% 0%, #365e86 0%, #041E2D 85%, #041E2D 100%)" }}>
      {children}
    </Box>
  )
}

export default GradientBg