import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        서울시 문화행사 정보
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        {"만든사람 : 김수현 "}
        {"깃헙링크 "}
        {"블로그 링크"}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        Copyright © SuHyeon Kim. 2023. All rights reserved.
      </Typography>
    </Box>
  );
}
