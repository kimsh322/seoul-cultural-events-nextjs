import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}
