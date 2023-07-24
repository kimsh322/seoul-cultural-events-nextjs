import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box sx={{ width: 1 }}>
      <AppBar
        position="sticky"
        sx={{ width: 1, maxWidth: 1000, left: 0, top: 0, backgroundColor: "skyblue" }}
      >
        <Toolbar>
          <IconButton
            sx={{ mr: 2 }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
