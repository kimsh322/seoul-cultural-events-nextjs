import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#001524", p: 6 }} component="footer">
      <Typography variant="body2" color="white" align="center">
        Copyright © SuHyeon Kim. 2023. All rights reserved.
      </Typography>
    </Box>
  );
}
