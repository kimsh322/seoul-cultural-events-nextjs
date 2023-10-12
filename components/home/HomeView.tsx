import { ChevronRight } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";

export default function HomeView() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 10,
        pb: 20,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url("/images/home-image.jpg")`,
      }}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          서울시 문화행사 정보
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph gutterBottom>
          서울시에서 진행하는 문화행사에 대한 정보입니다.
        </Typography>
        <Typography align="center" sx={{ mt: 5 }}>
          <Button
            size="large"
            href="/allevents"
            endIcon={<ChevronRight />}
            sx={{ color: "black", fontSize: "1.2rem", bgcolor: "white" }}
          >
            행사 전부 보기
          </Button>
        </Typography>
      </Container>
    </Box>
  );
}
