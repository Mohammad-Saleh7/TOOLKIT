import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function NavHead() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        srcSet={"/bg-header-mobile.svg 600w, /bg-header-desktop.svg 1200w"}
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.3)),url(./bg-header-desktop.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          bgcolor: "#499183ff",
          width: "100%",
          height: { xs: 160, md: 200 },
          objectFit: "cover",
          display: "block",
        }}
      >
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  );
}
