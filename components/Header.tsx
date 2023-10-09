import { AppBar, Box, Toolbar } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <Box sx={{ width: 1 }}>
      <AppBar
        position="sticky"
        sx={{ width: 1, maxWidth: 1000, left: 0, top: 0, backgroundColor: "skyblue" }}
      >
        <Toolbar>
          <Link href="/allevents">전부보기</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
