import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ width: 1, left: 0, top: 0 }}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          서울시 문화행사
        </Typography>
        <Link href="/allevents">전부보기</Link>
      </Toolbar>
    </AppBar>
  );
}
