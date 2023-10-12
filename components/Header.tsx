import { AppBar, Button, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ width: 1, left: 0, top: 0, bgcolor: "#445D48" }}>
      <Toolbar>
        <Button sx={{ color: "white", fontSize: "1.5rem" }} href="/">
          서울시 문화행사
        </Button>
      </Toolbar>
    </AppBar>
  );
}
