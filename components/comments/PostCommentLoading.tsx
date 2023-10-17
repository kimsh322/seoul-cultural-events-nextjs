import { Box } from "@mui/material";
import Loading from "../Loading";

interface Props {
  isLoadingPostComment: boolean;
}

export default function PostCommentLoading({ isLoadingPostComment }: Props) {
  return (
    <>
      {isLoadingPostComment && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "#D0D4CA",
            opacity: 0.5,
          }}
        >
          <Loading />
        </Box>
      )}
    </>
  );
}
